const line = document.querySelector(".progress-line");
const items = document.querySelectorAll(".progress-item");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let count = 1;
let lineCount = [0, 1, 2, 3];

prev.addEventListener("click", function () {
  count--;
  count > 0 ? items[count].classList.remove("active") : null;

  count < 2 ? (count = 1) : null;
  line.style.width = 33 * lineCount[count - 1] + "%";
});

next.addEventListener("click", function () {
  items[count].classList.add("active");

  count++;
  count >= items.length ? (count = items.length) : null;

  line.style.width = 33 * lineCount[count - 1] + "%";
});
