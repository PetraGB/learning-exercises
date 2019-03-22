const fs = require("fs");

function logSizes(path) {
    fs.readdir(path, { withFileTypes: true }, (err, what) => {
        if (err) {
            console.log(err);
        } else {
            for (var way in what) {
                const newPath = path + "/" + what[way].name;
                if (what[way].isFile()) {
                    fs.stat(newPath, (err, details) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(newPath + ": " + details.size);
                        }
                    });
                } else if (what[way].isDirectory()) {
                    logSizes(newPath);
                }
            }
        }
    });
}

logSizes(__dirname + "/files");

/////////////////////////

function mapSizes(path) {
    const folders = fs.readdirSync(path, { withFileTypes: true });
    const mapped = {};

    for (var i = 0; i < folders.length; i++) {
        const fileName = folders[i].name;
        const thisPath = path + "/" + fileName;
        if (folders[i].isFile()) {
            const details = fs.statSync(thisPath);
            mapped[fileName] = details.size;
        } else {
            mapped[fileName] = mapSizes(thisPath);
        }
    }
    return mapped;
}

let mappedOut = mapSizes(__dirname + "/files");
mappedOut = JSON.stringify(mappedOut, null, 4);

fs.writeFileSync("files.json", mappedOut);
