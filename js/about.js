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
