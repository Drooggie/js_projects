const main = document.querySelector('.count__container')
const play = document.querySelector('.count__btn')
const init = document.querySelector('.count__init')

play.addEventListener('click', addCount)

function addCount() {
    const count = document.createElement('div')
    count.classList.add('count__carousel')
    count.innerHTML = `
        <h1 class="count__carousel-item">3</h1>
    `
    const number = count.querySelector('h1');

    init.classList.add('count__init_hidden')
    main.appendChild(count)

    setTimeout(() => {
        number.innerText = 2
    }, 300)
    setTimeout(() => {
        number.innerText = 1
    }, 1700)
    setTimeout(() => {
        number.innerText = 0
    }, 2950)
    setTimeout(() => {
        init.classList.remove('count__init_hidden')
        count.remove()
    }, 4200)
}

