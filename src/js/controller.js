import * as model from "./model.js";
import ShoesView from "./views/shoesView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";

const arrowUp = document.querySelector(".arrow-up");
const btnFilter = document.querySelector(".btn-filter");
const year = document.getElementById("year");
const rootElement = document.documentElement;

const showShoes = async function () {
  // 1) Loading shoe
  await model.loadShoes(100);

  // 2) Rendering Shoe
  model.state.shoes.map((shoe) => {
    ShoesView.render(shoe);
  });
};

const filterShoesByYear = async function (year, limit) {
  // 1) Filer Shoes
  await model.filterShoesByYear(year, limit);

  // 2) Rendering Shoe
  model.state.shoes.map((shoe) => {
    ShoesView.render(shoe);
  });
};

const init = function () {
  arrowUp.addEventListener("click", function () {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  btnFilter.addEventListener("click", function () {
    filterShoesByYear(year.value, 100);
    year.value = "";
  });

  showShoes();
};

init();
