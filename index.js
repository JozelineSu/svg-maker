const inquirer = require('inquirer');

const shapes = ['Circle', 'Trianlge', 'Square'];

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters:',
    },
      {
        type: 'input',
        name: 'text-color',
        message: 'What color do you want your text? (Enter color keyword OR hexadecimal number)',
    },
    {
        type: 'list',
        name: 'shapes',
        message: 'Choose a shape:',
        choices: shapes,
    },
      {
        type: 'input',
        name: 'shape-color',
        message: 'What color do you want your shape? (Enter color keyword OR hexadecimal number)',
    },  
])
