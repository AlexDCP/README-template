// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a brief, yet detailed description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is required to install your project?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Give instructions on how to use your project.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Please choose the license option you chose to go with for your project:',
        name: 'license',
        choices: ['none','MIT','Apache','BSD'],
    },
    {
        type: 'input',
        message: "If you'd like to contribute please explain how users can contact you to do so:",
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Please explain how to run your tests:',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Input your email:',
        name: 'questions',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        writeToFile('./dist/SAMPLEREADME.md', data);
    });
}

// Function call to initialize app
init();


