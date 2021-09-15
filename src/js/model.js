// 443d1c8c-f2a8-482c-b6e2-52891c48daa3
import { API_URL, API_URL_ALLSHOES } from "./config.js";

export const state = {
  shoe: {},
  shoes: [],
};

export const loadShoe = async function (id) {
  try {
    const res = await fetch(
      `https://v1-sneakers.p.rapidapi.com/v1/sneakers/${id}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
          "x-rapidapi-key":
            "617301673dmsh04fb709ab7b7f74p1c2ff5jsnde2330604c58",
        },
      }
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} {${res.status}}`);

    const results = data.results[0];
    state.shoe = {
      brand: results.brand,
      colorway: results.colorway,
      estimatedMarketValue: results.estimatedMarketValue,
      gender: results.gender,
      id: results.id,
      image: results.media.imageUrl,
      links: results.links,
      name: results.name,
      releaseDate: results.releaseDate,
      releaseYear: results.releaseYear,
      retailPrice: results.retailPrice,
      title: results.title,
      sku: results.styleId,
      story: results.story,
    };
  } catch (err) {
    console.error(`${err}!!!`);
  }
};

export const loadShoes = async function (limit) {
  try {
    const res = await fetch(`${API_URL_ALLSHOES}${limit}&brand=jordan`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
        "x-rapidapi-key": "617301673dmsh04fb709ab7b7f74p1c2ff5jsnde2330604c58",
      },
    });
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} {${res.status}}`);

    state.shoes = data.results;
  } catch (err) {
    console.error(`${err}!!!`);
  }
};

export const filterShoesByYear = async function (year, limit) {
  try {
    const res = await fetch(
      `${API_URL_ALLSHOES}${limit}&releaseYear=${year}&brand=jordan`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
          "x-rapidapi-key":
            "617301673dmsh04fb709ab7b7f74p1c2ff5jsnde2330604c58",
        },
      }
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} {${res.status}}`);

    state.shoes = data.results;
  } catch (err) {
    console.error(`${err}!!!`);
  }
};
