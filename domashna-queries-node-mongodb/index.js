const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://<username>:<password>@cluster0.7cvxefc.mongodb.net/?retryWrites=true&w=majority';

const connect = (connectionString) => {
    return new Promise((success, fail) => {
        mongoose.connect(connectionString, err => {
            if(err) return fail(err);
            console.log('Successfully connected to DB!');
            return success();
        });
    });
};

const Studenti = mongoose.model(
    'studenti',
    {
        ime: String,
        prezime: String,
        prosek: Number,
        lokacija: {
            grad: String,
            drzhava: String
        }
    },
    'studenti'
);

connect(connectionString)
    .then(() => {
        return Studenti.find({});
    })
    .then((res) => {
        console.log(res);
        return Studenti.find({}, {ime: 1, prezime: 1, prosek: 1}).sort({prosek: -1}).limit(5);
    })
    .then((res) => {
        console.log("Top 5 studenti spored prosek:", res);
        return Studenti.find({'lokacija.grad': "Skopje"}, {ime: 1, prezime: 1, prosek: 1, 'lokacija': 1}).sort({prosek: 1}).limit(3);
    })
    .then((res) => {
        console.log("Najloshi 3 studenti spored prosek od Skopje:", res);
        return Studenti.find({'lokacija.grad': "Skopje"}, {ime: 1, prezime: 1, prosek: 1, 'lokacija': 1}).sort({prosek: -1}).limit(10);
    })
    .then((res) => {
        console.log("Najdobri 10 studenti spored prosek od Skopje:", res);
        return Studenti.find({'lokacija.drzhava': "Makedonija"}, {ime: 1, prezime: 1, 'lokacija.grad': 1}).sort({prosek: -1}).limit(3);
    })
    .then((res) => {
        console.log("Najdobri 3 studenti spored prosek od Makedonija:", res);
        return Studenti.find({'lokacija.grad': "Bitola"}, {ime: 1, prezime: 1, prosek: 1}).sort({prosek: 1}).limit(5);
    })
    .then((res) => {
        console.log("Najloshi 5 studenti spored prosek od Bitola:", res);
        return Studenti.find({'lokacija.grad': "Bitola"}, {ime: 1, prezime: 1, prosek: 1, 'lokacija': 1}).sort({prezime: 1});
    })
    .then((res) => {
        console.log("Prikaz na studenti od Bitola podredeni po prezime:", res);
        return Studenti.find({'lokacija.grad': "Kumanovo"}, {ime: 1, prezime: 1, prosek: 1, 'lokacija': 1}).sort({ime: 1});
    })
    .then((res) => {
        console.log("Prikaz na studenti od Kumanovo podredeni po ime:", res);
        // return Studenti.find({prosek: 10}, {ime: 1, prezime: 1, prosek: 1, 'lokacija': 1}).sort({prosek: -1});
        return Studenti.find({}, {ime: 1, prezime: 1, prosek: 1, 'lokacija': 1}).sort({prosek: -1}).limit(1);
    })
    .then((res) => {
        console.log("Prikaz na najdobriot student od Makedonija:", res);
    })
    .catch((err) => {
        console.log(err);
    });
