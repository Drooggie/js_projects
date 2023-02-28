const html = document.querySelector('html')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
     html.classList.toggle('dark');
    (html.classList[0] === 'dark') ? btn.innerText = 'Light Mode' : btn.innerText = 'Dark Mode'
})

setInterval(function() {
    const date = new Date

    document.querySelector('.second').style.transform = `rotate(${ 6 * date.getSeconds() }deg)`
    document.querySelector('.minute').style.transform = `rotate(${ 6 * date.getMinutes() }deg)`
    document.querySelector('.hours').style.transform = `rotate(${ 30 * date.getHours() }deg)`
    
}, 1000)