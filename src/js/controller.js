import * as model from "./model.js";
import ShoesView from "./views/shoesView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";

const arrowUp = document.querySelector(".arrow-up");
const rootElement = document.documentElement;

arrowUp.addEventListener("click", function () {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const showShoes = async function () {
  // 1) Loading shoe
  await model.loadShoes(100);

  // 2) Rendering Shoe
  model.state.shoes.map((shoe) => {
    ShoesView.render(shoe);
  });
};

showShoes();
