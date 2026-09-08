function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Regex
const regexname = /^[a-zA-Z ,'.-]{2,}$/;
const regexEmail = /^[0-9a-zA-Z-._]{1,64}@[a-zA-Z0-9]{1,64}.[a-z]{1,64}$/;
const regexFormatDate = /^[0-9]{4}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/;
const regexNumber = /^[0-9]{1,2}$/;

// DOM Elements
const modal = document.getElementById("modal");
const modalBtn = document.getElementById("modalBtn");
const modalBtnMobile = document.getElementById("modalBtnMobile");
const modalClose = document.getElementById("closeModal");
const thanks = document.getElementById("thanks");
const thanksClose1 = document.getElementById("thanksClose1");
const thanksClose2 = document.getElementById("thanksClose2");
const submit = document.getElementById("submit");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const firstError = document.getElementById("firstError");
const lastError = document.getElementById("lastError");
const emailError = document.getElementById("emailError");
const birthdateError = document.getElementById("birthdateError");
const quantityError = document.getElementById("quantityError");
const locationError = document.getElementById("locationError");
const checkbox1Error = document.getElementById("checkbox1Error");

// launch modal event
modalBtn.addEventListener("click", launchModal);
modalBtnMobile.addEventListener("click", launchModal);

// launch modal function
function launchModal() {
  modal.style.display = "block";
}

// close modal event
modalClose.addEventListener("click", closeModal);

// close modal function
function closeModal() {
  modal.style.display = "none";
}

// launch thanks function
function launchThanks() {
  thanks.style.display = "block";
}

// close thanks events
thanksClose1.addEventListener("click", closeThanks);
thanksClose2.addEventListener("click", closeThanks);

// close thanks function
function closeThanks() {
  thanks.style.display = "none";
}

// submit event
submit.addEventListener("click", validate);

//submit function
function validate(){
  let close = true;
  if (!(regexname.test(first.value.trim()))) {
    firstError.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    first.style.border = "#e54858 solid 2px";
    close = false;
  }
  if (!(regexname.test(last.value.trim()))) {
    lastError.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    last.style.border = "#e54858 solid 2px";
    close = false;
  }
  if (!(regexEmail.test(email.value))) {
    emailError.innerText = "Vous devez entrer un email valide.";
    email.style.border = "#e54858 solid 2px";
    close = false;
  }  
  if (!(regexFormatDate.test(birthdate.value))) { 
    birthdateError.innerText = "Vous devez entrer votre date de naissance.";
    birthdate.style.border = "#e54858 solid 2px";
    close = false;
  }
  if (!(regexNumber.test(quantity.value))) {
    quantityError.innerText = "Veuillez entrer un nombre entre 0 et 99.";
    quantity.style.border = "#e54858 solid 2px";
    close = false;
  }
  if (!(location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked)) {
    locationError.innerText = "Vous devez choisir une option.";
    close = false;
  }
  if (!(checkbox1.checked)) {
    checkbox1Error.innerText = "Vous devez vérifier que vous acceptez les termes et conditions.";
    close = false;
  }
  if (close) {
    first.value = "";
    last.value = "";
    email.value = "";
    birthdate.value = "";
    quantity.value = "";
    location1.checked = false;
    location2.checked = false;
    location3.checked = false;
    location4.checked = false;
    location5.checked = false;
    location6.checked = false;
    checkbox2.checked = false;
    closeModal();
    launchThanks();
  }
}

//reset events
first.addEventListener("input", firstReset);
last.addEventListener("input", lastReset);
email.addEventListener("input", emailReset);
birthdate.addEventListener("input", birthdateReset);
quantity.addEventListener("input", quantityReset);
location1.addEventListener("input", locationReset);
location2.addEventListener("input", locationReset);
location3.addEventListener("input", locationReset);
location4.addEventListener("input", locationReset);
location5.addEventListener("input", locationReset);
location6.addEventListener("input", locationReset);
checkbox1.addEventListener("input", checkbox1Reset);

//reset first
function firstReset() {
  firstError.innerText = "";
  first.style.border = "none";
}

//reset last
function lastReset() {
  lastError.innerText = "";
  last.style.border = "none";
}

//reset email
function emailReset() {
  emailError.innerText = "";
  email.style.border = "none";
}

//reset birthdate
function birthdateReset() {
  birthdateError.innerText = "";
  birthdate.style.border = "none";
}

//reset quantity
function quantityReset() {
  quantityError.innerText = "";
  quantity.style.border = "none";
}

//reset location
function locationReset() {
  locationError.innerText = "";
}

//reset checkbox1
function checkbox1Reset() {
  checkbox1Error.innerText = "";
}