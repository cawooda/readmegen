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
    }

    async show() {
        this.answers = await inquirer.prompt(this.questionList);
    }

    printAnswers(){
        console.log(this.answers);
    }

}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
    const userInput = new InputSession(questions);
    await userInput.show();

}

// Function call to initialize app
init();
