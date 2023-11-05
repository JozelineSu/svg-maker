const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
const Triangle= require('./lib/triangle');
const Square = require('./lib/square');

function makeSVG(answer) {
    if (answer.shape === 'Circle') {
        let svg = new Circle (answer.shapeColor, answer.text, answer.textColor);
        return svg.render();
    } else if (answer.shape === 'Triangle') {
        let svg = new Triangle (answer.shapeColor, answer.text, answer.textColor);
        return svg.render();
    } else if (answer.shape === 'Square') {
        let svg = new Square (answer.shapeColor, answer.text, answer.textColor);
        return svg.render();
    }
}

const shapeList = ['Circle', 'Triangle', 'Square'];

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters:',
        validate(input) {
            if(input.length != 3) {
                return 'Please enter 3 characters'
            } 
            return true
        }
    },
      {
        type: 'input',
        name: 'textColor',
        message: 'What color do you want your text? (Enter color keyword OR hexadecimal number)',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: shapeList,
    },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'What color do you want your shape? (Enter color keyword OR hexadecimal number)',
    },  
]) .then((answer) => {
    const svg = makeSVG(answer);
    fs.writeFile('./examples/logo.svg', svg, ()=> console.log('Made logo'));
    
}).catch(err => {
    console.log(err)
});
