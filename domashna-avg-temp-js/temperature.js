// Za doma: Imame niza od dnevni temperaturi, da se najde prosecnata temp za dadenite 
// denovi. Isto taka, da se pronajde i ispecati najladniot i najtopliot den.
// primer: const temp = [12, 15, 14, 20, 22, 30]
// Temp vo najladniot den e : 12; Temp vo najtopliot den e: 30

const temp = [12, 15, 14, 20, 22, 30]
let sum = 0

for (let index = 0; index < temp.length; index ++) {
    sum += temp[index]
}

if (!temp.length) console.log(0)
else console.log(sum / temp.length)

var highest = temp[0]

for (var i = 0; i <= temp.length; i++) {
    if (temp[i] > highest) {
        highest = temp[i]
    }
}

console.log("The highest temperature is: ", highest)

var lowest = temp[0]

for (var i = 0; i <= temp.length; i++) {
    if (temp[i] < lowest) {
        lowest = temp[i]
    }
}

console.log("The lowest temperature is: ", lowest)
