const image = document.querySelector('.like__image');
const container = document.querySelector('.like__image-container')
let clicktime = 0

image.addEventListener('click', e => {
    if(clicktime === 0) {
        clicktime = new Date().getTime()
    } else {
        if((new Date().getTime() - clicktime) < 800) {
            addLike()
            clicktime = 0
        } else {
            clicktime = new Date().getTime()
        }
    }
})

function addLike() {
    const like = document.createElement('span')
    like.classList.add('like__before')

    container.append(like)
    setTimeout(() => like.remove(), 999)
}