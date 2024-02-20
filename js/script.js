// falsy values
// null, undefined, 0, '', NaN
// if(null || undefined || 0 || '' || NaN){
//     console.log('never printed');
// }

// let c = 0;
// let d = c || 'default value';

// console.log(d);

// let product = {
//   id: 1,
//   name: "Jasmine Oil",
//   description: "",
//   price: 50,
//   img: "https://media6.ppl-media.com/mediafiles/blogs/Jasmine_Essential_Oil_e1548692158500_d50f0b7ecc.jpeg",
//   variant: {
//     color: null,
//     qty: 3,
//   },
// };

// let description = product.description || "No description available";

// let color = product.variant.color || "No color availble";

// console.log(description);
// console.log(color);

// let product2 = {
//   id: 1,
//   name: "Jasmine Oil",
//   description: "",
//   price: 50,
//   img: "https://media6.ppl-media.com/mediafiles/blogs/Jasmine_Essential_Oil_e1548692158500_d50f0b7ecc.jpeg",
//   variant: {
//     color: "white",
//     qty: 25,
//   },
// };

// let color2 = product2?.variant?.color || "No color available";
// console.log(color2);

// let {
//   name,
//   price,
//   img,
//   variant: { color, qty },
// } = product2;
// console.log(name, price, img, color, qty);

"use strict";

import { cardComponent } from "../component/cardCompoment.js";
import { products } from "../data/product.js";

let renderArea = document.querySelector("#render-area");
products.map((products) => {
  renderArea.innerHTML += cardComponent(products);
});
