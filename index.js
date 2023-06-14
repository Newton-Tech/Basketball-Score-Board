const scoreHome = document.getElementById("score-home");
const scoreGuest = document.getElementById("score-guest");

let countHome = 100;
scoreHome.textContent = countHome;

let countGuest = 200;
scoreGuest.textContent = countGuest;

function addOneHome() {
  countHome += 1;
  scoreHome.textContent = countHome;
}

function addTwoHome() {
  countHome += 2;
  scoreHome.textContent = countHome;
}

function addThreeHome() {
  countHome += 3;
  scoreHome.textContent = countHome;
}
//-------------------------------------------------------

function addOneGuest() {
  countGuest += 1;
  scoreGuest.textContent = countGuest;
}

function addTwoGuest() {
  countGuest += 2;
  scoreGuest.textContent = countGuest;
}
function addThreeGuest() {
  countGuest += 3;
  scoreGuest.textContent = countGuest;
}
