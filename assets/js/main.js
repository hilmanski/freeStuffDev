// Get the modal
var modal = document.getElementById("modalwrapper");

// Get the button that opens the modal
var btn = document.getElementById("moreTagsBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//=====================
//Dark Mode
//=====================
//check localstorage
// if(localStorage.getItem('preferredTheme') == 'dark')
//     setDarkMode()

// document.getElementById('darkModeBtn').addEventListener("click", function(){
//     setDarkMode()
// })

// function setDarkMode() {
//     let emoticon = ''
//     let isDark = document.body.classList.toggle("darkmode");

//     if(isDark) {
//         emoticon = '🌝'
//         localStorage.removeItem('preferredTheme');
//     } else {
//         emoticon =  '🌚'
//         localStorage.setItem('preferredTheme', 'dark');
//     }
//     document.getElementById('darkModeBtn').innerHTML = emoticon
// }
