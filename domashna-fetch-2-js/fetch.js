async function getPosts () {
  document.getElementById('loading').style.visibility = 'visible';

  const response = await fetch('https://jsonplaceholder.typicode.com/users')

  if (response.status.toString().startsWith('4')) { 
    console.log('Client error')
    return
  }

  const data = await response.json()

  document.getElementById('loading').style.visibility = 'hidden';
  createPost(data)
}


const createPost = (data) => {
try {
  data.forEach(person => {
    console.log(person)
    const container = document.getElementById("container")
    let userCard = document.createElement("div");

    userCard.classList = "cardBlock";

    let nameSurname = document.createElement("h1");
    nameSurname.textContent = `Name and Surname: ${person.name}`;

    let userEmailAddress = document.createElement("p");
    userEmailAddress.textContent = `Email: ${person.email}`;
    
    let userWebSite = document.createElement("a")
    userWebSite.textContent = `Website: ${person.website}`;
    userWebSite.href = `${person.website}`;

    userCard.append(nameSurname, userEmailAddress, userWebSite)
    container.append(userCard);
    })
  } catch (err) {
      console.log(err)
  } finally {
      console.log('Cleanup code goes here')
  }
}
  
getPosts()
