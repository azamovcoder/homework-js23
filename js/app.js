import { Products } from "./const.js";
import { desc } from "./classes.js";
import { prod } from "./data.js";

let products = document.querySelector(".products");
let productCards = document.querySelector(".products__cards");
let add = document.querySelector(".products__btn");
let modal = document.querySelector(".modal");
let delateBtn = document.querySelector(".delete__btn");
let submit__btn = document.querySelector(".submit__btn");

let inputName = document.querySelector(".product__name");
let inputQuantity = document.querySelector(".product__quantity");
let inputImg = document.querySelector(".product__img");
let inputUnit = document.querySelector(".product__unit");
let inputPrice = document.querySelector(".product__price");

function dateProductCards(products) {
  let productHTML = "";
  products.forEach((product) => {
    productHTML += `
      <div class="products__card">
        <div class="products__card__imgs">
          <img src="${product.img}"/>
        </div>
        <div class="products__card__info">
          <h2 class="products__card__title">name: ${product.name}</h2>
          <p class="products__card__desc">quentity: ${product.quentity}</p>
          <p class="products__card__desc">unit: ${product.unit}</p>
          <p class="products__card__desc">price: ${product.price}</p>
        </div>
        <div class="products__card__btns">
          <button class="products__btn">Edit</button>
          <button class="products__btn" name="delete" data-id="${product.id}">Delete</button>
        </div>
      </div>
    `;
  });
  productCards.innerHTML = productHTML;
}
dateProductCards(prod);

add.addEventListener("click", () => {
  modal.style.display = "block";
});

delateBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

submit__btn.addEventListener("click", (e) => {
  e.preventDefault();

  let addProducts = new desc(
    inputName.value,
    inputImg.value,
    inputQuantity.value,
    inputUnit.value,
    inputPrice.value,
    inputName.value
  );

  prod.push(addProducts);
  localStorage.setItem(Products, JSON.stringify(prod));
  dateProductCards(prod);
  modal.style.display = "none";
  inputName.value = "";
  inputImg.value = "";
  inputQuantity.value = "";
  inputUnit.value = "";
  inputPrice.value = "";
});

let deleteBtn = (id) => {
  let index = prod.findIndex((u) => u.id === id);
  prod.splice(index, 1);
  dateProductCards(prod);
  localStorage.setItem(Products, JSON.stringify(prod));
};

products.addEventListener("click", (e) => {
  if (e.target.name === "delete") {
    deleteBtn(e.target.dataset.id);
  } else if (e.target.name === "edit") {
  }
});
