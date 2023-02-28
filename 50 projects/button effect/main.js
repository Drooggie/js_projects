const btn = document.querySelector('.button__item button')

btn.addEventListener('click', e => {
    const x = e.clientX - e.target.offsetLeft
    const y = e.clientY - e.target.offsetTop

    console.log( x, y )

    const circle = document.createElement('span')
    circle.classList.add('button__item_circle')
    circle.style.top = y + 'px'
    circle.style.left = x + 'px'

    btn.appendChild(circle)
})