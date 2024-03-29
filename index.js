const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

console.log("This is a professional README generator");

const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide guidance on how to install the application.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide details about the use and steps on how to use this application.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to give your application?',
        choices: ['MIT', 'Apache', 'Boost'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide guidelines for developers who want to share their contributions.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide testing guidance.',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

function writeToFile(fileName, data) {
    const filePath = path.join(process.cwd(), fileName);
    fs.writeFileSync(filePath, data);
}

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const markdownData = generateMarkdown({...answers});
            writeToFile('README.md', markdownData);
            console.log('Success, you generated your README.md file');
        }) 
        .catch((err) => {
            console.error(err);
        });
};

init();