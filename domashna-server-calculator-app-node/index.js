const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.render('index'); 
});

app.get('/calculator', (req, res) => {
    res.render('calculator');
}); 

app.post('/calculator-result', (req, res) => {
    let result = 0;
    console.log(req.body);

    let op = req.body.operation;
    let a = Number(req.body.value_a);
    let b = Number(req.body.value_b);

    switch(op) {
        case "plus":
            result = a + b;
            break;
        case "minus":
            result = a - b;
            break;
        case "mnozhenje":
            result = a * b;
            break;
        case "delenje":
            result = a / b;
            break;
        default:
            break;
    };
    console.log(result); 
    res.render('calculator-result', {rezultat: result});
});

app.listen(10000, err => {
    if(err) return console.log(err);
    console.log("Server started on port 10000!");
});
