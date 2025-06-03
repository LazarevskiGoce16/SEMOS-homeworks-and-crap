// Da se napravi klasa Kafemat sto ke funkcionira kako mashina za pravenje kafe.
// Ima tri parametri: voda, kafe, mleko (ovie bi bile vkupna tezina vo gramovi, znaci treba da se brojki). Koga ja instancirame klasata zadavame pocetna vrednost za sekoj od ovie paramatri - na primer 100g kafe, 100g mleko i 1000g voda.
// Da se napravi metod koj sto ke pravi casa kafe i koga ke go povikate da ispise poraka deka kafeto e gotovo. Za edna casa se potrebni 7g kafe, 100g voda i 20g mleko.
// Povikajte go metodot nekolku pati za da vidite dali sostojkite vi se troshat kako sto treba, slicno kako na chas sto vezbavme so avtomobilite.
// Dokolku go povikate metodot za pravenje na kafe, a nemate dovolno od nekoja od sostojkite da se ispecati kolku grama i od koja sostojka falat.
// Za kraj, klasata da ima uste edno property, koe sto ke vi kazuva kolku kafinja vkupno ste napravile. Pocetnata vrednost mu e nula

class Coffeemaker {
    coffee = 100
    milk = 100
    water = 1000
    cups = 0

    constructor (coffee, milk, water) {
        this.coffee = coffee
        this.milk = milk
        this.water = water
    }

    coffeeCup () {
        if (this.coffee >= 7 && this.milk >= 20 && this.water >= 100) {
            this.coffee = this.coffee - 7
            this.milk = this.milk - 20
            this.water = this.water - 100

            console.log("The coffee is done!")
            this.cups = this.cups + 1
        } else {
            console.log("You don't have enough ingredients!")

            if(this.coffee < 7) console.log("Missing coffee: " + (7 - this.coffee) + " grams.")
            if(this.milk < 20) console.log("Missing milk: " + (20 - this.milk) + " grams.")
            if(this.water < 100) console.log("Missing water: " + (100 - this.water) + " grams.")
        }
    }

    numOfCoffees () {
        return this.cups
    }
}
const cupOfCoffee = new Coffeemaker (25, 60, 300)
const coffeeInterval = setInterval(startCoffeeMaking, 2000)

// setInterval (() => {
//     cupOfCoffee.coffeeCup()
//     console.log('One cup of coffee is finished!')
//     console.log('Number of cups made: ' + cupOfCoffee.numOfCoffees())
// }, 1000)

function startCoffeeMaking () {
    temp = cupOfCoffee.numOfCoffees()
    cupOfCoffee.coffeeCup()

    setTimeout(function() {
        console.log('Number of cups made: ' + cupOfCoffee.numOfCoffees())
    }, 1000);

    if(temp === cupOfCoffee.numOfCoffees()) clearInterval(coffeeInterval)
}
