let moon = document.getElementById("moon");
let stars = document.getElementById("stars");
let mounfr = document.getElementById("mounfr");
let mounb = document.getElementById("mounb");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let header = document.querySelector("header");
let pick = document.querySelector("ul");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + "px";
  moon.style.top = value * 1.05 + "px";
  mounfr.style.bottom = value * 1.5 + "px";
  mounb.style.top = value * 0.5 + "px";
  text.style.marginRight = value * 4 + "px";
  text.style.marginTop = value * 1.5 + "px";
  btn.style.marginTop = value * 2.5 + "px";
  header.style.top = value * 0.5 + "px";
});
