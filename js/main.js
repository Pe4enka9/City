const tel = document.getElementById("tel");
const error = document.querySelector(".error");

forError = tel.clientWidth / 2 + 20 + "px";

error.style.left = `calc(50% + ${forError})`;
