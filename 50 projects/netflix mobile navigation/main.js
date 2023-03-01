const menus = document.querySelectorAll('.menu__item')

document.querySelector('.btn').addEventListener('click', () => {
    menus.forEach(item => {
        item.classList.add('active')
    })
})
document.querySelector('.btn-close').addEventListener('click', () => {
    for(let i = 0; i < 3; i++) {
        menus[i].style.transition = i + 1 + 's'
        menus[i].classList.remove('active')
        setTimeout(() => {
            menus[i].style.transition = (3 - i) + 's'
        }, 0)
    }
})