const enterNameButton = document.querySelector('button');
const welcomeText = document.querySelector('h2');

function setAdminName() {
  let myName = prompt('Name: ');
  if (!myName) {
    setAdminName()
  } else {
    localStorage.setItem('name', myName);
    welcomeText.textContent = "Hello, " + myName + "!";
  }
}

enterNameButton.onclick = function() {
  setAdminName()
}

const img = document.querySelector('img');
const arrow = document.querySelector('#arrow');

function changeImage() {
  const srcName = img.getAttribute('src');

  if (srcName === 'images/old-school-cassettes.jpg') {
    img.setAttribute('src', 'images/old-school-vinyl.jpg');
  } else {
    img.setAttribute('src', 'images/old-school-cassettes.jpg');
  }
}

arrow.onclick = function() {
  changeImage();
}