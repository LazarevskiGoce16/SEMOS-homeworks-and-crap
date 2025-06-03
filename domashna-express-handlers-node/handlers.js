const fs = require('fs');

const fileWrite = (filename, data) => {
    return new Promise((success, fail) => {
        fs.writeFile(filename, data, (err) => {
            if(err) {
                return fail(err);
            }
            return success();
        });
    });
};

const studenti = async (req, res) => {
    try {
        await fileWrite('studenti.txt', JSON.stringify(req.body));
        return res.send("Data stored successfully!");
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    studenti
};
