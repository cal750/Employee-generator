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