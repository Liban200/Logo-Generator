class Triangle {
  constructor(textColor, shapeColor, text) {
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.text = text;
  }

  setColor(color) {
    this.shapeColor = color
  }

  render() {
    return `<polygon points="50 15, 100 100, 0 100" fill="${this.shapeColor}"/>`;
  }
}

class Circle {
  constructor(textColor, shapeColor, text) {
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.text = text;
  }
  setColor(color) {
    this.shapeColor = color
  }

  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}

class Square {
  constructor(textColor, shapeColor, text) {
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.text = text;
  }

  setColor(color) {
    this.shapeColor = color
  }

  render() {
    return `<rect width="300" height="300" fill="${this.shapeColor}" />`;
  }
}

module.exports = { Square, Triangle, Circle };


