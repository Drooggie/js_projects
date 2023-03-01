const player = document.querySelector('.player')
const video = document.querySelector('video')
const playPause = document.querySelector('#play')
const controls = document.querySelector('.player__controls')
const fwd = document.querySelector('#fwd')
const bwd = document.querySelector('#bwd')
const timeLine = document.querySelector('.timeline')
const progress = document.querySelector('#progress')
const mute = document.querySelector('#mute')
const volume = document.querySelector('#volume')
const fullScreen = document.querySelector('#fullscreen')
const showSpeedBtn = document.querySelector('#showSpeed')


const controlVideo = createControl()
const changeTime = debounce(() => {
    progress.style.width = (100 / (video.duration / video.currentTime)) + '%'
}, 2000)



timeLine.addEventListener('click', e => {
    let width = 100 / ( timeLine.offsetWidth /  (e.clientX - timeLine.getBoundingClientRect().left))

    video.currentTime = width * 3.60071837
    progress.style.width = width + '%'
})

mute.addEventListener('click', () => {
    if(video.muted) {
        video.muted = false
        mute.className = 'fa-solid fa-volume-high'
    } else {
        video.muted = true
        mute.className = 'fa-solid fa-volume-xmark'
    }
})

fullScreen.addEventListener('click', () => {
    if(!document.fullscreenElement) {
        player.requestFullscreen()
    } else {
        document.exitFullscreen()
    }
})

player.addEventListener('mousemove', () => {
    controls.classList.remove('hide')
    setTimeout(() => controls.classList.add('hide'), 2000)
})

let isPressed = false

showSpeedBtn.addEventListener('click', () => {
    const speed = document.createElement('ul')
    speed.classList.add('speed')
    speed.innerHTML = `
        <li class="speed__item">0.25</li>
        <li class="speed__item">0.50</li>
        <li class="speed__item">1</li>
        <li class="speed__item">1.50</li>
        <li class="speed__item">2</li>
    `
    speed.querySelectorAll('li').forEach(li => {
        li.addEventListener('click', e => {
            video.playbackRate = e.target.innerText
        })
    })

    if(isPressed) {
        isPressed = false
        document.querySelector('.speed').remove()
    } else {
        isPressed = true
        showSpeedBtn.appendChild(speed)
    }
})



playPause.addEventListener('click', controlVideo)
video.addEventListener('click', controlVideo)
video.addEventListener('timeupdate', changeTime)
video.addEventListener('ended', () => progress.style.width = 100 + '%')


fwd.addEventListener('click', () => video.currentTime += 3)
bwd.addEventListener('click', () => video.currentTime -= 3)
volume.addEventListener('change', () => {
    video.volume = volume.value
    if(volume.value == 0) {
        mute.className = 'fa-solid fa-volume-xmark'
    } else {
        mute.className = 'fa-solid fa-volume-high'
    }
})



function debounce(func, ms) {

    let isCooldown = false;
  
    return function() {
      if (isCooldown) return;
  
      func()
  
      isCooldown = true;
  
      setTimeout(() => isCooldown = false, ms);
    };
  
  }


function createControl() {
    let isPlay = false

    return () => {
        if(isPlay) {
            isPlay = false
            video.pause()
            playPause.className = 'fa-solid fa-play'
        } else {
            isPlay = true
            video.play()
            playPause.className = 'fa-solid fa-pause'
        }
    }
}