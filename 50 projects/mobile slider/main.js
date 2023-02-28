const slider = document.querySelector('.slider__img')
const width = slider.offsetWidth
const length = slider.querySelectorAll('img').length
const prev = document.querySelector('.slider__prev')
const next = document.querySelector('.slider__next')

let count = 0

const timeId = setInterval(nextSlider, 2000)

prev.addEventListener('click', () => {
    resetTime()
    prevSlider()
})

next.addEventListener('click', () => {
    resetTime()
    nextSlider()
})

function nextSlider() {
    count++;
   (count >= length) ? count = 0 : '';

   slider.style.marginLeft = '-' + width * count + 'px'
}

function prevSlider() {
    count--;
    (count <= 0) ? count = 0 : ''

    slider.style.marginLeft = '-' + width * count + 'px'
}

function resetTime() {
    clearInterval(timeId)
    timeId = setInterval(nextSlider, 2000)
}
