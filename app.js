var pbtm = document.getElementById("pbtm");
var time = document.getElementById("time");
var hit = document.getElementById("hit");
var score = document.getElementById("score");
var pbtm = document.getElementById("pbtm");

var timer = 30;
var scoreVal = 0;
var hitNum;

function makeBubble() {
  pbtm.innerHTML = "";
  for (let i = 1; i <= 96; i++) {
    var randomNumber = Math.floor(Math.random() * 10);
    pbtm.innerHTML += `<div class="bubble">${randomNumber}</div>`;
  }
}

function runTimer() {
  var timeInterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      if (timer < 10) {
        timer = "0" + timer;
      }
      time.innerHTML = timer;
    } else {
      clearInterval(timeInterval);
      pbtm.innerHTML = `<div class="d-flex flex-column">
        <h2>Game Over <br /> Score : ${scoreVal}</h2>
        <button class="btn btn-success" onclick="restart()">Restart</button>
      </div>
      `;
    }
  }, 1000);
}

function getNewHit() {
  hitNum = Math.floor(Math.random() * 10);
  hit.innerHTML = hitNum;
}

function increaseScore() {
  scoreVal += 10;
  score.innerHTML = scoreVal;
}

pbtm.addEventListener("click", function (details) {
  var bubbleNum = Number(details.target.innerText);

  if (bubbleNum === hitNum) {
    increaseScore();
    getNewHit();
    makeBubble();
  }
});

function restart() {
    timer = 30;
    scoreVal = 0;
    time.innerHTML = '30';
    score.innerHTML = '00';
    makeBubble();
    getNewHit();
    runTimer();
  }

getNewHit();

runTimer();

makeBubble();
