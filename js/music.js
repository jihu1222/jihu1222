// cat 1

const image1 = document.getElementById('musiCat1');
image1.addEventListener('click', meow1);
var sound1 = new Audio("./sounds/cNote.wav");
// audio is from here: https://freesound.org/people/Carlos_Vaquero/sounds/154111/

function meow1 () {
  image1.src = "./img/cadt-angy.PNG";
  sound1.play();
  const wait = setTimeout(returnImg1, 200);
}

function returnImg1 () {
  image1.src = "./img/cadt.PNG";
}

// cat 2

const image2 = document.getElementById('musiCat2');
image2.addEventListener('click', meow2);
var sound2 = new Audio("./sounds/dNote.wav");
// audio is from here: https://freesound.org/people/Carlos_Vaquero/sounds/154113/

function meow2 () {
  image2.src = "./img/cadt-angy.PNG";
  sound2.play();
  const wait = setTimeout(returnImg2, 200);
}

function returnImg2 () {
  image2.src = "./img/cadt.PNG";
}

// cat 3

const image3 = document.getElementById('musiCat3');
image3.addEventListener('click', meow3);
var sound3 = new Audio("./sounds/fNote.mp3");
// audio is from here: https://freesound.org/people/Carlos_Vaquero/sounds/154116/

function meow3 () {
  image3.src = "./img/cadt-angy.PNG";
  sound3.play();
  const wait = setTimeout(returnImg3, 200);
}

function returnImg3 () {
  image3.src = "./img/cadt.PNG";
}
