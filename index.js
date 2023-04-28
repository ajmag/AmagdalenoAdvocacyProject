
//changing website theme
const themeButton = document.getElementById("theme-button");
//adding signatures to website
const signNowButton = document.getElementById("sign-now-button");


const toggleDarkMode = () => {
  // Write your code to manipulate the DOM here=
  document.body.classList.toggle("dark-mode");
}


let counter = 4; //for counting the amount of signatures

const addSignature = (person) => {

  var signed = document.querySelector(".signatures");
  let remove = document.getElementById("initial_count");

  signed.removeChild(signed.lastChild);

  // Write your code to manipulate the DOM here
  // let nameInput = document.getElementById('name').value;
  // let hometownInput = document.getElementById('hometown').value;


  let divElement = document.createElement('p');
  divElement.innerHTML = ("🖊️ " + person.name + " from " + person.hometown + " supports this.");

  let count = document.createElement('p');
  count.innerHTML = ('🖊️ ' + counter + " people have signed this petition and support this cause.");


  signed.appendChild(divElement);
  // signed.appendChild(count);

  // counter = counter + 1;
  // remove.remove();
}
const validateForm = () => {

  let containsErrors = false;
  var petitionInputs = document.getElementById("sign-petition").elements;

  let person = {
    name: petitionInputs[0].value,
    hometown: petitionInputs[1].value
  }

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      containsErrors = true;
      petitionInputs[i].classList.add('error');
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }
  if (containsErrors == false) {
    addSignature(person);
    toggleModal(person);

    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }
}

signNowButton.addEventListener('click', validateForm);
themeButton.addEventListener("click", toggleDarkMode);

let animation = {
  revealDistance: 50,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '1',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}

var revealableContainers = document.querySelectorAll('.revealable');

const reveal = () => {

  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;

    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');
    } else {
      revealableContainers[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);


const toggleModal = (person) => {
  let modal = document.getElementById("thanks-modal");
  let modalContent = document.getElementById("thanks-modal-content");
  
  modal.style.display = 'flex';

  modalContent.textContent = 'Thank you so much ' + person.name + ', Ruben sends his regards to you and your family back in ' + person.hometown;

  let intervalId = setInterval(scaleImage, 500);
  
  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 5000);
}//end of toggleModal

let scaleFactor = 1; 
const modalImage = document.querySelector('.modal-content img');

let scaleImage = () => {

  if (scaleFactor === 1) {
  scaleFactor = 0.8;
} else {
  scaleFactor = 1;
}
modalImage.style.transform = `scale(${scaleFactor})`
}



