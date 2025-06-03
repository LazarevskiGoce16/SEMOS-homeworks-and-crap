const nameList = ['George', 'Raymond', 'Richard', 'Martin']

function inicijali(nameList) {
    const initials = []

    for (let name of nameList) {
        let initial = name.charAt(0).toUpperCase()

        initials.push(initial)
    }

    return initials
}

let text = inicijali(nameList).join("")
console.log(text)

// const nameList = ['George', 'Raymond', 'Richard', 'Martin']

// function inicijali(nameList) {
//     const initials = []

//     nameList.forEach(e => { initials.push(e.charAt(0).toUpperCase()) });

//     return initials
// }

// let text = inicijali(nameList).join("")
// console.log(text)