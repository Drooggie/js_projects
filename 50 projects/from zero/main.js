const tabs = document.querySelectorAll('h1')

let count = 0

tabs.forEach(tab => {
    const timeId = setInterval(setNumber, 0.1)
    const amount = tab.innerText

    function setNumber() {
         count += 50;
        (count >= amount) ? clearInterval(timeId) : null;
     

        tab.innerText = count;
    }
})