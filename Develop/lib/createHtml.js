const path = require("path");
const fs = require("fs");
const createDir = path.resolve(__dirname, "../create");
const render = (people) => {
    const html = []; 
    html.push(
        ...people.filter((people) => people.base() === "manager").map((manager) => renderManager(manager))
    );
    html.push(
        ...people.filter((people) => people.base() === "engineer").map((engineer) => renderEngineer(engineer))
    );
    html.push(
        ...people.filter((people) => people.base() === "intern").map((intern) => renderIntern(intern))
    );
    return renderMain(html.join(""));
}