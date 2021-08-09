const path = require("path");
const fs = require("fs");
const createDir = path.resolve(__dirname, "../create");
const createHtml = (people) => {
    const html = []; 
    //filters through the /create file to find "newManager", "newIntern" or "newEngineer"
    html.push(
        ...people.filter((people) => people.base() === "newManager").map((newManager) => renderManager(newManager))
    );
    html.push(
        ...people.filter((people) => people.base() === "newEngineer").map((newEngineer) => renderEngineer(newEngineer))
    );
    html.push(
        ...people.filter((people) => people.base() === "newIntern").map((newIntern) => renderIntern(newIntern))
    );
    return renderMain(html.join(""));
}

//searches for the individual parts of the template html files to retrieve data and append them
const renderManager = (newManager) => {
    let template = fs.readFileSync(path.resolve(templatesDir, "newManager.html"), "utf8");
    template = replacePlaceholders(template, "name", newManager.getName());
    template = replacePlaceholders(template, "base", newManager.getBase());
    template = replacePlaceholders(template, "email", newManager.getEmail());
    template = replacePlaceholders(template, "id", newManager.getId());
    template = replacePlaceholders(template, "officeNo", newManager.getOfficeNo());
    //returns the new edited template
    return template;
  };

//searches for the individual parts of the template html files to retrieve data and append them
  const renderEngineer = (newEngineer) => {
    let template = fs.readFileSync(path.resolve(createDir, "newEngineer.html"), "utf8");
    template = replacePlaceholders(template, "name", newEngineer.getName());
    template = replacePlaceholders(template, "base", newEngineer.getBase());
    template = replacePlaceholders(template, "email", newEngineer.getEmail());
    template = replacePlaceholders(template, "id", newEngineer.getId());
    template = replacePlaceholders(template, "github", newEngineer.getGithub());
     //returns the new edited template
    return template;
  };

  //searches for the individual parts of the template html files to retrieve data and append them
  const renderIntern = (newIntern) => {
    let template = fs.readFileSync(path.resolve(createDir, "newIntern.html"), "utf8");
    template = replacePlaceholders(template, "name", newIntern.getName());
    template = replacePlaceholders(template, "base", newIntern.getBase());
    template = replacePlaceholders(template, "email", newIntern.getEmail());
    template = replacePlaceholders(template, "id", newIntern.getId());
    template = replacePlaceholders(template, "school", newIntern.getSchool());
     //returns the new edited template
    return template;
  };

  //renders them into the main html page replacing the templates
  const renderMain = (html) => {
    const template = fs.readFileSync(path.resolve(createDir, "index.html"), "utf8");
    return replacePlaceholders(template, "team", html);
  };

  //returns the placeholders so that the application can run again off of them
  const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
  };

  //exports the page for us in index.js
  module.exports = createHtml;