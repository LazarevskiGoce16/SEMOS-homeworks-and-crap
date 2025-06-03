// converting latin symbols into cyrillic symbols (characters)

const alphabetConverter = (type) => {
    switch(type) {
        case 'a':
            return 'а';
        case 'b':
            return 'б';
        case 'v':
            return 'в';
        case 'g':
            return 'г';
        case 'd':
            return 'д';
        case 'gj':
            return 'ѓ';
        case 'e':
            return 'е';
        case 'zh':
            return 'ж';
        case 'z':
            return 'з';
        case 'dz':
            return 'ѕ';
        case 'i':
            return 'и';
        case 'j':
            return 'ј';
        case 'k':
            return 'к';
        case 'l':
            return 'л';
        case 'lj':
            return 'љ';
        case 'm':
            return 'м';
        case 'n':
            return 'н';
        case 'nj':
            return 'њ';
        case 'o':
            return 'о';
        case 'p':
            return 'п';
        case 'r':
            return 'р';
        case 's':
            return 'с';
        case 't':
            return 'т';
        case 'kj':
            return 'ќ';
        case 'u':
            return 'у';
        case 'f':
            return 'ф';
        case 'h':
            return 'х';
        case 'c':
            return 'ц';
        case 'ch':
            return 'ч';
        case 'dzh':
            return 'џ';
        case 'sh':
            return 'ш';
        default:
            console.log("Invalid character!")
            break
    }
}

let symbol = alphabetConverter ('dzh')
console.log(symbol)
