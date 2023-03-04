const functions = {
    addCard: function(data) {
        const card = document.createElement('div')
        card.classList.add('pet__card')
    
        const id = data.id.toString().padStart(3, '0')
    
        card.innerHTML = `
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png" alt="" class="pet__card-img">
    
            <div class="pet__card-info">
                <div class="pet__card-header">
                    <h3 class="pet__name">${data.name}</h3>
                    <p class="pet__id">#${id}</p>
                </div></div>
        `
    
        card.addEventListener('click', () => {
            addPop(data, id)
        })
    
        container.appendChild(card)
        petsList.push(card)
    },

    searchPets: function (value) {
        petsList.forEach(pet => {
             const text = pet.innerText.toLowerCase()
             const input = value.toLowerCase()

             if(text.includes(input)) {
                pet.classList.remove('hide')
             } else {
                pet.classList.add('hide')
             }

             console.log(container.innerHTML)

        })
    }
}

export const { addCard, searchPets } = functions
import { container, petsList } from '../main.js'

function addPop(data, id) {

    const show = document.createElement('div')
    show.classList.add('show')
    show.innerHTML = `
        <div class="show__box d-flex align-items-center">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png" alt="" class="show__img">
        <div class="show__info d-flex flex-column">
            <div class="pet__card-header">
                <h3 class="show__info-name">${data.name}</h3>
                <p class="pet__id">#${id}</p>
            </div>
            <div class="show__info-body mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Officia soluta quidem quos nisi quasi veniam sunt aperiam 
                et, laborum a consectetur hic consequatur voluptatibus 
                possimus, sit ipsum cupiditate delectus libero. Dolore 
                voluptatum debitis, harum eum dolor temporibus fugit 
                commodi autem aut animi dolores incidunt vel, ut minus 
                totam molestias esse!
            </div>
        </div>

        <button class="show__close">X</button>
        </div>
    `

    show.querySelector('.show__close').addEventListener('click', () => {
        show.classList.add('remove')
        setTimeout(() => {
            show.remove()
        }, 1000)
    })

    container.appendChild(show)
}