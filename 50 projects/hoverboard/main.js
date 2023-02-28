const box = document.querySelector('.board__box')


function getRandomColor() {
    const indx = Math.floor(Math.random() * 5) + 0
    return ['#ff1900', '#b300ff', '#0099ff', '#ff7700', '#00ff6a'][indx]
}

for(let i = 0; i < 210; i++) {
    const item = document.createElement('div')
    item.classList.add('board__box-item')

    box.appendChild(item)
    item.addEventListener('mouseover', () => {
        const col = getRandomColor()
        item.style.backgroundColor = col
        item.style.boxShadow = `0 0 2px ${col}, 0 0 10px ${col}`
        item.classList.add('hidden')

        setTimeout(() => {
            item.style.backgroundColor = '#333'
            item.style.boxShadow = 'none'
            item.classList.remove('hidden')
        },2000)
    })
}

console.log( getRandomColor() )