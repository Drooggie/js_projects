const selects = document.querySelectorAll('.translation__language')
const copyButtons = document.querySelectorAll('.translation__copy')
const speechBtn = document.querySelectorAll('.translation__sound')
const translateBtn = document.querySelector('.translation__btn')
const textInput = document.getElementById('input')
const textOutput = document.getElementById('output')

selects.forEach(select => {
    for(let [key, val] of Object.entries(languages)) {

        const option = document.createElement('option')
        option.innerHTML = val
        option.setAttribute('value', key)
        
        select.appendChild(option)
        select.addEventListener('click', updateLS)
    }
})

selects[0].selectedIndex = localStorage.getItem('input')
selects[1].selectedIndex = localStorage.getItem('output')


setEventListener('copy', copyButtons[0], textInput)
setEventListener('copy', copyButtons[1], textOutput)

setEventListener('speech', speechBtn[0], selects[0], textInput)
setEventListener('speech', speechBtn[1], selects[1], textOutput)


translateBtn.addEventListener('click', translate)


function translate() {
    let inputLang,
        outputLang

    for(let key of Object.keys(languages)) {
        (selects[0].value === key) ? inputLang  = key : '';
        (selects[1].value === key) ? outputLang = key : '';
    }
    
    if(textInput.value === '') return

    fetch(`https://api.mymemory.translated.net/get?q=${textInput.value}&langpair=${inputLang}|${outputLang}`)
       .then(res => res.json())
       .then(data => {
            const {responseData : {translatedText}} = data
            textOutput.value = translatedText
        })

    updateLS()
}

function setEventListener(type, domObject, from, textarea = '') {

    (type === 'copy')   ? domObject.addEventListener('click', () => copy(domObject ,from)) : '';

    (type === 'speech') ? domObject.addEventListener('click', () => textToSpeach(from, textarea)) : '';
}

function copy(domObject ,from) {
    const forCopy = document.createElement('textarea')
    forCopy.value = from.value
        
    document.body.appendChild(forCopy)
    forCopy.select()
    document.execCommand('copy')
    forCopy.remove()

    const copied = document.createElement('div')
    copied.classList.add('translation__copied')
    copied.innerText = 'Copied'

    domObject.appendChild(copied)
    setTimeout(() => {
        copied.remove()
    }, 1000)
}

function textToSpeach(from, text) {
    const utterThis = new SpeechSynthesisUtterance(text.value),
          synth = window.speechSynthesis

    let   voices,
          selectedVoice

    const toGetVoices = setInterval(() => {
        voices = synth.getVoices()
        if(voices === []) return
        clearInterval(toGetVoices)

        voices.forEach(voice => {
            const selectedOpt = from.querySelectorAll('option')[from.selectedIndex]
            if(voice.lang === selectedOpt.value) {
                selectedVoice = voice
            }
        })

        utterThis.addEventListener('error', () => {
            throw new Error('Error')
        })

        utterThis.voice = selectedVoice
        synth.speak(utterThis)

    }, 100)
}

function updateLS() {
    localStorage.setItem('input', selects[0].selectedIndex)
    localStorage.setItem('output', selects[1].selectedIndex)
}

import { languages } from './modules/language.js'

// text to speech
// selected language in LS