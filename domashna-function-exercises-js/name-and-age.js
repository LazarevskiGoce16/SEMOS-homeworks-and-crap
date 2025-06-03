const persons = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56
    },
    {
      name: 'Rachel',
      age: 45
    },
    {
      name: 'Nate',
      age: 67
    },
    {
      name: 'Jeniffer',
      age: 65
    }
]

function differenceInAges(people) {
    let ages = []
    
    people.forEach(p => ages.push(p.age))

    return [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)]
}

var test = differenceInAges(persons)
console.log(test)


// const max = Math.max(...persons.map(person => persons.age))
// const maxValues = persons.filter(person => person.age == max)

// const min = Math.min(...persons.map(person => person.age))
// const minValues = persons.filter(person => person.age == min)

// console.log(minValues, maxValues)

