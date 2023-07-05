const stopwatch = document.querySelector("#stopwatch");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const reset = document.querySelector("#reset");

let time = 0;
let hour, minute, second;
let startTimer;

const handleStart = (e) => {
  e.preventDefault();
  stopwatch.style.color = 'black'
  clearInterval(startTimer);
  start.setAttribute("disabled", "");
  stopwatch.classList.remove('blink')

  startTimer = setInterval(() => {
    time++;

    hour = Math.floor(time / 60 / 60);
    minute = Math.floor(time / 60) - hour * 60;
    second = Math.floor(time % 60);

    stopwatch.innerHTML = `${hour < 10 ? "0" + hour : hour}:${
      minute < 10 ? "0" + minute : minute
    }:${second < 10 ? "0" + second : second}`;

  }, 1000);
};

const handlePause = (e) => {
  e.preventDefault();
  start.removeAttribute("disabled", "");
  stopwatch.style.color = 'red'
  clearInterval(startTimer);
  stopwatch.classList.add('blink')
};

const handleReset = (e) => {
  e.preventDefault();
  stopwatch.style.color = 'black'
  stopwatch.classList.remove('blink')

  time = 0;
  stopwatch.innerHTML = "00:00:00";
};


start.addEventListener("click", handleStart);
pause.addEventListener("click", handlePause);
reset.addEventListener("click", handleReset);
