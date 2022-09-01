// Get the modal
const modal = document.getElementById("modalwrapper");

// Get the button that opens the modal
const btn = document.getElementById("moreTagsBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = () => modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = () => modal.style.display = "none";

// When the user clicks anywhere outside of the modal, close it
window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
};

// =====================
// Dark Mode
// =====================
function setDarkMode() {
  let status = "";
  const isDark = document.body.classList.toggle("darkmode");

  if (isDark) {
    status = "🌝 Light";
    localStorage.setItem("preferredTheme", "dark");
  } else {
    status = "🌚 Dark";
    localStorage.removeItem("preferredTheme");
  }
  document.getElementById("darkModeBtn").innerHTML = status;
}

// check localstorage
if (localStorage.getItem("preferredTheme") == "dark") setDarkMode();

// Get dark mode button
const darkModeBtn = document.getElementById("darkModeBtn")

// Add event to dark mode button
darkModeBtn.onclick = () => setDarkMode();

