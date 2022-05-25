let items = document.querySelectorAll(".dot");
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", dotSelected);
  items[i].classList.add(`dot${i}`);
}

items = document.querySelectorAll(".customer-item");
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", itemSelected);
  items[i].classList.add(`customer-item${i}`);
}

function dotSelected() {
  // dot
  document
    .getElementsByClassName("slider-bar")[0]
    .classList.remove("slider-bar");
  this.classList.add("slider-bar");

  // get index
  for (let i = 0; i < this.classList.length; i++) {
    if (this.classList[i].length > 3 && this.classList[i].includes("dot")) {
      j = +this.classList[i][this.classList[i].length - 1];
    }
  }

  // item
  document
    .querySelectorAll(".customer-list > .is-active")[0]
    .classList.remove("is-active");
  document
    .getElementsByClassName(`customer-item${j}`)[0]
    .classList.add("is-active");
}

function itemSelected() {
  document
    .querySelectorAll(".customer-list > .is-active")[0]
    .classList.remove("is-active");
  this.classList.add("is-active");

  // get index
  for (let i = 0; i < this.classList.length; i++) {
    if (
      this.classList[i].length > 3 &&
      this.classList[i].includes("customer-item")
    ) {
      j = +this.classList[i][this.classList[i].length - 1];
    }
  }

  // dot
  document
    .getElementsByClassName("slider-bar")[0]
    .classList.remove("slider-bar");
  document.getElementsByClassName(`dot${j}`)[0].classList.add("slider-bar");
}

// add click event(Prev) for button Prev
document
  .getElementsByClassName("arrow-prev")[0]
  .addEventListener("click", Prev);

function Prev() {
  // get current selected item
  let itemActive = document.getElementsByClassName("slider-bar");
  for (let i = 0; i < itemActive[0].classList.length; i++) {
    if (
      itemActive[0].classList[i].length > 3 &&
      itemActive[0].classList[i].includes("dot")
    ) {
      j = +itemActive[0].classList[i][itemActive[0].classList[i].length - 1];
    }
  }

  if (j > 0) {
    // dot
    itemActive[0].classList.remove("slider-bar");
    document
      .getElementsByClassName(`dot${j - 1}`)[0]
      .classList.add("slider-bar");

    // item
    document
      .querySelectorAll(".customer-list > .is-active")[0]
      .classList.remove("is-active");
    document
      .getElementsByClassName(`customer-item${j - 1}`)[0]
      .classList.add("is-active");
  }
}

// add click event(Next) for button Next
document
  .getElementsByClassName("arrow-next")[0]
  .addEventListener("click", Next);

function Next() {
  // get current selected item
  let itemActive = document.getElementsByClassName("slider-bar");
  for (let i = 0; i < itemActive[0].classList.length; i++) {
    if (
      itemActive[0].classList[i].length > 3 &&
      itemActive[0].classList[i].includes("dot")
    ) {
      j = +itemActive[0].classList[i][itemActive[0].classList[i].length - 1];
    }
  }
  if (j < 3) {
    // dot
    itemActive[0].classList.remove("slider-bar");
    document
      .getElementsByClassName(`dot${j + 1}`)[0]
      .classList.add("slider-bar");

    // item
    document
      .querySelectorAll(".customer-list > .is-active")[0]
      .classList.remove("is-active");
    document
      .getElementsByClassName(`customer-item${j + 1}`)[0]
      .classList.add("is-active");
  }
}
