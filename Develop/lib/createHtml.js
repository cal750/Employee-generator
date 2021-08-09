const path = require("path");
const fs = require("fs");
const createDir = path.resolve(__dirname, "../create");
const createHtml = (people) => {
    const html = []; 
    //filters through the /create file to find "newManager", "newIntern" or "newEngineer"
    html.push(
        ...people.filter((people) => people.base() === "newManager").map((manager) => renderManager(manager))
    );
    html.push(
        ...people.filter((people) => people.base() === "newEngineer").map((engineer) => renderEngineer(engineer))
    );
    html.push(
        ...people.filter((people) => people.base() === "newIntern").map((intern) => renderIntern(intern))
    );
    return renderMain(html.join(""));
}

//searches for the individual parts of the template html files to retrieve data and append them
const renderManager = (manager) => {
    let template = fs.readFileSync(path.resolve(templatesDir, "newManager.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "officeNo", manager.getOfficeNo());
    //returns the new edited template
    return template;
  };

//searches for the individual parts of the template html files to retrieve data and append them
  const renderEngineer = (engineer) => {
    let template = fs.readFileSync(path.resolve(templatesDir, "newEngineer.html"), "utf8");
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "role", engineer.getRole());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "github", engineer.getGithub());
     //returns the new edited template
    return template;
  };

  //searches for the individual parts of the template html files to retrieve data and append them
  const renderIntern = (intern) => {
    let template = fs.readFileSync(path.resolve(templatesDir, "newIntern.html"), "utf8");
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "role", intern.getRole());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "school", intern.getSchool());
     //returns the new edited template
    return template;
  };

  //renders them into the main html page replacing the templates
  const renderMain = (html) => {
    const template = fs.readFileSync(path.resolve(templatesDir, "index.html"), "utf8");
    return replacePlaceholders(template, "team", html);
  };

  //returns the placeholders so that the application can run again off of them
  const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
  };

  //exports the page for us in index.js
  module.exports = createHtml;