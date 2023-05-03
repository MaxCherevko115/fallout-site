
// Loader

const mask = document.querySelector('.loader')

window.addEventListener('load', () => {
    mask.style.opacity = '0'
    setTimeout(() => mask.style.display = 'none', 300)
})

// Scroll

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
});


// Parallax
window.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop;

    const front = document.querySelector('.images-parallax__front-view');
    const middle = document.querySelector('.images-parallax__middle-view');
    const background = document.querySelector('.images-parallax__background-view');


    front.parentElement.style.transform = `translateY(${scrollTop / 20}px)`;
    middle.parentElement.style.transform = `translateY(${scrollTop / 4}px)`;
    background.parentElement.style.transform = `translateY(${scrollTop / 3}px)`;
});
