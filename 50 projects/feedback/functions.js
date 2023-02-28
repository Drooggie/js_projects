const functions = {
    addPopup: function() {
        const popup = document.createElement('div')
        popup.classList.add('popup')
        popup.innerHTML = `
            <div class="popup__box">
                <h2 class="popup__message">Thank you for your feedback</h2>
                <p class="py-4">We appreciate it</p>
                <button class="popup__close btn">X</button>
            </div>
        `
        popup.querySelector('.popup__close').addEventListener('click', () => {
            popup.classList.add('hide')
            setTimeout(() => {
                popup.remove()
            }, 1000)
        })
        
        main.appendChild(popup)
    },

    selectType: function(e) {
        removeActive()
        e.target.parentNode.classList.toggle('active')
        e.target.classList.toggle('active')
    }

}

function removeActive() {
    items.forEach(item => {
        item.classList.remove('active')
    })
}

import { items, main } from './main.js'
export const { addPopup, selectType } = functions