const goals = [
  {
    imageBlack: "images/Manufacturer-black.webp",
    imageWhite: "images/Manufacturer-white.webp",
    title: "Manufacturer",
    description: "we are manufacturer ,our factory in egypt",
    altImg: "factory",
  },
  {
    imageBlack: "images/High-Quality-black.webp",
    imageWhite: "images/High-Quality-white.webp",
    title: "High Quality",
    description: "our commitment to high quality is unwavering",
    altImg: "Quality",
  },
  {
    imageBlack: "images/Good-Price-black.webp",
    imageWhite: "images/Good-Price-white.webp",
    title: "Good Price",
    description: "the most competitive price",
    altImg: "dollar-sign",
  },
  {
    imageBlack: "images/24-hours-black.webp",
    imageWhite: "images/24-hours-white.webp",
    title: "Support",
    description: "24h support with professionals",
    altImg: "24-hours",
  },
];

const cardsContainer = document.getElementById("carts-holder");

const viewGoals = () => {
  for (let i = 0; i < goals.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    cardsContainer.appendChild(card);
    const imageBlack = document.createElement("img");
    imageBlack.classList.add("card-img-black");
    const imageWhite = document.createElement("img");
    imageWhite.classList.add("card-img-white");
    const title = document.createElement("h3");
    title.classList.add("card-title");
    const dis = document.createElement("p");
    dis.classList.add("card-dis");
    card.appendChild(imageBlack);
    card.appendChild(imageWhite);
    card.appendChild(title);
    card.appendChild(dis);
    imageBlack.src = goals[i].imageBlack;
    imageBlack.alt = goals[i].altImg;
    imageWhite.src = goals[i].imageWhite;
    imageWhite.alt = goals[i].altImg;
    title.innerHTML = goals[i].title;
    dis.innerHTML = goals[i].description;
  }
};
viewGoals();

const numbers = [
  {
    number: "9000+",
    title: "Tonne Annual Export",
  },
  {
    number: "55000+",
    title: "Tonne Annual Import",
  },
  {
    number: "1000+",
    title: "Daily Production Rate",
  },
  {
    number: "15+",
    title: "Production Lines",
  },
];

const numbersContainer = document.querySelector(".numbers-holder");

const viewNumbers = () => {
  for (let i = 0; i < numbers.length; i++) {
    const numberCard = document.createElement("div");
    numberCard.classList.add("num-card");
    numbersContainer.appendChild(numberCard);
    const number = document.createElement("span");
    number.classList.add("nums");
    const title = document.createElement("h3");
    title.classList.add("title");
    numberCard.appendChild(number);
    numberCard.appendChild(title);
    number.innerHTML = numbers[i].number;
    title.innerHTML = numbers[i].title;
  }
};
viewNumbers();

// select goal section
const goal = document.querySelector(".goal");

window.onscroll = () => {
  //goal offSet top
  let goalOffsetTop = goal.offsetTop; // distance from goal to page = 1885

  // window scroll top
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > goalOffsetTop) {
    //   select cards
    let allCard = document.querySelectorAll(".goal #carts-holder .card");

    allCard.forEach((card) => {
      card.style.opacity = "100%";
      card.style.animation = "slideIn 2s";
    });
  }
};
