let countEle = document.getElementById("count");
let valEle = document.getElementById("val");

let count = 0;

function d_btn() {
  count--;
  valEle.textContent = count;
  alr();
}

function r_btn() {
  valEle.innerText = 0;
  valEle.style.color = "black";
}

function i_btn() {
  count++;
  valEle.textContent = count;
  alr();
}

function alr() {
  if (count < 0) {
    valEle.style.color = "red";
  } else if (count > 0) {
    valEle.style.color = "green";
  }
}
