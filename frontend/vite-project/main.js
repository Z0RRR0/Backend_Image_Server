import './style.css'
import axios from 'axios'

let images = [];

axios.get('/api/images')
.then((response) => {
  images = response.data

  const app = document.querySelector('#app')
  app.innerHTML = `
  <div>
    <h1>One Piece</h1>
    <p>Crew Members: ${images.length}
  </div>
  `

  images.map((image) => {

    const div = document.createElement('div')
    const name = document.createElement('h3')
    const intro = document.createElement('p')
    const picture = document.createElement('img')
    const role = document.createElement('h5')
    
    div.id = image.id;

    name.innerText = image.name;
    intro.innerText = image.content;
    role.innerText = image.role;
    picture.src = image.imageURL;
    picture.width = "550"
    picture.height = "400"

    div.appendChild(name)
    div.appendChild(role)
    div.appendChild(intro)
    div.appendChild(picture)

    app.appendChild(div)

  })

})
.catch((error) => {console.log(error)})
