document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-place-form');
  form.addEventListener('submit', handleNewPlaceFormSubmit);

  const button = document.querySelector('#delete-all');
  button.addEventListener('click', handleDeleteClick);
  console.log(form);
})

const handleNewPlaceFormSubmit = function (event) {
  event.preventDefault();

  const placeListItem = createPlacesListItem(event.target)
  const placesList = document.querySelector('#places-list')
  placesList.appendChild(placeListItem)

  event.target.reset();
}

// increase progress bar
// check value is not empty on other targets

const increaseProgressBar = function (form) {
  const progress = document.getElementById('fileProgress').position + 0.1
}

const createPlacesListItem = function (form) {

  const progress = document.getElementById('fileProgress').position
  // console.log(progress);

  console.log(event);
  const placeListItem = document.createElement('li');
  placeListItem.className = "li-list"
  placeListItem.classList.add('places-list-item');

  const listCountry = document.createElement('p')
  listCountry.className = "p-list"
  listCountry.textContent = event.target.country.value
  placeListItem.appendChild(listCountry)

  const listCityArea = document.createElement('p')
  listCityArea.textContent = event.target.cityarea.value
  placeListItem.appendChild(listCityArea)

  const selection = document.createElement('p')
  selection.textContent = event.target.selection.value
  placeListItem.appendChild(selection)

  const review = document.createElement('p')
  review.textContent = event.target.elements["review"].value
  placeListItem.appendChild(review)

  const faveThing = document.createElement('p')
  faveThing.textContent = event.target.favething.value
  placeListItem.appendChild(faveThing)

  return placeListItem;

  function display() {
  var x = document.getElementById("myRadio").value;
  alert("The value of the radio button is: " + x);
}

}

const handleDeleteClick = function (event) {
  const placesList = document.querySelector('#places-list');
  placesList.innerHTML = '';
}
