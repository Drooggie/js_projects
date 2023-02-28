const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bcab580e465d8efe8026364e7c53df89&page='
const SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=bcab580e465d8efe8026364e7c53df89&query='
const IMG = 'https://image.tmdb.org/t/p/w500'
const search = document.querySelector('form input')
const footer = document.querySelector('footer')

const main = document.querySelector('main .container')

const getFilmList = createFetcher()
getFilmList()

function createFetcher() {
    let i = 0

    return async function getFilmList() {
        i++

        const data = await (await fetch(API_URL + i)).json()
    
        addFilms(data.results)
    }
}

function addFilms(movies) {

    movies.forEach(movie => {
        const {title, poster_path: img, vote_average: vote, overview} = movie;
        const movieContainer = document.createElement('div')

        movieContainer.classList.add('film-container')
        movieContainer.innerHTML = `
            <div class="film-header">
            <img class="w-100 h-100" src="${IMG + img}" alt="">
            </div>

            <div class="film-body d-flex 
                        justify-content-between 
                        align-items-center 
                        p-3">

                <h3>${title}</h3>
                <span>${vote}</span>

            </div>

            <div class="information p-4">${overview}</div>
        `

        let movieName = movieContainer.querySelector('h3')

        if(movieName.innerText.length > 25) {
            movieName.innerText = movieName.innerText.slice(0, 25) + '...'
        }

        main.appendChild(movieContainer)
    })
}

window.addEventListener('scroll', () => {
    if (window.innerHeight > footer.getBoundingClientRect().top) {
        getFilmList()
    }
})

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault()
    
    if(search.value !== '') {
        getFilmList(SEARCH + search.value)
        search.value = ''
    } else {
        window.location.reload()
    }
})