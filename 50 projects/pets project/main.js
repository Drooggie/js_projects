export const container = document.querySelector('.pet__container')
export const petsList  = [] 

const input = document.querySelector('.header__input')

for(let i = 1; i <= 50; i++) {
    getPoke(i)
};

input.addEventListener('input', e => {
    searchPets(e.target.value)
})

import { getPoke } from './modules/fetch.js'
import { searchPets } from './modules/functions.js'