"use strict";
const form = document.querySelector(".form");
const heightFeet = document.querySelector(".hfeet");
const heightInches = document.querySelector(".hinches");
const weight = document.querySelector(".weight-input");
const button = document.querySelector(".button");
const h3 = document.querySelector(".h3");
const weightValue = Number(weight.value);
const heightFeetValue = Number(heightFeet.value);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const MetricBMI = +weight.value / (+heightFeet.value) ** 2;
  console.log(+heightFeet.value);
  h3.textContent = MetricBMI;
});
