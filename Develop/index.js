// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const {generateMarkdown} = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project? (Required)",
        validate: titleInput => {
            if(titleInput){
                return true;
            }
            else{
                console.log("Please enter your project title!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please give a detailed description of your project. (Required)",
        validate: decriptionInput => {
            if(decriptionInput){
                return true;
            }
            else{
                console.log("Please enter a description!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Please give intructions for installing your project. (Required)",
        validate: installationInput => {
            if(installationInput){
                return true;
            }
            else{
                console.log("Please enter installation instructions!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Please give intructions and examples for using your project. (Required)",
        validate: usageInput => {
            if(usageInput){
                return true;
            }
            else{
                console.log("Please enter usage instructions!");
                return false;
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "Please select an open source license for your project. (Required)",
        choices: ["Unlicensed", "Boost Software", "MIT", "Apache", "Mozilla Public", "GNU LGPLv3", "GNU GPLv3", "GNU AGPLv3"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Provide guidelines for how other developers can contribute to your project. (Optional)"
    },
    {
        type: "input",
        name: "tests",
        message: "Write tests for your application and provide examples on how to run them. (Optional)"
    },
    {
        type: "input",
        name: "username",
        message: "Enter your Github username for the Questions section. (Required)",
        validate: usernameInput => {
            if(usernameInput){
                return true;
            }
            else{
                console.log("Please input your Github username!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address for the questions section. (Optional)"
    }
];

// TODO: Create a function to write README file
const writeToFile = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/README.md", data, err => {
            if(err){
                reject(err);
                return
            }
            resolve({
                ok: true,
                message: "File Created!"
            })
        })
    })
}

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions)
}

// Function call to initialize app
init()
.then(readmeData => {
    return generateMarkdown(readmeData);
})
.then(markdown => {
    return writeToFile(markdown);
})
.catch(err => {
    console.log(err);
})
