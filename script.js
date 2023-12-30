const face = document.querySelector(".face");
let score = 0;
const scores = document.querySelector(".scores");

face.addEventListener("click", () => {
  let count = 0;

  interval = setInterval(() => {
    score = Math.floor(Math.random() * 6) + 1;
    if (count === 7) {
      clearInterval(interval);
      scores.innerHTML = scores.innerHTML + "<br>" + score;
      scores.scrollTop = scores.scrollHeight;
    }
    face.innerHTML = score;
    count++;
  }, 250);
});
