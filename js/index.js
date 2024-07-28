const numbers = [
  {
    number: 0,
    title: "Production Lines",
    value: 7,
    image: "images/Production-Lines.webp",
    altImage: "production-lines",
  },
  {
    number: 0,
    title: "Tones daily Production",
    value: 500,
    image: "images/Tones-daily-Production.webp",
    altImage: "tones-daily-production",
  },
  {
    number: 0,
    title: "Countries",
    value: 65,
    image: "images/Countries.webp",
    altImage: "countries",
  },
  {
    number: 0,
    title: "Tons Storage Space",
    value: 20000,
    image: "images/Tons-Storage-Space.webp",
    altImage: "tons-storage-space",
  },
  {
    number: 0,
    title: "Years of Experience",
    value: 50,
    image: "images/Years-of-Experience.webp",
    altImage: "years-of-experience",
  },
  {
    number: 0,
    title: "Satisfied Clients",
    value: 1000,
    image: "images/Satisfied-Clients.webp",
    altImage: "satisfied-clients",
  },
];

const numbersContainer = document.querySelector(".number");

const viewNumbers = () => {
  for (let i = 0; i < numbers.length; i++) {
    const numberCard = document.createElement("div");
    numberCard.classList.add("num-card");
    const imagesHolder = document.createElement("div");
    imagesHolder.classList.add("images-holder");
    numbersContainer.appendChild(numberCard);
    const numberImage = document.createElement("img");
    numberImage.classList.add("number-image");
    const number = document.createElement("span");
    number.classList.add("nums");
    const title = document.createElement("h3");
    title.classList.add("title");
    numberCard.appendChild(imagesHolder);
    imagesHolder.appendChild(numberImage);
    numberCard.appendChild(number);
    numberCard.appendChild(title);
    numberImage.src = numbers[i].image;
    numberImage.alt = numbers[i].altImage;
    number.innerHTML = numbers[i].number;
    number.setAttribute("data-goal", numbers[i].value);
    title.innerHTML = numbers[i].title;
  }
};
viewNumbers();

// select numbers section
const numberSection = document.getElementById("numbers-holder");
const allNumbers = document.querySelectorAll(".nums");

let started = false;

window.onscroll = () => {
  let pageHeight = window.innerHeight;

  //numbers offSet top
  let numberSectionOffsetTop = numberSection.offsetTop;

  // products offSet Top
  // let productsOffSetTop = productsHome.offsetTop;

  // window scroll top
  let windowScrollTop = this.pageYOffset;

  if (
    document.body.scrollTop > numberSectionOffsetTop - pageHeight ||
    document.documentElement.scrollTop > numberSectionOffsetTop - pageHeight
  ) {
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
      const incrementStep = Math.ceil((goal - currentNumber) / 6);
      if (currentNumber < goal) {
        currentNumber += incrementStep;
        if (currentNumber > goal) {
          currentNumber = goal;
        }
        e.innerText = `+ ${currentNumber}`;
      } else {
        clearInterval(startCount);
      }
    }, 50);
    incrementIntervals.push(startCount);
  });

  const products = [
    {
      image: "images/best seller images/white-kidney-beans.webp",
      title: "White kidney beans",
      altImg: "White-kidney-beans",
      size: "Bag:Weight upon request",
    },
    {
      image: "images/best seller images/whole-broad-beans.webp",
      title: "Whole broad beans",
      altImg: "whole-broad-beans",
      size: "Bag:Weight upon request",
    },
    {
      image: "images/best seller images/golden-sesame-seeds.webp",
      title: "Golden Sesame Seeds",
      altImg: "golden-sesame-seeds",
      size: "Bag:Weight upon request",
    },
    {
      image: "images/best seller images/split-red-lentils.webp",
      title: "Split red lentils",
      altImg: "split-red-lentils",
      size: "Bag:Weight upon request",
    },
    {
      image: "images/best seller images/cumin-seeds.webp",
      title: "Cumin seeds",
      altImg: "cumin-seeds",
      size: "Bag:Weight upon request",
    },
    {
      image: "images/best seller images/black-pepper.webp",
      title: "Black pepper",
      altImg: "black-pepper",
      size: "Bag:Weight upon request",
    },
    {
      image: "images/best seller images/carawy-seeds.webp",
      title: "Carawy seeds",
      altImg: "carawy-seeds",
      size: "Bag:Weight upon request",
    },
    {
      image: "images/best seller images/peanuts.webp",
      title: "Peanuts",
      altImg: "peanuts",
      size: "Bag:Weight upon request",
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
      const prodBag = document.createElement("i");
      prodBag.classList.add("fa-solid");
      prodBag.classList.add("fa-bag-shopping");
      const sizeHolder = document.createElement("div");
      sizeHolder.classList.add("size-holder");
      product.appendChild(prodImageHolder);
      prodImageHolder.appendChild(prodImage);
      product.appendChild(prodTitle);
      product.appendChild(sizeHolder);
      sizeHolder.appendChild(prodSize);
      prodImage.src = products[i].image;
      prodImage.alt = products[i].altImg;
      prodTitle.innerHTML = products[i].title;
      prodSize.innerHTML = products[i].size;
      prodSize.parentNode.insertBefore(prodBag, prodSize);
    }
  };
  viewProducts();

  // if (
  //   document.body.scrollTop > goalOffsetTop - pageHeight ||
  //   document.documentElement.scrollTop > goalOffsetTop - pageHeight
  // ) {
  //   // select cards
  //   let allCard = document.querySelectorAll(".goal #carts-holder .card");
  //   allCard.forEach((card) => {
  //     card.style.opacity = "100%";
  //     card.style.animation = "slideIn 2s";
  //   });
  // }

  // if (windowScrollTop > productsOffSetTop) {
  //   let allCard = document.querySelectorAll("#products-holder .product-card");
  //   allCard.forEach((card) => {
  //     card.style.opacity = "100%";
  //     card.style.animation = "slideUp 2s";
  //   });
  // }
}

