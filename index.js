const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");

console.log("This is a professional README generator");

const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'editor',
        name: 'description',
        message: 'Please provide a short description of your project.Do not forget to save when finished.',
    },
    {
        type: 'editor',
        name: 'installation',
        message: 'Please provide guidance on how to install the application. Always save when done.',
    },
    {
        type: 'editor',
        name: 'usage',
        message: 'Please provide details about the use and steps on how to use this application. Always save.',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What license would you like to give your application?',
        choices: ['MIT License', 'Apache License', 'GPL License'],
    },
    {
        type: 'editor',
        name: 'contributing',
        message: 'Please provide guidelines for developers who want to share their contributions. Save.',
    },
    {
        type: 'editor',
        name: 'tests',
        message: 'Please provide testing guidance. Save!',
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





init();