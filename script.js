"use scrict";
const previousBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
const mainBtn = document.querySelector(".title");
const subBtn = document.querySelector(".sub");

const content = [
  {
    title: "looking for",
    sub: "Best Cloud Internet Service",
  },
  {
    title: "Open wave",
    sub: "About",
  },
  {
    title: "consultation",
    sub: "Receive a Fee",
  },
];
mainBtn.textContent = content[0].title;
subBtn.textContent = content[0].sub;

function loop() {
  if (count > content.length - 1) {
    count = 0;
  } else if (count < 0) {
    count = content.length - 1;
  }
}
let count = 0;

nextBtn.addEventListener("click", function () {
  count++;
  loop()
  mainBtn.textContent = content[count].title;
  subBtn.textContent = content[count].sub;
});
previousBtn.addEventListener("click", function () {
  count--;loop()
  mainBtn.textContent = content[count].title;
  subBtn.textContent = content[count].sub;
});

// nextBtn.addEventListener("click", function () {
//   count++;
//   mainBtn.textContent = content[0].title;
//   subBtn.textContent = content[0].sub;
// });

// previousBtn.addEventListener("click", function () {
//   count--;
//   mainBtn.textContent = content[count].title;
//   subBtn.textContent = content[count].sub;
// });
