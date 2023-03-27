// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, 
// Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
// const questions = [title, description, install, usage, license, contribution, test, questions];
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

    // write a .then to take that data from the inquirer prompts and 

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


