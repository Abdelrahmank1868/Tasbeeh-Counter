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

function color() {}

// document.body.style.backgroundImage = "url(.//images/blackcurrent.png)";
// document.body.style.backgroundImage = "url(.//images/blueberry.png)";
// document.body.style.backgroundImage = "url(.//images/emerald.png)";
// document.body.style.backgroundImage = "url(.//images/mint.png)";
// document.body.style.backgroundImage = "url(.//images/paprika.png)";
// document.body.style.backgroundImage = "url(.//images/peach.png)";
// document.body.style.backgroundImage = "url(.//images/ruby.png)";
// document.body.style.backgroundImage = "url(.//images/sea.png)";
// document.body.style.backgroundImage = "url(.//images/tropical.png)";
// document.body.style.backgroundImage = "url(.//images/purple.png)";
