import { Products } from "./const.js";

export const prod = JSON.parse(localStorage.getItem(Products)) || [
  {
    id: "1",
    name: "Banana",
    quantity: 150,
    unit: "kg",
    price: 19000,
    img: "https://www.shutterstock.com/image-photo/bunch-bananas-isolated-on-white-600nw-1722111529.jpg",
  },
  {
    id: "2",
    name: "Milk",
    quantity: 250,
    unit: "litr",
    price: 11000,
    img: "https://www.allrecipes.com/thmb/TgXszUn8XHUTe19kOwlyGQ4ZjyM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-87984584-2-2000-b40af34c16fd4bed815f1e279592b172.jpg",
  },
  {
    id: "3",
    name: "Pen",
    quantity: 1500,
    unit: "dona",
    price: 4000,
    img: "https://www.mytrendyphone.eu/images/Essentials-2-in-1-Touch-Screen-Pen-with-Clip-Black-5706470131729-25072022-01-p.webp",
  },
];
