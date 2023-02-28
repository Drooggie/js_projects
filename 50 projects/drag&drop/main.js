const inner = document.querySelector('.drag-drop__item_inner')
const items = document.querySelectorAll('.drag-drop__item')

inner.addEventListener('dragstart', function() {
    setTimeout(() => this.className = 'biba', 0)
})
inner.addEventListener('dragend', function() {
    this.className = 'drag-drop__item_inner'
})

items.forEach(item => {
    const back = document.createElement('div')
    item.appendChild(back)

    item.addEventListener('dragover', function(e) {
        e.preventDefault()
        this.className += ' drag-drop__item_hovered'
    })
    item.addEventListener('dragleave', function() {
        this.className = 'drag-drop__item'
    })
    item.addEventListener('drop', function() {
        this.className = 'drag-drop__item'
        this.appendChild(inner)
    })
    item.addEventListener('dragenter', e => {
        e.preventDefault()
    })
})

// const inner = document.querySelector('.drag-drop__item_inner')
// const items = document.querySelectorAll('.drag-drop__item')

// inner.addEventListener('dragstart', function() {
//     setTimeout(() => this.className = 'drag-drop__item_invisible', 0)
// })
// inner.addEventListener('dragend', function() {
//     this.className = 'drag-drop__item_inner'
// })


// items.forEach(item => {
//     item.addEventListener('dragenter', function(e) {
//         e.preventDefault()
//     })

//     item.addEventListener('dragover', function(e) {
//         e.preventDefault()
//         this.className += ' drag-drop__item_hovered'
//     })

//     item.addEventListener('dragleave', function() {
//         this.className = 'drag-drop__item'
//     })

//     item.addEventListener('drop', function() {
//         this.className = 'drag-drop__item'
//         this.append(inner)
//     })
// })