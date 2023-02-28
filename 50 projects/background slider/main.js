const sliders = document.querySelectorAll('.slider')
const body = document.querySelector('body')

let activeCount = 0
let length = sliders.length - 1

document.querySelector('.arrow-right').addEventListener('click', () => {
    (activeCount < length) ? activeCount++ : activeCount = length;

    sliders[activeCount].classList.add('active');
    setBackground(activeCount)
});

document.querySelector('.arrow-left').addEventListener('click', () => {
    if (activeCount > 0) {
        sliders[activeCount].classList.remove('active')
        activeCount--
        setBackground(activeCount)
    } else {
        activeCount = 0
    }
})

function setBackground(count) {
    body.style.backgroundImage = sliders[count].style.backgroundImage
}