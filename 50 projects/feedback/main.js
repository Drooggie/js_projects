export const main = document.querySelector('.feedback')
export const types = document.querySelector('.feedback__types')
export const items = document.querySelectorAll('.feedback__types-item')
export const submitBtn = document.querySelector('.feedback__btn')

types.addEventListener('click', e => {
    selectType(e)
})

submitBtn.addEventListener('click', addPopup)

import {selectType, addPopup} from './functions.js'