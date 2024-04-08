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
    number: 0,
    title: "production lines",
    value: 7,
  },
  {
    number: 0,
    title: "Tones daily production",
    value: 500,
  },
  {
    number: 0,
    title: "Thousand tons of storage space",
    value: 15,
  },
  {
    number: 0,
    title: "Happy customers",
    value: 1000,
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
    number.setAttribute("data-goal", numbers[i].value);
    title.innerHTML = numbers[i].title;
  }
};
viewNumbers();

let starIcon = "\u2605";

const products = [
  {
    image: "images/White kidney beans.webp",
    title: "White kidney beans",
    rate: "starIcon",
    size: "Bag/25k",
    altImg: "White-kidney-beans",
  },
  {
    image: "images/Whole broad beans.webp",
    title: "Whole broad beans",
    rate: "starIcon",
    size: "Bag/25k",
    altImg: "Whole-broad-beans",
  },
  {
    image: "images/lupins.webp",
    title: "lupins",
    rate: "starIcon",
    size: "Bag/25k",
    altImg: "lupins",
  },
  {
    image: "images/Split red lentils.webp",
    title: "Split red lentils",
    rate: "starIcon",
    size: "Bag/25k",
    altImg: "Split-red-lentils",
  },
  {
    image: "images/Cumin seeds.webp",
    title: "Cumin seeds",
    rate: "starIcon",
    size: "Bag/25k",
    altImg: "Cumin-seeds",
  },
  {
    image: "images/Carawy seeds.webp",
    title: "Carawy seeds",
    rate: "starIcon",
    size: "Bag/25k",
    altImg: "Carawy-seeds",
  },
  {
    image: "images/Black pepper.webp",
    title: "Black pepper",
    rate: "starIcon",
    size: "Bag/25k",
    altImg: "Black-pepper",
  },
  {
    image: "images//Peanuts.webp",
    title: "Peanuts",
    rate: "starIcon",
    size: "Bag/25k",
    altImg: "Peanuts",
  },
];

const productsHolder = document.getElementById("products-holder");

const viewProducts = () => {
  for (let i = 0; i < products.length; i++) {
    const product = document.createElement("div");
    product.classList.add("product-card");
    productsHolder.appendChild(product);
    const prodImageHolder = document.createElement("div");
    prodImageHolder.classList.add("image-holder");
    const prodImage = document.createElement("img");
    prodImage.classList.add("product-img");
    const prodTitle = document.createElement("p");
    prodTitle.classList.add("product-title");
    const prodSize = document.createElement("p");
    prodSize.classList.add("product-size");
    product.appendChild(prodImageHolder);
    prodImageHolder.appendChild(prodImage);
    product.appendChild(prodTitle);
    prodImage.src = products[i].image;
    prodImage.alt = products[i].altImg;
    prodTitle.innerHTML = products[i].title;
    for (let j = 0; j < 5; j++) {
      const prodRate = document.createElement("i");
      prodRate.classList.add("fa-solid");
      prodRate.classList.add("fa-star");
      product.appendChild(prodRate);
      product.appendChild(prodSize);
    }
    prodSize.innerHTML = products[i].size;
  }
};
viewProducts();

const currentYear = new Date().getFullYear();
const spanYear = document.getElementById("year");
spanYear.innerHTML = currentYear;

// select products section
const productsHome = document.querySelector(".products-home");
console.log(productsHome);

// select numbers section
const numberSection = document.querySelector(".numbers");
const allNumbers = document.querySelectorAll(".nums");

// select goal section
const goal = document.querySelector(".goal");

let started = false;
window.onscroll = () => {
  let pageHeight = window.innerHeight;

  //goal offSet top
  let goalOffsetTop = goal.offsetTop;

  //numbers offSet top
  let numberSectionOffsetTop = numberSection.offsetTop;

  // products offSet Top
  let productsOffSetTop = productsHome.offsetTop;

  // window scroll top
  let windowScrollTop = this.pageYOffset;

  if (
    document.body.scrollTop > goalOffsetTop - pageHeight ||
    document.documentElement.scrollTop > goalOffsetTop - pageHeight
  ) {
    //   select cards
    let allCard = document.querySelectorAll(".goal #carts-holder .card");
    allCard.forEach((card) => {
      card.style.opacity = "100%";
      card.style.animation = "slideIn 2s";
    });
  }

  if (windowScrollTop > productsOffSetTop) {
    let allCard = document.querySelectorAll("#products-holder .product-card");
    allCard.forEach((card) => {
      card.style.opacity = "100%";
      card.style.animation = "slideUp 2s";
    });
  }

  if (windowScrollTop > numberSectionOffsetTop) {
    if (!started) {
      incrementNumber(allNumbers);
      started = true;
    }
  }
};
function incrementNumber(el) {
  const incrementIntervals = [];
  el.forEach((e) => {
    let currentNumber = 0;
    const goal = parseInt(e.getAttribute("data-goal"));
    const startCount = setInterval(() => {
      const incrementStep = Math.ceil((goal - currentNumber) / 10);
      if (currentNumber < goal) {
        currentNumber += incrementStep;
        if (currentNumber > goal) {
          currentNumber = goal;
        }
        e.innerText = `${currentNumber}+`;
      } else {
        clearInterval(startCount);
      }
    }, 50);
    incrementIntervals.push(startCount);
  });
}
