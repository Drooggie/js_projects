let a = b = op = ''
let fin = false

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const METHODS = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
    '%': (a ,b) => a % b,
}

const TABLET = document.querySelector('.tablet p')


document.querySelector('#ac').onclick = clear

function clear() {
    TABLET.textContent = ''
    a = ''
    b = ''
    op = ''
    fin = false
}


document.querySelector('.buttons').onclick = (event) => {

    if ( !event.target.classList.contains('btn')) return
    if (  event.target.classList.contains('ac') ) return

        let key = event.target.textContent


        if(DIGITS.includes(key)) {
            if(b === '' && op === '' && fin === false) {
                a += key
            } else if(a !== '' && fin === true) {
                a = key
                fin = false
            } else {
                b += key
            }
        }

        if(METHODS.hasOwnProperty(key)) {
            op = key
        }

        if (key === '+/-' && op !== '' && b !== '') {
            if(op === '+') {
                op = '-'
            } else if(op === '-') {
                op = '+'
            }
        }

        if(key === '=' && b !== '') {
            a = METHODS[op](a, b)
            op = ''
            b = ''
            fin = true
        }


        TABLET.textContent = `${a} ${op} ${b}`

}



const switcher = document.querySelectorAll('.change-theme')

switcher.forEach(sw => {
    sw.addEventListener('click', function() {
        document.querySelector('[title="theme"').setAttribute('href', `./themes/theme-${this.dataset.theme}.css`)
    })
})


// let a = b = op = ''
// let finish = false

// const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
// const METHODS = {
//     '+': (a, b) => a + b,
//     '-': (a, b) => a - b,
//     '*': (a, b) => a * b,
//     '/': (a, b) => a / b,
//     '%': (a, b) => a % b,
// }

// const TABLET = document.querySelector('.tablet p')


// function clear() {
//     TABLET.textContent = ''
//     a = ''
//     b = ''
//     op = ''
// }

// document.querySelector('#ac').onclick = clear


// document.querySelector('.buttons').onclick = (event) => {

//     if(!event.target.classList.contains('btn')) return
//     if(event.target.classList.contains('ac')) return

//     let key = event.target.textContent

//     if(DIGITS.includes(key)) {
//         if (b === '' && op === '' && !finish) {
//             a += key
//         } else if(b === '' && op === '' && finish) {
//             a = key
//             finish = false
//         }else {
//             b += key
//         }
//     }

//     if(METHODS.hasOwnProperty(key)) {
//         if ( a !== '' && b === '') {
//             op = key
//         } else {
//             a = METHODS[op](+a, +b)
//             op = key
//             b = ''
//         }
//     }

//     if (key === '+/-' && op !== '' && b !== '') {
//         if(op === '+') {
//             op = '-'
//         } else if(op === '-') {
//             op = '+'
//         }
//     }

//     if (key === '=') {
//         a = METHODS[op](+a, +b)
//         op = ''
//         b = ''
//         finish = true
//     }

    

//     TABLET.textContent = a + ' ' + op + ' ' + b
// }




// const switcher = document.querySelectorAll('.change-theme');

// switcher.forEach(swit => {
//     swit.addEventListener('click', function() {
//         themeEntre(this.dataset.theme)
//     })
// })

// function themeEntre(themeName) {
//     let themeUrl = `./themes/theme-${themeName}.css`
//     document.querySelector('[title="theme"]').setAttribute('href', themeUrl)
// }

