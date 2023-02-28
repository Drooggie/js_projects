const img = document.querySelectorAll('.card-header img')
const p = document.querySelectorAll('p')
let count = 0

let timeId = setInterval(setBlur, 40)

function setBlur() {
       count++
    if(count >= 100) {
        clearInterval(timeId)
        for(let elem of p) {
            elem.style.display = 'none'
        }
    }

    for(let i = 0; i < img.length; i++) {
        img[i].style.filter = `blur(${30 - (count - 70)}px)`
        p[i].textContent = count + '%'
    }
}

