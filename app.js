let productsCountEl = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".add-btn");

addToCartBtns.forEach((item) =>
  item.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  })
);

/**
 * Modal Window
 */
let moreDetailsBtns = document.querySelectorAll(".more-details");

let modal = document.querySelector(".modal");

moreDetailsBtns.forEach((item) => item.addEventListener("click", openModal));

let btnClose = document.querySelector(".btn-close");
btnClose.addEventListener("click", closeModal);

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

// Homework - slider styling

$(".slider-block").slick({
  dots: true,
});

// Ноmework - liked button

let likedItem = document.querySelectorAll(".add-favorite");
console.log(likedItem);
likedItem.forEach((element) =>
  element.addEventListener("click", function () {
    if (element.classList.contains("add-liked")) {
      element.classList.remove("add-liked");
      element.classList.add("add-favorite");
    } else {
      element.classList.add("add-liked");
      element.classList.remove("add-favorite");
    }
  })
);

// Homework - show Modal window on scroll 50% of the page

function ViewModalOnScroll() {
  if (window.scrollY >= document.body.scrollHeight / 2) {
    openModal();
    window.removeEventListener("scroll", ViewModalOnScroll);
  }
}
window.addEventListener("scroll", ViewModalOnScroll);

let incrementBtns = document.querySelectorAll(".increment-btn");
let decrementBtns = document.querySelectorAll(".decrement-btn");
let inputFields = document.querySelectorAll(".product-quantity input");

// Сounter

function Counter(incrementBtn, decrementBtn, inputField) {
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,
  };

  this.toggleButtonState = function () {
    let count = this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= 1;
    this.domRefs.incrementBtn.disabled = count >= 10;
  };

  this.toggleButtonState();

  this.decrement = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
    this.toggleButtonState();
  };

  this.increment = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    this.toggleButtonState();
  };

  this.domRefs.incrementBtn.addEventListener(
    "click",
    this.increment.bind(this)
  );
  this.domRefs.decrementBtn.addEventListener(
    "click",
    this.decrement.bind(this)
  );
}

// Homework - counter for all positions

let quantity = document.querySelectorAll(".product-quantity");
for (let k = 0; k < quantity.length; k++) {
  new Counter(incrementBtns[k], decrementBtns[k], inputFields[k]);
}
