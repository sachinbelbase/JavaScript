const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[parseInt(Math.random() * 16)];
  }
  return color;
};
let intervalID;
const startChangingColor = function () {
  if (!intervalID) {
    intervalID = setInterval(changeBackgroundColor, 1000);
  }

  function changeBackgroundColor() {
    document.body.style.backgroundColor = randomColor();
    console.log(randomColor());
  }
};
const stopChangingColor = function () {
  clearInterval(intervalID);
  console.log("Stopped");
  intervalID = null;
};
document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
