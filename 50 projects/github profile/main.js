const URL = 'https://api.github.com/users/'


const form = document.querySelector('.form')
const input = document.querySelector('.form__input')
const card = document.querySelector('.cardd');

let text


async function getUser(user) {
    try {
        const {data} = await axios(URL + user)
        
        addUserCard(data)
    } catch {
        addErrorCard()
    }
}

async function getRepos(user) {
    try {
        const {data} = await axios(URL + user + '/repos')

        addRepos(data)
    } catch(err) {
        console.log(err)
    }
}


form.addEventListener('submit', e => {
    e.preventDefault()
    getUser(input.value)
    getRepos(input.value)
})


function addUserCard(data) {
    card.innerHTML = ''
    card.innerHTML = `
        <div class="cardd-container">
            <img src="${data.avatar_url}" class="cardd__img">

            <div class="cardd-text">
                <h2 class="cardd-text__title">${data.login}</h2>
                <p class="cardd-text__subtitle py-2">${data.bio}</p>
                <ul class="cardd-text__list">
                    <li class="cardd-text__list-elem">
                        <span class="card__sub">${data.followers}</span> followers
                    </li>
                    <li class="cardd-text__list-elem">
                        <span class="card__subbed">${data.following}</span> following
                    </li>
                    <li class="cardd-text__list-elem">
                        <span class="card__repo">${data.public_repos}</span> Repositories
                    </li>
                </ul>
            </div>
        </div>
    `
}

function addRepos(data) {
    text = document.querySelector('.cardd-text')
    text.innerHTML += `
        <a target='_blank' href="${data[0].html_url}" class="cardd__repo">${data[0].name}</a>
        <a target='_blank' href="${data[1].html_url}" class="cardd__repo">${data[1].name}</a>
        <a target='_blank' href="${data[2].html_url}" class="cardd__repo">${data[2].name}</a>
    `
}

function addErrorCard() {
    card.innerHTML = `
        <div class='text-center w-100'>
            <h1 class='mx-auto'>Error!</h1>
            <p  class='mx-auto'>Write correct username</p>
        </div>
    `
}

