const { readdir, stat } = require("fs").promises;

function logSizes(path) {
    return readdir(path, { withFileTypes: true }).then(what => {
        // console.log(what);
        const arrayOfCallbacks = [];
        for (let i = 0; i < what.length; i++) {
            const newPath = path + "/" + what[i].name;
            if (what[i].isFile()) {
                arrayOfCallbacks.push(
                    stat(newPath).then(details => {
                        console.log(newPath + ": " + details.size);
                    })
                );
            }
            if (what[i].isDirectory()) {
                arrayOfCallbacks.push(logSizes(newPath));
            }
        }
        return Promise.all(arrayOfCallbacks);
    });
}

console.log(logSizes(__dirname + "/files"));

logSizes(__dirname + "/files")
    .then(() => {
        console.log("done!");
    })
    .catch(err => {
        console.log(err);
    });
