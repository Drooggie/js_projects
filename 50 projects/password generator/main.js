const resultEl = document.querySelector('.generator__form-input');
const lengthEl = document.querySelector('.generator__count');
const upperEl = document.querySelector('.upper');
const lowerEl = document.querySelector('.lower');
const numberEl = document.querySelector('.num');
const symbolEl = document.querySelector('.sym');
const generateEl = document.querySelector('.generator__btn');

const randomFunc = {
    up: addUp,
    low: addLow,
    num: addNum,
    sym: addSym,
}

generateEl.addEventListener('click', () => {
    const length = lengthEl.value
    const up = upperEl.checked
    const low = lowerEl.checked
    const num = numberEl.checked
    const sym = symbolEl.checked

    generatePassword(length, up, low, num, sym)
})

function generatePassword(length, up, low, num, sym) {
    let generatedPassword = ''

    const trueCount = up + low + num + sym;
    const funcCount = [{up}, {low}, {num}, {sym}].filter( item => Object.values(item)[0] )

    for(let i = 0; i < length; i += trueCount) {
        funcCount.forEach(item => {
            generatedPassword += randomFunc[ Object.keys(item)[0] ]()
        })
    }
    
    resultEl.value = generatedPassword.slice(0, length)
}


document.querySelector('.generator__form-copy').addEventListener('click', () => {
    const forCopy = document.createElement('textarea')
    forCopy.value = resultEl.value
    
    document.body.appendChild(forCopy)
    forCopy.select()
    document.execCommand('copy')
    forCopy.remove()
})


function random(length, max) {
    return Math.floor(Math.random() * length) + max
}
function addLow() {
    return String.fromCharCode(random(26, 97))
}
function addUp() {
    return String.fromCharCode(random(26, 65))
}
function addNum() {
    return String.fromCharCode(random(10, 48))
}
function addSym() {
    const symbols = '!@#$%^&*()_+{}|":<>?'
    return symbols[random(symbols.length, 0)]
}