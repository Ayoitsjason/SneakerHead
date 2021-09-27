import * as model from "./model.js";
import ShoesView from "./views/shoesView.js";
import ShoeView from "./views/shoeView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";

const rootElement = document.documentElement;
const date = new Date().getFullYear;
const arrowUp = document.querySelector(".arrow-up");
const btnFilter = document.querySelector(".btn-filter");
const year = document.getElementById("year");
const shoeCards = document.querySelector(".shoe-card__items");
const shoeSelectedContainer = document.querySelector(
  ".shoe-selected__container"
);
const overlay = document.querySelector(".overlay");
const btnExitShoeSelectedContainer = document.querySelector(
  ".shoe-selected__container-exit"
);
const spinner = document.querySelector(".spinner");

const renderSpinner = (parent) => {
  const markup = `
    <div class="loading"></div>
  `;

  parent.insertAdjacentHTML("afterbegin", markup);
};

const showShoes = async function () {
  renderSpinner(spinner);
  // 1) Loading shoe
  await model.loadShoes(100);
  spinner.innerHTML = "";
  // 2) Rendering Shoe
  model.state.shoes.map((shoe) => {
    ShoesView.render(shoe);
  });
};

const showShoe = async function (id) {
  renderSpinner(spinner);
  // 1) Loading Data
  await model.loadShoe(id);
  spinner.innerHTML = "";
  // 2) Rendering Data
  ShoeView.render(model.state.shoe);
};

const filterShoesByYear = async function (year, limit) {
  renderSpinner(spinner);
  // 1) Filer Shoes
  await model.filterShoesByYear(year, limit);
  spinner.innerHTML = "";

  // 2) Rendering Shoe
  model.state.shoes.map((shoe) => {
    ShoesView.render(shoe);
  });
};

const clear = function (element) {
  element.innerHTML = "";
};

// function getYPosition() {
//   var top = window.pageYOffset || document.documentElement.scrollTop;
//   return top;
// }

// window.addEventListener("scroll", function () {
//   console.log(getYPosition());
// });

const init = function () {
  showShoes(100);
  ShoeView.addHandler(showShoe);

  overlay.addEventListener("click", function () {
    shoeSelectedContainer.classList.add("hidden");
    overlay.classList.add("hidden");
  });

  btnFilter.addEventListener("click", function () {
    if (year.value < date && year.value > 1985) {
      clear(shoeCards);
      filterShoesByYear(year.value, 100);
    }
    year.value = "";
  });

  arrowUp.addEventListener("click", function () {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  btnExitShoeSelectedContainer.addEventListener("click", function () {
    shoeSelectedContainer.classList.add("hidden");
    overlay.classList.add("hidden");
  });
};

init();
