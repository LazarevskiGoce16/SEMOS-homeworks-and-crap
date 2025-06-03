// conversion from meters to miles and vice versa

const distanceConverter = (type, value) => {
    switch(type) {
        case 'meter2mile':
            return value * 0.000621;
        case 'mile2meter':
            return value * 1609.344;
        default:
            break
    }
}

let distance = 69
let distanceResult = distanceConverter('meter2mile', distance)
console.log("Distance conversion result is:", distanceResult)

// conversion from kilograms to pounds and vice versa

const weightConverter = (type, value) => {
    switch(type) {
        case 'kg2lbs':
            return value * 2.204;
        case 'lbs2kg':
            return value * 0.453592;
        default:
            break
    }
}

let weight = 90 
let weightResult = weightConverter('kg2lbs', weight)
console.log("Weight conversion result is:", weightResult)

// conversion from liters to gallons and vice versa

const volumeConverter = (type, value) => {
    switch(type) {
        case 'l2gal':
            return value * 0.21996;
        case 'gal2l':
            return value * 3.7854;
        default:
            break
    }
}

let volume = 33
let volumeResult = volumeConverter('l2gal', volume)
console.log("Volume conversion result is:", volumeResult)

// conversion from euros to us dollars and vice versa

const currencyConverter = (type, value) => {
    switch(type) {
        case 'eur2usd':
            return value * 1.072;
        case 'usd2eur':
            return value * 0.934;
        default:
            break
    }
}

let currency = 500
let currencyResult = currencyConverter('eur2usd', currency)
console.log("Currency conversion result is:", currencyResult)

// conversion from pascals to atm (atmospheric pressure) and vice versa

const pressureConverter = (type, value) => {
    switch(type) {
        case 'pasc2atm':
            return value * 0.000009869;
        case 'atm2pasc':
            return value * 101325;
        default:
            break
    }
}

let pressure = 7500
let pressureResult = pressureConverter('pasc2atm', pressure)
console.log("Pressure conversion result is:", pressureResult)
