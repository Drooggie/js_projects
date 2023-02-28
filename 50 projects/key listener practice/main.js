window.addEventListener('keydown', function(e) {
    document.querySelector('.keyKey').innerText = (e.key === ' ') ? 'Space' : e.key;
    document.querySelector('.keyCode').innerText = e.keyCode;
    document.querySelector('.code').innerText = e.code;
})