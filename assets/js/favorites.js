// =====================
// Save features
// =====================

const FAV_KEY_NAME = "favoritedItems";

function getObjectLS(key) {
  return JSON.parse(localStorage.getItem(key))
}

function setObjectLS(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

function save(event, link) {
  event.preventDefault();

  const favorites = getObjectLS(FAV_KEY_NAME) ? getObjectLS(FAV_KEY_NAME) : [];
  favorites.push(link);
  const uniqueFav = [...new Set(favorites)];
  setObjectLS(FAV_KEY_NAME, uniqueFav);

  // change text to red
  console.log(event.target)
  event.target.innerText = "Saved!";
  event.target.style.color = "#FE4032";
}