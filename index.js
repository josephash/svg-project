const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square, Text } = require('./lib/shapes.js');

function tag(x, y) {
	return {
		open: `<svg width="${x}" height="${y}" xmlns="http://www.w3.org/2000/svg">`,
		close: `</svg>`,
	}
}

function saveSVG(elements) {
	const { open, close } = tag(300, 200);
	elements = [open, ...elements, close];
	data = elements.join();
	fs.writeFile('./examples/logo.svg', data, (err) => {
		if (err) throw err;
		console.log('Save successful!');
	});
}

async function main() {
	let answers = await inquirer.prompt([
		{
			type: 'list',
			name: 'shape',
			message: 'What shape would you like to draw?',
			choices: ['Triangle', 'Circle', 'Square'],
		},
		{
			type: 'input',
			name: 'shapeColor',
			message: 'What color would you like to use?',
			default: 'gray',
		},
		{
			type: 'input',
			name: 'text',
			message: 'What text would you like to use? (max 3 characters)',
			default: 'ABC',
			validate: (text) => {
				if (text.length > 3) {
					return 'Please enter a maximum of 3 characters';
				}
				return true;
			},
		},
		{
			type: 'input',
			name: 'textColor',
			message: 'What text color would you like to use?',
			default: 'black',
		},
	]);
	let shape = null;
	if (answers.shape === 'Triangle') {
		shape = new Triangle();
	} else if (answers.shape === 'Circle') {
		shape = new Circle();
	} else if (answers.shape === 'Square') {
		shape = new Square();
	}
	shape.setColor(answers.shapeColor);
	const text = new Text(answers.text, answers.textColor);
	saveSVG([shape.render(), text.render()]);
}

main();