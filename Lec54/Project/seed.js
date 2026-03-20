const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  {
    name: "Iphone 14pro",
    img: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=600",
    price: 130000,
    desc: "very costly"
  },
  { 
    name: "Macbook m2 pro",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600",
    price: 250000,
    desc: "very costly"
  },
  {
    name: "Iwatch",
    img: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600",
    price: 51000,
    desc: "very costly"
  },
  {
    name: "Airpods",
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600",
    price: 1000,
    desc: "very costly"
  },
  {
    name: "Airpods max",
    img: "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=600",
    price: 102000,
    desc: "very costly"
  }
];


async function seedDB() {
  await Product.deleteMany({});
await Product.insertMany(products);

  console.log("data seeded successfully");
}

module.exports = seedDB;
