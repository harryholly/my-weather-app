function show(event) {
  event.preventDefault();

  let h1 = document.querySelector("h1");
  let content = document.querySelector("#content");
  h1.innerHTML = content.value;
}

let cityForm = document.querySelector("#enter-city");
cityForm.addEventListener("submit", show);

let currentDate = document.querySelector("#current-date");

let now = new Date();

let day = now.getDay();
let date = now.getDate();
let month = now.getMonth();
let year = now.getFullYear();

days = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
  ,
];
day = days[now.getDay()];

let months = [
  `January`,
  `Feburary`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];
month = months[now.getMonth()];

let currentMinutes = now.getMinutes();
let currentHour = now.getHours();
let currentSecond = now.getSeconds();

currentDate.innerHTML = `${day} ${date}, ${month}, ${year} ${currentHour}:${currentMinutes}:${currentSecond}`;
