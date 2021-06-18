//=====================
//Dark Mode
//=====================
//check localstorage
if(localStorage.getItem('preferredTheme') == 'dark')
    setDarkMode()

document.getElementById('darkModeBtn').addEventListener("click", function(){
    setDarkMode()
})

function setDarkMode() {
    let emoticon = ''
    let isDark = document.body.classList.toggle("darkmode");

    if(isDark) {
        emoticon = '🌝'
        localStorage.removeItem('preferredTheme');
    } else {
        emoticon =  '🌚'
        localStorage.setItem('preferredTheme', 'dark');
    }
    document.getElementById('darkModeBtn').innerHTML = emoticon
}

//=====================
//lazy loading image
//=====================
var lazyImg = document.querySelectorAll('img[data-src]');

lazyLoad();
window.onscroll = function() { lazyLoad(); }

function lazyLoad() {
    for(var i=0; i<lazyImg.length; i++){
        if(isElementInViewport(lazyImg[i])){
            if (lazyImg[i].getAttribute('data-src')){
                lazyImg[i].src = lazyImg[i].getAttribute('data-src');
                lazyImg[i].removeAttribute('data-src');
            }
        }
    }
    cleanLazyImage();
}

function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function cleanLazyImage() {
    lazyImg = Array.prototype.filter.call(
            lazyImg, function(l){
                return l.getAttribute('data-src');
             }
    );
}