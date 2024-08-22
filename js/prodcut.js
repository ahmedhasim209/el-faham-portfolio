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
const mainProducts = [
  {
    image: "../images/products-images/white-kidney-beans.webp",
    size: "size",
    altImg: "white-kidney-beans",
    category: "pulses",
  },
  {
    image: "../images/products-images/whole-broad-beans.webp",
    size: "size",
    altImg: "whole-broad-beans",
    category: "pulses",
  },
  {
    image: "../images/products-images/split-broad-beans.webp",
    size: "size",
    altImg: "split-broad-beans",
    category: "pulses",
  },
  {
    image: "../images/products-images/whole-faba-beans.webp",
    size: "size",
    altImg: "whole-faba-beans",
    category: "pulses",
  },
  {
    image: "../images/products-images/peanuts.webp",
    size: "size",
    altImg: "peanuts",
    category: "pulses",
  },
  {
    image: "../images/products-images/sesame-seeds.webp",
    size: "size",
    altImg: "sesame-seeds",
    category: "pulses",
  },
  {
    image: "../images/products-images/golden-sesame-seeds.webp",
    size: "size",
    altImg: "golden-sesame-seeds",
    category: "pulses",
  },
  {
    image: "../images/products-images/split-red-lentils.webp",
    size: "size",
    altImg: "split-red-lentils",
    category: "pulses",
  },
  {
    image: "../images/products-images/Whole-green-lentils.webp",
    size: "size",
    altImg: "whole-green-lentils",
    category: "pulses",
  },
  {
    image: "../images/products-images/whole-red-lentils.webp",
    size: "size",
    altImg: "whole-red-lentils",
    category: "pulses",
  },
  {
    image: "../images/products-images/whole-green-peas.webp",
    size: "size",
    altImg: "whole-green-peans",
    category: "pulses",
  },
  {
    image: "../images/products-images/split-green-peas.webp",
    size: "size",
    altImg: "split-green-peas",
    category: "pulses",
  },
  {
    image: "../images/products-images/whole-yellow-peas.webp",
    size: "size",
    altImg: "whole-yellow-peas",
    category: "pulses",
  },
  {
    image: "../images/products-images/split-yellow-peas.webp",
    size: "size",
    altImg: "split-yellow-peas",
    category: "pulses",
  },
  {
    image: "../images/products-images/chickpeas.webp",
    size: "size",
    altImg: "chickpeas",
    category: "pulses",
  },
  {
    image: "../images/products-images/lupins.webp",
    size: "size",
    altImg: "lupins",
    category: "pulses",
  },
  {
    image: "../images/products-images/black-eye-beans.webp",
    size: "size",
    altImg: "black-eye-beans",
    category: "pulses",
  },
  {
    image: "../images/products-images/red-kidney-beans.webp",
    size: "size",
    altImg: "red-kidney-beans",
    category: "pulses",
  },
  {
    image: "../images/products-images/basmati-rice.webp",
    size: "size",
    altImg: "basmati-rice",
    category: "pulses",
  },
  {
    image: "../images/products-images/popcorn.webp",
    size: "size",
    altImg: "popcorn",
    category: "pulses",
  },
  {
    image: "../images/products-images/white-millet.webp",
    size: "size",
    altImg: "white-millet",
    category: "pulses",
  },
  {
    image: "../images/products-images/yellow-millet.webp",
    size: "size",
    altImg: "yellow-millet",
    category: "pulses",
  },
  {
    image: "../images/products-images/sorghum.webp",
    size: "size",
    altImg: "sorghum",
    category: "pulses",
  },
  {
    image: "../images/products-images/dry-lemon-machine-dried.webp",
    size: "size",
    altImg: "dry-lemon-machine-dried",
    category: "herbs",
  },
  {
    image: "../images/products-images/dry-lemon.webp",
    size: "size",
    altImg: "dry-lemon",
    category: "herbs",
  },
  {
    image: "../images/products-images/cumin-seeds.webp",
    size: "size",
    altImg: "cumin-seeds",
    category: "herbs",
  },
  {
    image: "../images/products-images/black-pepper.webp",
    size: "size",
    altImg: "black-pepper",
    category: "herbs",
  },
  {
    image: "../images/products-images/carawy-seeds.webp",
    size: "size",
    altImg: "carawy-seeds",
    category: "herbs",
  },
  {
    image: "../images/products-images/barley-seeds.webp",
    size: "size",
    altImg: "barley-seeds",
    category: "pulses",
  },
  {
    image: "../images/products-images/hibiscus.webp",
    size: "size",
    altImg: "hibiscus",
    category: "herbs",
  },
  {
    image: "../images/products-images/coriander.webp",
    size: "size",
    altImg: "coriander",
    category: "herbs",
  },
  {
    image: "../images/products-images/fennel-seeds.webp",
    size: "size",
    altImg: "fennel-seeds",
    category: "herbs",
  },
  {
    image: "../images/products-images/anise-seeds.webp",
    size: "size",
    altImg: "anise-seeds",
    category: "herbs",
  },
  {
    image: "../images/products-images/black-seeds .webp",
    size: "size",
    altImg: "black-seeds",
    category: "herbs",
  },
  {
    image: "../images/products-images/dry-ginger.webp",
    size: "size",
    altImg: "dry-ginger",
    category: "herbs",
  },
  {
    image: "../images/products-images/bay-laurel.webp",
    size: "size",
    altImg: "bay-laurel",
    category: "herbs",
  },
  {
    image: "../images/products-images/dried-garlic.webp",
    size: "size",
    altImg: "dried-garlic",
    category: "herbs",
  },
  {
    image: "../images/products-images/frankincense.webp",
    size: "size",
    altImg: "frankincense",
    category: "herbs",
  },
  {
    image: "../images/products-images/cigar-cinnamon.webp",
    size: "size",
    altImg: "cigar-cinnamon",
    category: "herbs",
  },
  {
    image: "../images/products-images/mustard-seeds.webp",
    size: "size",
    altImg: "mustard-seeds",
    category: "herbs",
  },
  {
    image: "../images/products-images/oats.webp",
    size: "size",
    altImg: "oats",
    category: "herbs",
  },
  {
    image: "../images/products-images/cardamom.webp",
    size: "size",
    altImg: "cardamom",
    category: "herbs",
  },
  {
    image: "../images/products-images/flax-seeds.webp",
    size: "size",
    altImg: "flax-seeds",
    category: "herbs",
  },
  {
    image: "../images/products-images/fenugreek.webp",
    size: "size",
    altImg: "fenugreek",
    category: "herbs",
  },
  {
    image: "../images/products-images/sunflower-seeds.webp",
    size: "size",
    altImg: "sunflower-seeds",
    category: "nuts",
  },
  {
    image: "../images/products-images/pumpkin-seeds.webp",
    size: "size",
    altImg: "pumpkin-Seeds",
    category: "nuts",
  },
  {
    image: "../images/products-images/blanched-peanuts.webp",
    size: "size",
    altImg: "blanched-peanuts",
    category: "nuts",
  },
  {
    image: "../images/products-images/split-blanched-peanuts.webp",
    size: "size",
    altImg: "split-blanched-peanuts",
    category: "nuts",
  },
  {
    image: "../images/products-images/hazelnut-kernels.webp",
    size: "size",
    altImg: "hazelnut-kernels",
    category: "nuts",
  },
  {
    image: "../images/products-images/blanched-hazelnut.webp",
    size: "size",
    altImg: "blanched-hazelnut",
    category: "nuts",
  },
  {
    image: "../images/products-images/almond-kernels.webp",
    size: "size",
    altImg: "almond-kernels",
    category: "nuts",
  },
  {
    image: "../images/products-images/pistachio-kernels.webp",
    size: "size",
    altImg: "pistachio-kernels",
    category: "nuts",
  },
  {
    image: "../images/products-images/pistachio-green-skin.webp",
    size: "size",
    altImg: "pistachio-green-skin",
    category: "nuts",
  },
  {
    image: "../images/products-images/cashew-kernels.webp",
    size: "size",
    altImg: "cashew-kernels",
    category: "nuts",
  },
  {
    image: "../images/products-images/raw-walnut.webp",
    size: "size",
    altImg: "raw-walnut",
    category: "nuts",
  },
  {
    image: "../images/products-images/walnut-kernels.webp",
    size: "size",
    altImg: "walnut-kernels",
    category: "nuts",
  },
];

