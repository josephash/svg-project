const { Triangle, Circle, Square, Text } = require('../lib/shapes.js');

describe('triangle', () => {
	test('should render a triangle', () => {
		const shape = new Triangle();
		shape.setColor('red');
		expect(shape.render()).toEqual('<polygon points="20, 20 150, 180 280, 20" fill="red" />');
	});
	test('should render a circle', () => {
		const shape = new Circle();
		shape.setColor('green');
		expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
	});
	test('should render a square', () => {
		const shape = new Square();
		shape.setColor('blue');
		expect(shape.render()).toEqual('<rect x="70" y="20" width="260" height="160" fill="blue" />');
	});
});