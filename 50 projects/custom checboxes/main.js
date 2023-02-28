const second = document.querySelector('#second')
const third = document.querySelector('#third')

second.addEventListener('click', () => {
    if (second.checked) {
        third.checked = false
    }
})
third.addEventListener('click', () => {
    if (third.checked) {
        second.checked = false
    }
})
