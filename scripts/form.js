const date = new Date();
const productOptions = document.getElementById("product");
const form = document.querySelector("form");
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

products.forEach(function(product) {
  productOptions.innerHTML += `<option value="${product.id}">${product.name}</option>`;
})


document.getElementById("currentyear").innerHTML = '\u00A9' + date.getFullYear();
document.getElementById("lastModified").innerHTML = 'Last modified: ' + document.lastModified;

form.addEventListener('submit', () => {
  let reviewCount = Number(window.localStorage.getItem("reviewCount")) || 0;
  reviewCount += 1;
  localStorage.setItem("reviewCount", reviewCount);
});