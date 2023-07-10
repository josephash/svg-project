class Shape {
	constructor(color = null) {
		this.color = color;
	}
	setColor(color) {
		this.color = color;
	}
}
class Triangle extends Shape {
	render() {
		return `<polygon points="20, 20 150, 180 280, 20" fill="${this.color}" />`
	}
}
class Circle extends Shape {
	render() {
		return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
	}
}
class Square extends Shape {
	render() {
		return `<rect x="70" y="20" width="260" height="160" fill="${this.color}" />`
	}
}
class Text extends Shape {
	constructor(text = null, color = null) {
		super(color);
		this.text = text;
	}
	setText(text) {
		this.text = text;
	}
	render() {
		return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`
	}
}


module.exports = { Triangle, Circle, Square, Text };