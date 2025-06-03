// sequence generator - range
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
// gi pechati bukvite od a do z vo forma na niza od stringovi
console.log(range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x)));

const set = new Set (['Boban', 'Zoran', 'Goran', 'Loran', 'Goran', 'Zoran']);
// gi pechati vrednostite samo po ednash, bez razlika kolku pati se povtoruvaat
console.log(Array.from(set));

console.log(Array.isArray([])); // vrakja true
console.log(Array.isArray([1, 2, 3])); // vrakja true
console.log(Array.isArray(['1', '2', '3'])); // vrakja true
console.log(Array.isArray(new Array(5))); // vrakja true
console.log(Array.isArray(Array.prototype)); // isto taka vrakja true

console.log(Array.isArray()); // vrakja false
console.log(Array.isArray({})); // vrakja false
console.log(Array.isArray(null)); // vrakja false
console.log(Array.isArray(true)); // vrakja false
console.log(Array.isArray(1750)); // vrakja false

console.log(Array.of()); // vrakja prazna niza
console.log(Array.of(undefined)); // vrakja niza - undefined
console.log(Array.of(1, 2, 3)); // vrakja niza so chlenovi - 1, 2, 3

const hrana = ['leb', 'mleko', 'jajca', 'banana', 'jogurt', 'biskviti'];
// ja pechati dolzhinata (goleminata) na nizata
console.log(hrana.length);

const listaA = [1, 2, 3, 4]; // inicijalizirachka niza
const listaB = new Array(7); // niza so zadadena vrednost t.e. golemina
console.log(listaA.length); // kje otpechati 4
console.log(listaB.length); // kje otpechati 7

const niza = [1, 2];
console.log(niza); // ja pechati nizata
niza.length = 5; // zadava nova vrednost na nizata - 5
console.log(niza); // gi pechati starite elementi i dodava novi prazni elementi (vo sluchajov 3)
niza.forEach(element => console.log(element)); // gi pechati oddelno site elementi

const numbers = [1, 2, 3, 4, 5];
console.log(numbers); // ja pechati momentalnata niza
const length = numbers.length;
for (let i = 0; i < length; i++) { // iteriranje postoechka niza i mnozhenje na sekoj od elementite za 2
    numbers[i] *= 2;
}
console.log(numbers); // ja pechati novata iterirana niza

const nums = [1, 2, 3, 4, 5];
console.log(nums); // ja pechati momentalnata niza
if(nums.length > 3) {
    nums.length = 3; // ako goleminata na nizata e pogolema od 3, ja krati i zadava vrednost od 3
}
console.log(nums); // ja pechati skratenata niza

const num = []; // pechati prazna niza
num.length = 3; // i dava nova vrednost na praznata niza - 3
console.log(num); // zadava 3 prazni mesta za da ja popolni nizata

const fruits = ['apple', 'pear', 'banana', 'cherry'];
console.log(fruits); // ja pechatime momentalnata niza
const returnLast = (fruits) => { 
    return fruits.at(-1); // metod koj go vrakja posledniot element
}
console.log(returnLast(fruits)); // vo ovoj sluchaj kje vrati 'cherry'

fruits.push('orange'); // dodavame nov element - orange
const item = returnLast(fruits); // ja koristime istata funkcija za vrakjanje na posledniot produkt
console.log(item); // go pechati dodadeniot element
console.log(fruits); // ja pechatime novata niza

const colors = ['red', 'yellow', 'green'];
console.log(colors); // ja pechatime nizata
const lengthWay = colors[colors.length - 2]; // length - metod
const sliceWay = colors.slice(-2, -1); // slice - metod
const atWay = colors.at(-2); // at - metod
// site tri go davaat istiot rezultat - pechatenje na pretposledniot element
console.log(lengthWay);
console.log(sliceWay[0]); 
console.log(atWay);
console.log(sliceWay); // ovde vrakja niza (pretposledniot i posledniot)

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = ['g', 'h', 'i'];
const arrays = array1.concat(array2, array3); // gi dodava vtorata i tretata niza na prvata
console.log(arrays); // gi pechati site vo edna niza

const letters = ['a', 'b', 'c'];
const alphaNumeric = letters.concat(1, [2, 3]);
console.log(alphaNumeric); // gi pechati bukvite i brojkite vo zaednichka niza

const num1 = [[1]]; // vgnezdena niza
const num2 = [2, [3]]; // vgnezdena niza vo niza
const numeros = num1.concat(num2); // gi dodava elementite od vtorata niza na prvata
console.log(numeros); // ja pechatime momentalnata niza
num1[0].push(4); // dodava element - 4 na prvata vgnezdena niza
console.log(numeros); // ja pechatime novata niza

const bukvi = ['a', 'b', 'v', 'g', 'd'];
console.log(bukvi.copyWithin(0, 2, 3)); // gi pechati na pochetok elementite od index 2 do index 3
console.log(bukvi.copyWithin(1, 3)); // gi pechati na mestoto na index 1 site elementi od index 3 do kraj

const vlez = ['a', 'b', 'c'];
const arrayEntries = vlez.entries();
for (let element of arrayEntries) {
  console.log(element); // vrakja niza koja dodava broj na index pred elementot
}

const niza1 = [12, 5, 8, 130, 44];
const niza2 = [12, 54, 18, 130, 44];
const isBigEnough = (element, index, array) => {
    return element >= 10; // funkcija koja proveruva dali elementite se pogolemi ili ednakvi na 10
}
console.log(niza1.every(isBigEnough)); // vrakja false - 5 i 8 se pomali od 10
console.log(niza2.every(isBigEnough)); // vrakja true - site se pogolemi ili ednakvi na 10

const isSubset = (array1, array2) => array2.every(element => array1.includes(element)); // proveruva dali vtorata niza e podniza na prvata
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // vrakja true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // vrakja false
