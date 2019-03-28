const express = require("express");
const app = express();
const fs = require("fs");

let hb = require("express-handlebars");
app.engine("handlebars", hb());
app.set("view engine", "handlebars");

// get array with project folders
const projs = fs.readdirSync(__dirname + "/public/projects");
console.log(projs);

app.get("/projects", (req, res) => {
    res.render("welcome", {
        projects: projs,
        layout: "main"
    });
});

app.get("/projects/:projectName/description", (req, res) => {
    const thisProj = req.params.projectName;

    if (!projs.includes(thisProj)) {
        res.status(400);
        res.send("There is no such project, you silly!");
    } else {
        const descrObj = JSON.parse(
            fs.readFileSync(
                __dirname + `/public/projects/${thisProj}/description.json`
            )
        );
        const name = descrObj.name;
        const description = descrObj.description;
        res.render("description", {
            proj: thisProj,
            description,
            name,
            layout: "main",
            projects: projs
        });
    }

    // console.log(descrObj);
});

app.use(express.static("./public"));

app.get("*", (req, res) => {
    res.status(404);
    res.send("No idea what you're looking for... sorry");
});

app.listen(8080, () => {
    console.log("listen up");
});
