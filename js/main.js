
const mask = document.querySelector('.mask')

window.addEventListener('load', () => {
    mask.style.opacity = '0'
    setTimeout(() => mask.style.display = 'none', 300)
})

window.addEventListener('scroll', e => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
})

SmoothScroll({
// Scroll time 400 = 0.4 секунды
animationTime : 1000,
// Step size in pixels
stepSize : 60,

// Additional settings:


// Acceleration
accelerationDelta : 30,

// Max acceleration
accelerationMax : 1.5,

keyboardSupport : true,

// Step size on the keyboard in pixels
arrowScroll : 60,

// Pulse (less tweakable)
// ratio of "tail" to "acceleration"
pulseAlgorithm : true,
pulseScale : 4,
pulseNormalize : 1,

touchpadSupport : true,
})