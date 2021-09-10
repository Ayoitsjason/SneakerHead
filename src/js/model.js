// cdb5c9c4-5304-4a4a-b62a-f1cf128b8f1e
import { API_URL, API_URL_ALLSHOES } from "./config.js";

export const state = {
  shoe: {},
  shoes: [],
};

export const loadShoe = async function (id) {
  try {
    const res = await fetch();
    // `https://the-sneaker-database.p.rapidapi.com/sneakers/${id}`,
    // {
    //   method: "GET",
    //   headers: {
    //     "x-rapidapi-host": "the-sneaker-database.p.rapidapi.com",
    //     "x-rapidapi-key":
    //       "617301673dmsh04fb709ab7b7f74p1c2ff5jsnde2330604c58",
    //   },
    // }
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} {${res.status}}`);

    const results = data.results[0];
    state.shoes = {
      brand: results.brand,
      colorway: results.colorway,
      estimatedMarketValue: results.estimatedMarketValue,
      gender: results.gender,
      id: results.id,
      image: results.image,
      links: results.links,
      name: results.name,
      releaseDate: results.releaseDate,
      releaseYear: results.releaseYear,
      retailPrice: results.retailPrice,
      silhouette: results.silhouette,
      sku: results.sku,
      story: results.story,
    };

    console.log(state.shoes);
  } catch (err) {
    console.error(`${err}!!!`);
  }
};

export const loadShoes = async function (limit) {
  try {
    // const res = await fetch(`${API_URL_ALLSHOES}${limit}&brand=jordan`, {
    //   method: "GET",
    //   headers: {
    //     "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
    //     "x-rapidapi-key": "617301673dmsh04fb709ab7b7f74p1c2ff5jsnde2330604c58",
    //   },
    // });
    const data = await res.json();
    console.log(data);
    if (!res.ok) throw new Error(`${data.message} {${res.status}}`);
    // console.log(data.results);
    state.shoes = data.results;
    // console.log(state.shoes);
    // console.log(state.shoes[0].media);
  } catch (err) {
    console.error(`${err}!!!`);
  }
};

export const filterShoesByYear = async function (year) {
  try {
    // const res = await fetch(`${API_URL_ALLSHOES}${limit}&releaseYear=${year}&brand=jordan`, {
    //   method: "GET",
    //   headers: {
    //     "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
    //     "x-rapidapi-key": "617301673dmsh04fb709ab7b7f74p1c2ff5jsnde2330604c58",
    //   },
    // });
    const data = await res.json();
    console.log(data);
    if (!res.ok) throw new Error(`${data.message} {${res.status}}`);
    // console.log(data.results);
    state.shoes = data.results;
    // console.log(state.shoes);
    // console.log(state.shoes[0].media);
  } catch (err) {
    console.error(`${err}!!!`);
  }
};
