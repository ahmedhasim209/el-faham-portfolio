links = document.getElementById("links");
burgerIcon = document.getElementById("burger-icon");
xIcon = document.getElementById("close");

burgerIcon.addEventListener("click", () => {
  links.classList.add("open");
  links.classList.remove("close");
});
xIcon = document.getElementById("close");
xIcon.addEventListener("click", () => {
  links.classList.remove("open");
  links.classList.add("close");
});
