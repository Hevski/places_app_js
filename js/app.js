document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-place-form');
  form.addEventListener('submit', handleNewPlaceFormSubmit);

  const button = document.querySelector('#delete-all');
  button.addEventListener('click', handleDeleteClick);
})

const handleNewPlaceFormSubmit = function (event) {
  event.preventDefault();

  const placeListItem = createPlacesListItem(event.target)
  const placesList = document.querySelector('#places-list')
  placesList.appendChild(placeListItem)

  event.target.reset();
  console.log(event);
}

const createPlacesListItem = function (form) {
  const placeListItem = document.createElement('li');
  placeListItem.classList.add('places-list-item');

  const progress = document.getElementById('fileProgress').position
  

  const listCountry = document.createElement('p')
  listCountry.textContent = `Country: ${event.target.country.value}`
  placeListItem.appendChild(listCountry)

  const listCityArea = document.createElement('p')
  listCityArea.textContent = `City/Area: ${event.target.cityarea.value}`
  placeListItem.appendChild(listCityArea)

  const selection = document.createElement('p')
  selection.textContent = `Selection: ${event.target.selection.value}`
  placeListItem.appendChild(selection)

  const review = document.createElement('p')
  review.textContent = `Review: ${event.target.elements["review"].value}`
  placeListItem.appendChild(review)

  const faveThing = document.createElement('p')
  faveThing.textContent = `Fave thing: ${event.target.favething.value}`
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
