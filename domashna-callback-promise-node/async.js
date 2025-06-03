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

const main = async () => {
    try {
        await fileWrite('file.txt', "Bla bla bla!");
        await fileRead('file.txt');
        await fileRename('file.txt', 'file1.txt');
        await fileCopy('file1.txt', 'file1_copy.txt');
        await fileClose('file1.txt');
    } catch(err) {
        console.log(err);
    }
};

main();

function getCurrentFilenames() {
    console.log("Current filenames:");
        fs.readdirSync(__dirname).forEach(file => {
            console.log(file);
    });
};

getCurrentFilenames();
