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
const numbers = [
  {
    number: 0,
    title: "lines",
    value: 7,
    image: "images/Production-Lines.webp",
    altImage: "production-lines",
  },
  {
    number: 0,
    title: "capacity",
    value: 500,
    image: "images/Tones-daily-Production.webp",
    altImage: "tones-daily-production",
  },
  {
    number: 0,
    title: "countries",
    value: 65,
    image: "images/Countries.webp",
    altImage: "countries",
  },
  {
    number: 0,
    title: "storage",
    value: 20000,
    image: "images/Tons-Storage-Space.webp",
    altImage: "tons-storage-space",
  },
  {
    number: 0,
    title: "experience",
    value: 50,
    image: "images/Years-of-Experience.webp",
    altImage: "years-of-experience",
  },
  {
    number: 0,
    title: "clients",
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
    numbersContainer.appendChild(numberCard);
    const imagesHolder = document.createElement("div");
    imagesHolder.classList.add("images-holder");
    numberCard.appendChild(imagesHolder);
    const numberImage = document.createElement("img");
    numberImage.classList.add("number-image");
    numberImage.src = numbers[i].image;
    numberImage.alt = numbers[i].altImage;
    imagesHolder.appendChild(numberImage);
    const number = document.createElement("span");
    number.classList.add("nums");
    numberCard.appendChild(number);
    number.innerHTML = numbers[i].number;
    number.setAttribute("data-goal", numbers[i].value);
    const title = document.createElement("h3");
    title.classList.add("title");
    numberCard.appendChild(title);
    title.setAttribute("data-i18n", numbers[i].title);
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
}
const products = [
  {
    image: "images/best seller images/white-kidney-beans.webp",
    altImg: "home-White-kidney-beans",
    size: "home-size",
  },
  {
    image: "images/best seller images/whole-broad-beans.webp",
    altImg: "home-whole-broad-beans",
    size: "home-size",
  },
  {
    image: "images/best seller images/golden-sesame-seeds.webp",
    altImg: "home-golden-sesame-seeds",
    size: "home-size",
  },
  {
    image: "images/best seller images/split-red-lentils.webp",
    altImg: "home-split-red-lentils",
    size: "home-size",
  },
  {
    image: "images/best seller images/cumin-seeds.webp",
    altImg: "home-cumin-seeds",
    size: "home-size",
  },
  {
    image: "images/best seller images/black-pepper.webp",
    altImg: "home-black-pepper",
    size: "home-size",
  },
  {
    image: "images/best seller images/carawy-seeds.webp",
    altImg: "home-carawy-seeds",
    size: "home-size",
  },
  {
    image: "images/best seller images/peanuts.webp",
    altImg: "home-peanuts",
    size: "home-size",
  },
];

const productsHolder = document.querySelector("#products-holder");
const viewProducts = () => {
  for (let i = 0; i < products.length; i++) {
    const product = document.createElement("div");
    product.classList.add("product-card");
    productsHolder.appendChild(product);
    const prodImageHolder = document.createElement("div");
    prodImageHolder.classList.add("image-holder");
    product.appendChild(prodImageHolder);
    const prodImage = document.createElement("img");
    prodImage.classList.add("product-img");
    prodImage.src = products[i].image;
    prodImage.alt = products[i].altImg;
    prodImageHolder.appendChild(prodImage);
    const prodTitle = document.createElement("p");
    prodTitle.classList.add("product-title");
    product.appendChild(prodTitle);
    prodTitle.setAttribute("data-i18n", products[i].altImg);
    const sizeHolder = document.createElement("div");
    sizeHolder.classList.add("size-holder");
    product.appendChild(sizeHolder);
    const prodSize = document.createElement("p");
    prodSize.classList.add("product-size");
    sizeHolder.appendChild(prodSize);
    prodSize.setAttribute("data-i18n", products[i].size);
    const prodBag = document.createElement("i");
    prodBag.classList.add("fa-solid");
    prodBag.classList.add("fa-bag-shopping");
    prodSize.parentNode.insertBefore(prodBag, prodSize);
  }
};
viewProducts();
