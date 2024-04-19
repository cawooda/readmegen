// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input


const questions = [
    ["input", "What was your motivation?", "motivation"],
    ["input", "Why did you build this project?", "why"],
    ["input", "What problem does it solve?","problem"],
    ["input", "What did you learn?","learning"],
    ["input", "What makes your project stand out?","standOut"], 
    ["list", "License","license",[
        "MIT",
        "CC",
        "OP",
        "Other",
    ]], 
];


class InputSession {
    constructor (questions) {
        this.questionList = questions.map((question)=>{
                return {
                    type:question[0],
                    message: question[1],
                    name: question[2],
                    choices: question[3]    
                }
        })
        this.show();
    }
    showAnswers = function() {
        console.log(this.response);
    }
    show = async function () {
        this.response = await inquirer.prompt(this.questionList);
        this.showAnswers();
        this.showLicense();
    }
    
    showLicense = function () {
        console.log(this.response.license);
    }
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
    const userInput = new InputSession(questions);
}

// Function call to initialize app
init();
