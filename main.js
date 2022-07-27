const counter = document.querySelector(".counter");
counter.addEventListener("click", increment);
const reset = document.querySelector(".reset");
reset.addEventListener("click", reseter);
const decrement = document.querySelector(".decrement");
decrement.addEventListener("click", decrementer);
const colour = document.querySelector(".colour");
colour.addEventListener("click", color);

const body = document.querySelector("body");
const input = document.querySelector("input");

function increment() {
  input.value = parseInt(input.value) + 1;
}

function reseter() {
  input.value = 0;
}

function decrementer() {
  input.value = parseInt(input.value) - 1;
}

function color() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}
