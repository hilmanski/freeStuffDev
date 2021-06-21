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
