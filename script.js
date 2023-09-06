const number = document.querySelector(".number");
const decrease = document.querySelector(".btn");
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
let counter = 0;

decrease.addEventListener("click", function () {
  counter -= 1;
  number.textContent = counter;
  if (counter < 0) {
    number.style.color = "red";
  }
});

increase.addEventListener("click", function () {
  counter += 1;
  number.textContent = counter;
  if (counter > 0) {
    number.style.color = "darkgreen";
  }
});

reset.addEventListener("click", function () {
  counter = 0;
  number.textContent = counter;
  number.style.color = "black";
});