// const goals = [
//   {
//     imageBlack: "images/Manufacturer-black.webp",
//     imageWhite: "images/Manufacturer-white.webp",
//     title: "Manufacturer",
//     description: "we are manufacturer ,our factory in egypt",
//     altImg: "factory",
//   },
//   {
//     imageBlack: "images/High-Quality-black.webp",
//     imageWhite: "images/High-Quality-white.webp",
//     title: "High Quality",
//     description: "our commitment to high quality is unwavering",
//     altImg: "Quality",
//   },
//   {
//     imageBlack: "images/Good-Price-black.webp",
//     imageWhite: "images/Good-Price-white.webp",
//     title: "Good Price",
//     description: "the most competitive price",
//     altImg: "dollar-sign",
//   },
//   {
//     imageBlack: "images/24-hours-black.webp",
//     imageWhite: "images/24-hours-white.webp",
//     title: "Support",
//     description: "24h support with professionals",
//     altImg: "24-hours",
//   },
// ];

// const cardsContainer = document.getElementById("carts-holder");

// const viewGoals = () => {
//   for (let i = 0; i < goals.length; i++) {
//     const card = document.createElement("div");
//     card.classList.add("card");
//     cardsContainer.appendChild(card);
//     const imageBlack = document.createElement("img");
//     imageBlack.classList.add("card-img-black");
//     const imageWhite = document.createElement("img");
//     imageWhite.classList.add("card-img-white");
//     const title = document.createElement("h3");
//     title.classList.add("card-title");
//     const dis = document.createElement("p");
//     dis.classList.add("card-dis");
//     card.appendChild(imageBlack);
//     card.appendChild(imageWhite);
//     card.appendChild(title);
//     card.appendChild(dis);
//     imageBlack.src = goals[i].imageBlack;
//     imageBlack.alt = goals[i].altImg;
//     imageWhite.src = goals[i].imageWhite;
//     imageWhite.alt = goals[i].altImg;
//     title.innerHTML = goals[i].title;
//     dis.innerHTML = goals[i].description;
//   }
// };
// viewGoals();

// let starIcon = "\u2605";

//

// const currentYear = new Date().getFullYear();
// const spanYear = document.getElementById("year");
// spanYear.innerHTML = currentYear;

// // select products section
// const productsHome = document.querySelector(".products-home");
// console.log(productsHome);

// // select goal section
// const goal = document.querySelector(".goal");
