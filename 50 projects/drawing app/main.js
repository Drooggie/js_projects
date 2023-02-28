const sizeVar = document.querySelector('.canvas__actual')
const cursor = document.querySelector('.cursor')
const canvas = document.querySelector('canvas')
const ntx = canvas.getContext('2d')
let timeId;



let size = sizeVar.innerText
let isDrawing = false
let color
let x
let y

canvas.addEventListener('mousedown', e => {
    isDrawing = true

    x = e.offsetX
    y = e.offsetY

    color = document.querySelector('.canvas__color').value
})

canvas.addEventListener('mouseup', () => {
    isDrawing = false

    x = undefined
    y = undefined                                                                                                                                                                                               
})

canvas.addEventListener('mousemove', e => {
    if(isDrawing) {
        x2 = e.offsetX
        y2 = e.offsetY

        drawC(x2, y2)
        drawLine(x, y, x2, y2)
        x = x2
        y = y2
    }
})


document.querySelector('.canvas__increase').addEventListener('click', () => {
     size++;
    (size < 10) ? size = '0' + size : '';
     sizeVar.innerText = size

    console.log(size)
})

document.querySelector('.canvas__decrease').addEventListener('click', () => {
    size--;
   (size < 10) ? size = '0' + size : '';
    
   (+size < 2) ? size = '01' : '';

    sizeVar.innerText = size;
})

document.querySelector('.canvas__clear').addEventListener('click', () => {
    ntx.clearRect(0, 0, canvas.width, canvas.height)
})


function drawC(x, y) {
    ntx.beginPath()
    ntx.arc(x, y, size, 0, Math.PI * 2, true)
    ntx.fillStyle = color
    ntx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ntx.beginPath()
    ntx.moveTo(x1, y1)
    ntx.lineTo(x2, y2)
    ntx.strokeStyle = color
    ntx.lineWidth = size * 2
    ntx.stroke()
}

canvas.addEventListener('mouseover', mouseUpdate)
canvas.addEventListener('mouseleave', () => clearInterval(timeId))

function mouseUpdate(e) {
    timeId = setInterval(() => {
        let x = e.clientX
        let y = e.clientY
        cursor.style.left = x + 'px'
        cursor.style.top = y + 'px'
        console.log('boba')
    }, 50)
}