function sendRequest() {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(data => {
		handleData(data)
	})
}

function handleData(data) {

	data.forEach(person => {
		console.log(person)

		let cardElement = document.createElement('div')
		cardElement.classList.add('card')

		let ppElement = document.createElement('div')
		ppElement.classList.add('profile-image')

		let imageElement = document.createElement('img')
		imageElement.src = 'https://i.imgur.com/qcIwu8b.png'
		imageElement.alt = 'No Photo'
		ppElement.appendChild(imageElement)

		let nameElement = document.createElement('p')
		nameElement.classList.add('name')
		nameElement.innerText = person.name

		let emailElement = document.createElement('p')
		emailElement.classList.add('email')
		emailElement.innerText = person.email

		let webElement = document.createElement('div')
		let link = document.createElement('a')
		link.href = person.website
		link.innerText = person.website
		webElement.appendChild(link)
		
		let addrElement = document.createElement('p')
		addrElement.classList.add('addr')
		addrElement.innerText = person.address.street + ' ' + person.address.suite + ' ' + person.address.city

		cardElement.appendChild(ppElement)
		cardElement.appendChild(nameElement)
		cardElement.appendChild(emailElement)
		cardElement.appendChild(webElement)
		cardElement.appendChild(addrElement)

		document.getElementsByClassName('cards')[0].appendChild(cardElement);
	})

}

sendRequest()
