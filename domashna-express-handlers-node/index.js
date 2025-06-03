// za doma
// ruta POST /studenti
// na nea da mozheme da pratime JSON
/*
{
    "ime": "Pero",
    "prezime": "Perovski",
    "prosek": 9.2
}
*/
// otkako handler funkcijata kje gi primi podatocite, treba da gi zapishe vo nov tekst fajl

const express = require('express');
const handlers = require('./handlers.js');

const app = express();
app.use(express.json());
app.post('/studenti', handlers.studenti);

app.listen(8080, (err) => {
    if(err) {
        console.log(err);
    }
    console.log("SERVER SUCCESSFULLY STARTED!");
});
