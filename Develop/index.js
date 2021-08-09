//adding starter constants and require
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

//adding in require modules through /lib
const newIntern = require("./lib/newIntern");
const newEngineer = require("./lib/newEngineer");
const newManager = require("./lib/newManager");

//adding the js that appends the html aspects together
const render = require("./lib/createHtml")

//addding in directory path and logic
const output = path.resolve(__dirname, "output");
outputPath = path.join(output, "user.html")

const questions = [{
        type: "input",
        name: "name",
        message: "What is the team member's name?",
      },
    
      {
        type: "input",
        name: "id",
        message: "What the team member's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the team member's email?",
      },
      {
        type: "list",
        name: "role",
        message: "What is team member's role?",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ];

    const team = [];

    const generateTeam = () => {
  inquirer
    .prompt(questions)
    .then((ans1) => {
      inquirer
        .prompt([
          {
            when: () => ans1.base === "Manager",
            type: "input",
            message: "What is their office number",
            name: "officeNumber",
          },
          {
            when: () => ans1.base === "Engineer",

            type: "input",
            message: "What is the GitHub Username?",
            name: "github",
          },

          {
            when: () => ans1.base === "Intern",

            type: "input",
            message: "What is the school's name?",
            name: "school",
          },

          {
            type: "confirm",
            message: "Would you like to add another team member?",
            name: "addMember",
          },
        ])

        .then((ans2) => {
          if (ans1.base === "Manager") {
            const manager = new Manager(ans1.name, ans1.id, ans1.email, ans1.base, ans2.officeNumber);
            team.push(newManager);
          }

          if (ans1.base === "Engineer") {
            const engineer = new Engineer(ans1.name, ans1.id, ans1.email, ans1.base, ans2.github);
            team.push(newEngineer);
          }

          if (ans1.base === "Intern") {
            const intern = new Intern(ans1.name, ans1.id, ans1.email, ans1.base, ans2.school);
            team.push(newIntern);
          }
          if (ans2.addMember) {
            generateTeam();
          } else {
            team.forEach((team) => {
              console.log(team);
            });
            fs.writeFile(outputPath, render(team), (err) => {
              if (err) {
                throw err;
              }
              console.log("Success, team HTML is created!");
            });
          }
        });
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
};

generateTeam();
    
    