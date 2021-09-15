const shoeSelectedContainer = document.querySelector(
  ".shoe-selected__container"
);
const overlay = document.querySelector(".overlay");

class ShoeView {
  _parent = document.querySelector(".shoe-selected__container-card");
  _data;

  render(data) {
    this._data = data;
    this._clear(this._parent);
    const markup = this._generateMarkup();
    this._parent.insertAdjacentHTML("beforeend", markup);
  }

  _clear(element) {
    element.innerHTML = "";
  }

  _generateMarkup() {
    return `
        <div class="shoe-selected__title">
          <h4>${this._data.title}"</h4>
        </div>
      
        <div class="shoe-selected__img">
          <img
            src="${
              this._data.image === null
                ? "/questionMark.b752a859.png"
                : this._data.image
            }"
            alt="Jordan shoe"
            width="310"
            height="250"
          />
        </div>
      
        <div class="shoe-selected__information">
          <section class="shoe-selected__info-container">
            <h6>Info</h6>
            <div class="shoe-selected__info">
              <ul>
                <p>${this._data.sku}</p>
                <li>sku</li>
                <p>${this._data.brand}</p>
                <li>brand</li>
                <p>${this._data.gender}</p>
                <li>gender</li>
                <p>${this._data.colorway}</p>
                <li>colorway</li>
                <p>${this._data.releaseDate}</p>
                <li>release date</li>
              </ul>
            </div>
          </section>
          <section class="shoe-selected__price-container">
            <h6>Price</h6>
            <div class="shoe-selected__price">
              <ul>
                <p>${this._data.retailPrice}</p>
                <li>retail price</li>
                <p>N/A</p>
                <li>Est. market value</li>
              </ul>
            </div>
          </section>
          <section class="shoe-selected__shop-container">
            <h6>Shop</h6>
            <div class="shoe-selected__shop">
              <a href="#"><p>Buy from StockX</p></a>
              <a href="#"><p>Buy from Goat</p></a>
              <a href="#"><p>Buy from Flight Club</p></a>
            </div>
          </section>
        </div>
      `;
  }

  addHandler(handler) {
    const shoeCards = document.querySelector(".shoe-card__items");

    shoeCards.addEventListener("click", function (e) {
      const shoeCard = e.target.closest("div");
      const shoeCardId = shoeCard.getAttribute("data-id");
      if (shoeCardId !== null) {
        handler(shoeCardId);

        if (shoeSelectedContainer.classList.contains("hidden")) {
          shoeSelectedContainer.classList.remove("hidden");
        }
        if (overlay.classList.contains("hidden")) {
          overlay.classList.remove("hidden");
        }
      }
    });
  }
}

export default new ShoeView();
