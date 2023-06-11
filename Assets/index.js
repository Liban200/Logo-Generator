const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Triangle, Square} = require("./lib/shapes");

class SVG{
    constructor() {
      this.textEl = ''
      this.shapeEl = ''
    }
    render (){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ${this.shapeEl} ${this.textEl} </svg>
        `
    }
    setTextElement(text,color){
        this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeEl = shape.render()
    }
}

const questions = [
        {
            type: "input",
            name: "text",
            message: "Enter (3) letters of your choice for the logo. "
        },
        {
            type: "input",
            name: "textColor",
            message: "Choose a text color via color keyword or hexadecimal. ",
        },
        {
            type: "list",
            name: "shape",
            message: "What shape would you like the logo to be?",
            choices: ["Triangle", "Square", "Circle"],
            
        },
        {
            type: "input",
            name: "shapeColor",
            message: "Choose shape color via color keyword or hexadecimal number",
        },
    ];

    inquirer.prompt(questions).then ((response) => {
        let shape;
        if (response.shape === 'Square'){
            shape = new Square(response.textColor, response.shapeColor, response.text)
        }
        if (response.shape === 'Triangle'){
            shape = new Triangle(response.textColor, response.shapeColor, response.text)
        }
        if (response.shape === 'Circle') {
            shape = new Circle(response.textColor, response.shapeColor, response.text)
        }
        console.log(response)
       shape.setColor(response.shapeColor)
        let svg = new SVG()
        svg.setShapeElement(shape)
        svg.setTextElement(response.text, response.textColor)
        fs.writeFile('shape.svg', svg.render(), (err) => {
            if(err) {
              console.log('There was an error: ' + err);
            } else {
          
            }
          })
        });