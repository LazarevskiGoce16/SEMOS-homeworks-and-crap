// Da se napishe programa koja sto ke funkcionira kako kalkulator. Korisnikot preku tastatura vnesuva dve brojki i operator. Validni opearotri se +, -, *, /, %. Spored vneseniot operator, treba da se izvrsi zadadenata operacija vrz dvata broja, na primer vnesuvame "10", vnesuvame "20", vnesuvame "-", operacijata bi bila "10 - 20". Rezultatot od operacijata da se ispecati vo konzola. Dokolku e vnesen nevaliden broj za bilo koja vrednost ili nevaliden operator, treba da se ispecati poraka za greska, na primer: "invalid number", "invalid operator".
var result
const operator = prompt('Enter the operator (+, -, *, /, %): ')

const number1 = Number(prompt('Enter the first number: '))
const number2 = Number(prompt('Enter the second number: '))

switch(operator) {
    case '+': {
        console.log(result = number1 + number2)
        break
    }
    case '-': {
        console.log(result = number1 - number2)
        break
    }    
    case '*': {
        console.log(result = number1 * number2)
        break
    }
    case '/': {
        console.log(result = number1 / number2)
        break
    }
    case '%': {
        console.log(result = number1 % number2)
        break
    }
    default: {
        console.log('Invalid operator!')
    }
}