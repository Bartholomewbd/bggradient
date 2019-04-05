let colorOne = document.querySelector(".color-one");
let colorTwo = document.querySelector(".color-two");
const random = document.querySelector(".random");
const css = document.querySelector("h3");
const body = document.querySelector("body");

const toHex = color =>
  "#" +
  color
    .split("(")[1]
    .split(")")[0]
    .split(",")
    .map(x => {
      x = parseInt(x).toString(16);
      return x.length == 1 ? "0" + x : x;
    })
    .join("");

let background = () => {
  body.style.background = `linear-gradient(to right,${colorOne.value}, ${
    colorTwo.value
  })`;

  css.textContent = `linear-gradient(to right,${colorOne.value}, ${
    colorTwo.value
  })`;
};

let rando = () => Math.floor(Math.random() * 256);

let randomColor = () => `rgb(${rando()}, ${rando()}, ${rando()})`;

let setRandom = () => {
  newColorOne = toHex(randomColor());
  newColorTwo = toHex(randomColor());

  body.style.background = `linear-gradient(to right,${newColorOne}, ${newColorTwo}`;

  css.textContent = body.style.background;

  colorOne.value = newColorOne;
  colorTwo.value = newColorTwo;
};

colorOne.addEventListener("input", background);

colorTwo.addEventListener("input", background);

document.addEventListener("DOMContentLoaded", background);

random.addEventListener("click", setRandom);
