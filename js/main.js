
const mask = document.querySelector('.mask')

window.addEventListener('load', () => {
    mask.style.opacity = '0'
    setTimeout(() => mask.style.display = 'none', 300)
})

window.addEventListener('scroll', e => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
})

SmoothScroll({
animationTime : 1000,

stepSize : 60,

accelerationDelta : 30,

accelerationMax : 1.5,

keyboardSupport : true,

arrowScroll : 60,

pulseAlgorithm : true,
pulseScale : 4,
pulseNormalize : 1,

touchpadSupport : true,
})