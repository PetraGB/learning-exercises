const fs = require("fs");

let thisHtml = "";
const projs = fs.readdirSync(__dirname + "/projects", { withFileTypes: true });

for (var i = 0; i < projs.length; i++) {
    if (projs[i].isDirectory()) {
        thisHtml += `<div><a href="${projs[i].name}/">${
            projs[i].name
        }</a></div>`;
    }
}

exports.getHtml = function() {
    return thisHtml;
};
