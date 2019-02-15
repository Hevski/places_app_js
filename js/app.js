document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-place-form');
  form.addEventListener('submit', handleFormSubmit);

  const button = document.querySelector('#delete-all');
  button.addEventListener('click', handleDeleteClick);
})

const handleFormSubmit = function(event){
  event.preventDefault()

  const placesList = document.querySelector('#places-list')

  const placeListItem = document.createElement('li')

  const listCountry = document.createElement('p')
  listCountry.textContent = `Country: ${event.target.country.value}`
  placeListItem.appendChild(listCountry)

  const listCityArea = document.createElement('p')
  listCityArea.textContent = `City/Area: ${event.target.cityarea.value}`
  placeListItem.appendChild(listCityArea)

  const selection = document.createElement('p')
  selection.textContent = `Selection: ${this.selection.value}`
  placeListItem.appendChild(selection)

  const faveThing = document.createElement('p')
  faveThing.textContent = `Fave thing: ${this.favething.value}`
  placeListItem.appendChild(faveThing)

  placesList.appendChild(placeListItem)


this.reset()
}

const handleDeleteClick = function (event) {
  const readingList = document.querySelector('#places-list');
  readingList.innerHTML = '';
}
