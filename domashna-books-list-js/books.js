// Од листата со книги што ја имавме во вежбите со објектите да се изгенерира HTML UL елемент // во кој што секоја книга ќе биде посебен LI елемент (таг) и ќе ги пишува авторот, годината  // и името на книгата. Генерирањето на HTML елементите да се направи со функции, може да 
// биде со клик на копче, а може и инстанто при лоадирање на страната, како сакате битно да 
// биде со функција.

const books = [
    {
        name: 'Crime and Punishment',
        author: 'Fyodor Dostoevsky',
        year: 1866,
        read: true
    },
    {
        name: 'Harry Potter',
        author: 'J.K.Rowling',
        year: 2000,
        read: false
    },
    {
        name: 'The art of war',
        author: 'Sun Tzu',
        year: 200,
        read: false
    },
    {
        name: 'The Hobbit',
        author: 'J.R.R.Tolkien',
        year: 1910,
        read: true
    }
] 

const changeText = () => {
    const element = document.getElementById('title')
    element.textContent = "List of Books"
    const booksElement = document.createElement('ul')
    console.log(books.length)

    for(var i = 0; i < books.length; i++) {
        const bookElement = document.createElement('li')
        bookElement.textContent = books[i].name + ' (' + books[i].year + '), ' + books[i].author;
        booksElement.appendChild(bookElement);
    }

    document.body.appendChild(booksElement)
}