links = document.getElementById("links");
burgerIcon = document.getElementById("burger-icon");
xIcon = document.getElementById("close");

burgerIcon.addEventListener("click", () => {
  links.classList.add("open");
  links.classList.remove("close");
});
// xIcon = document.getElementById("close");
xIcon.addEventListener("click", () => {
  links.classList.remove("open");
  links.classList.add("close");
});
links.onclick = (e) => {
  e.stopPropagation();
};

//click anywhere out side of menu and burger icon to close a sidebar menu
document.addEventListener("click", (e) => {
  if (e.target !== burgerIcon && e.target !== links && e.target !== xIcon) {
    if (links.classList.contains("open")) {
      links.classList.remove("open");

      links.classList.add("close");
    }
  }
});

const form = document.getElementById("conact-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const nameErorr = document.querySelector(".name-error");
const mailErorr = document.querySelector(".emil-error");
const numberErorr = document.querySelector(".number-error");

// Function to validate name format
function isValidName(name) {
  let nameRegx = /^[a-zA-Z ]{2,30}$/;
  return nameRegx.test(name);
}
// Function to validate email format
function isValidEmail(email) {
  let emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegx.test(email);
}
// Function to validate number format
function isValidNumber(number) {
  let numberRegx = /^\d+$/;
  return numberRegx.test(number);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // select name input value
  let nameInput = document.getElementById("name").value;
  // select email input value
  let emailInput = document.getElementById("email").value;
  // select number input value
  let numberInput = document.getElementById("number").value;

  // reset error massage
  nameErorr.textContent = "";
  mailErorr.textContent = "";
  numberErorr.textContent = "";

  // Validate name
  if (!nameInput) {
    nameErorr.textContent = "Name is required";
    event.preventDefault();
  } else if (!isValidName(nameInput)) {
    nameErorr.textContent = "Invalid Name format";
    event.preventDefault();
  }

  // Validate email
  if (!emailInput) {
    mailErorr.textContent = "Email is required";
    event.preventDefault();
  } else if (!isValidEmail(emailInput)) {
    mailErorr.textContent = "Invalid Email format";
    event.preventDefault();
  }

  // Validate number
  if (!numberInput) {
    numberErorr.textContent = "Number is required";
    event.preventDefault();
  } else if (!isValidNumber(numberInput)) {
    numberErorr.textContent = "Invalid Number format";
    event.preventDefault();
  }
});
