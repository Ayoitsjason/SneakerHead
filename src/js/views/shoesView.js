class ShoesView {
  _parent = document.querySelector(".shoe-card__items");
  _data;

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._parent.insertAdjacentHTML("beforeend", markup);
  }

  _generateMarkup() {
    return `
      <div class="shoe-card__item" data-id="${this._data.id}">
        <h4 class="shoe-card__item-title">${this._data.shoe} "${
      this._data.name
    }"</h4>
        <h6 class="shoe-card__item-price">$${this._data.retailPrice}</h6>
        <img
          src="${
            this._data.media.imageUrl === null
              ? "/questionMark.b752a859.png"
              : this._data.media.imageUrl
          }"
          alt="Jordan shoe"
          width="310"
          height="250"
        />
        <h6 class="shoe-card__item-est-price">Est. Market Value: ${
          this._data.estimatedMarketValue
        }: N/A</h6>
      </div>
    `;
  }

  addHandler(handler) {}
}

export default new ShoesView();
