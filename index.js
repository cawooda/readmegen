
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const readmeFileName = 'README.md';

const questions = [
    ["input", "Email Address", "email"],
    ["input", "GitHub Profile", "github"],
    ["input", "Project Title", "title"],
    ["input", "Project Description", "description"],
    ["input", "Installation instructions:", "instructions"],
    ["input", "Usage Information:", "usage"],
    ["input", "Feature Information:", "features"],
    ["input", "Guidelines for Contribution:", "guidelines"],
    ["input", "Instgructions for Testing:", "testing"],
    ["list", "License","license",generateMarkdown.getLicense()], 
];

//input session is a class that when instantiated, shows a list of questions and stores their response
// Its show method displays the questions and the processAnswers method writes the result of the answers as a readme file 
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
    show = async function () {
        this.data = await inquirer.prompt(this.questionList);
        console.log(this.data);
        writeToFile(readmeFileName, generateMarkdown(this.data));
    }
    
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(readmeFileName,data,(err)=>console.log(err));
}

// TODO: Create a function to initialize app
async function init() {
    const userInput = await new InputSession(questions);
    
}

// Function call to initialize app
init();
