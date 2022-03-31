const button = document.getElementById('a11');

button.addEventListener('click', updateName);

const image = document.getElementById('coolImage');

image.addEventListener('mouseover', updateImg);

function updateName () {
  const name = prompt('Enter a new name');
  button.textContent = `${name}!`
}

function updateImg () {
  image.src = "../img/cadt-angy.PNG"
}