const productHolder = document.getElementById("product-holder");

function viewProducts() {
  mainProducts.forEach((el) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productHolder.appendChild(productCard);
    productCard.setAttribute("data-category", el.category);
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
    productCard.appendChild(prodImageHolder);
    prodImageHolder.appendChild(prodImage);
    productCard.appendChild(prodTitle);
    productCard.appendChild(sizeHolder);
    sizeHolder.appendChild(prodSize);
    prodImage.src = el.image;
    prodImage.alt = el.altImg;
    prodTitle.setAttribute("data-i18n", el.altImg);
    prodSize.setAttribute("data-i18n", el.size);
    prodSize.parentNode.insertBefore(prodBag, prodSize);
  });
}
viewProducts();

function filterProductsByCategory(category) {
  const products = document.querySelectorAll("#product-holder .product-card");

  products.forEach((product) => {
    // Get the category of the current product
    const productCategory = product.getAttribute("data-category");

    // Show or hide the product based on the selected category
    if (category === "all" || productCategory === category) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

document
  .querySelector(".categories-box")
  .addEventListener("change", function (event) {
    const selectedCategory = event.target.value;
    filterProductsByCategory(selectedCategory);
  });

function changeBackground(clickedElement) {
  const currentActive = document.querySelector(".active");
  if (currentActive) {
    currentActive.classList.remove("active");
  }
  clickedElement.classList.add("active");
}
