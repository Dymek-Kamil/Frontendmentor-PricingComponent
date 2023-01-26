"use strict";
const checkboxEl = document.querySelector("#check");
const basicH1El = document.querySelector(".basic h1");
const professionalH1El = document.querySelector(".professional h1");
const masterH1El = document.querySelector(".master h1");
const discount = document.querySelector(".discount");

checkboxEl.addEventListener("change", function () {
  if (checkboxEl.checked) {
    basicH1El.textContent = "$ 19.99";
    professionalH1El.textContent = "$ 24.99";
    masterH1El.textContent = "$ 39.99";
  } else {
    basicH1El.textContent = "$ 199.99";
    professionalH1El.textContent = "$ 249.99";
    masterH1El.textContent = "$ 399.99";
  }
});
