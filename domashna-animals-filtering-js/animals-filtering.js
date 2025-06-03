const addAnimals = () => {
    const animalType = document.getElementById('animalType')
    const numOfAnimal = document.getElementById('numOfAnimal')
  
    if (!animalType.value || !numOfAnimal.value) {
        alert("Please insert the animal type and the number of specimens")
         return
    }
  
    const newAnimal = {
        type: animalType.value.toLowerCase(),
        number: numOfAnimal.value
    }
  
    let animals = localStorage.getItem('animals')
    if (!animals) {
        animals = []
    } else {
        animals = JSON.parse(animals)
    }
  
    let animalAlreadyExists = false
    animals = animals.map(animal => {
        if (animal.type === newAnimal.type) {
         animalAlreadyExists = true
        return { ...animal, number: Number(animal.number) + Number(newAnimal.number) }
      }
        return animal
    })

    if (!animalAlreadyExists) {
        animals = [...animals, newAnimal] 
    }
  
localStorage.setItem('animals', JSON.stringify(animals))
  
generateListOfAnimalsHtml(animals)

}
  
  const generateListOfAnimalsHtml = (animalsArray) => {
    const htmlContainer = document.getElementById('container')
    const listOfAnimals = document.getElementById('listOfAnimals')
    if (listOfAnimals) {
      listOfAnimals.remove()
    }
  
    const htmlList = document.createElement('ul')
    htmlList.id = 'listOfAnimals'
    htmlContainer.appendChild(htmlList)
  
    animalsArray.forEach(animal => {
      const htmlItem = document.createElement('li')
      htmlItem.textContent = `${animal.type} - ${animal.number} number of species`
      htmlList.appendChild(htmlItem)
    })
}
  
generateListOfAnimalsHtml(JSON.parse(localStorage.getItem('animals')))

function search (value) {
    value = value.toLowerCase().trim()
    console.log('search works' + value)

    const initialList = JSON.parse(localStorage.getItem('animals'))
    const filteredList = initialList.filter((animal) => {
        if (animal.type.includes(value)) {
            return true
        }
        return false
    })
    generateListOfAnimalsHtml(filteredList)
}

function reset () {
    console.log('reset works')
    document.getElementById('search').value = ''
    generateListOfAnimalsHtml(JSON.parse(localStorage.getItem('animals')))
}
