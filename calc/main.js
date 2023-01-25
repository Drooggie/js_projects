let a = b = op = ''
let finish = false

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const METHODS = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
    '%': (a, b) => a % b,
}

const TABLET = document.querySelector('.tablet p')


function clear() {
    TABLET.textContent = ''
    a = ''
    b = ''
    op = ''
}

document.querySelector('#ac').onclick = clear


document.querySelector('.buttons').onclick = (event) => {

    if(!event.target.classList.contains('btn')) return
    if(event.target.classList.contains('ac')) return

    let key = event.target.textContent

    if(DIGITS.includes(key)) {
        if (b === '' && op === '' && !finish) {
            a += key
        } else if(b === '' && op === '' && finish) {
            a = key
            finish = false
        }else {
            b += key
        }
    }

    if(METHODS.hasOwnProperty(key)) {
        if ( a !== '' && b === '') {
            op = key
        } else {
            a = METHODS[op](+a, +b)
            op = key
            b = ''
        }
    }

    if (key === '+/-' && op !== '' && b !== '') {
        if(op === '+') {
            op = '-'
        } else if(op === '-') {
            op = '+'
        }
    }

    if (key === '=') {
        a = METHODS[op](+a, +b)
        op = ''
        b = ''
        finish = true
    }

    

    TABLET.textContent = a + ' ' + op + ' ' + b
}