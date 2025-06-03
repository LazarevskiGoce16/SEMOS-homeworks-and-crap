const fs = require('fs');

const fileWrite = (filename, data) => {
    return new Promise((success, fail) => {
        fs.writeFile(filename, data, (err) => {
            if (err) {
                return fail(err);
            }
            return success();
        });
    });
};

fileWrite('imenik.txt', 'Goce, Petko, Branko')
    .then(() => {
        console.log("SUCCESS!");
    }) .catch((err) => {
        console.log(err);
    });

const fileRead = (path) => {
    return new Promise((success, fail) => {
        fs.readFile(path, "utf-8", (err, data) => {
            if (err) {
                return fail(err);
            }
            return success(data);
        });
    });
};
    
fileRead('imenik.txt')
    .then((data) => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });

const fileRename = (filename, newFilename) => {
    return new Promise((success, fail) => {
        fs.rename(filename, newFilename, (err) => {
            if (err) {
                return fail(err);
            }
            return success();
        });
    });
};

fileRename('imenik.txt', 'iminja.txt')
    .then(() => {
        console.log("Successfully renamed your file!");
    }) .catch((err) => {
        console.log(err);
    });

const fileCopy = (filename, copiedFile) => {
    return new Promise((success, fail) => {
        fs.copyFile(filename, copiedFile, (err) => {
            if (err) {
                return fail(err);
            }
            return success();
        });
    });
};

fileCopy('iminja.txt', 'iminja_copy.txt')
    .then(() => {
        console.log("Successfully copied your file!")
    }) .catch((err) => {
        console.log(err);
    });

const fileClose = (file_descriptor) => {
    return new Promise((success, fail) => {
        fs.close(file_descriptor, (err) => {
            if (err) {
                return fail(err);
            }
            return success();
        });
    });
};

fileClose('iminja.txt')
    .then(() => {
        console.log("File closed successfully!");
    }) .catch((err) => {
        console.log(err);
    });

function getCurrentFilenames() {
    console.log("Current filenames:");
        fs.readdirSync(__dirname).forEach(file => {
            console.log(file);
    });
};

getCurrentFilenames();
