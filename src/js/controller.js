const shoeCardItem = document.querySelector(".shoe-card__item");

// const request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.eu/rest/v2/name/portugal");
// request.send();
// console.log(request.responseText);

// request.addEventListener("load", function () {
//   console.log(this.responseText);
// });

const getObj = async function () {
  try {
    // const request = await fetch(
    //   "https://the-sneaker-database.p.rapidapi.com/sneakers?limit=10",
    //   {
    //     method: "GET",
    //     headers: {
    //       "x-rapidapi-host": "the-sneaker-database.p.rapidapi.com",
    //       "x-rapidapi-key": "617301673dmsh04fb709ab7b7f74p1c2ff5jsnde2330604c58",
    //     },
    //   }
    // );

    if (!request.ok) throw new Error(`Issue getting shoes`);
    // console.log(request);
    // const data = await request.json();
    // console.log(data);
  } catch (err) {
    console.error(`${err} !!!`);
  }
};

getObj();
