const config = {
    headers: {
        'Accept': 'application/json'
    }
}

async function getJoke() {
    const data = await (await fetch('https://icanhazdadjoke.com/', config)).json()
    
    document.querySelector('p').innerText = data.joke
    
    // fetch('https://icanhazdadjoke.com/', config)
    //     .then(response => response.json())
    //     .then(data => {
    //         document.querySelector('p').innerText = data.joke
    //     })
}
getJoke()

document.querySelector('.getJoke').addEventListener('click', getJoke)