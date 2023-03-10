
let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let timerEl = document.getElementById("timer");
document.getElementById("new-game-btn").disabled=true;

let homeScore = 0; 
let guestScore = 0;

var timerId;
var min = 4;
var sec = 59;
var isplay = false;


function addPoints(team,score) {
    
    if (team === "home" && isplay === true) {
        homeScore += score
        homeScoreEl.textContent = homeScore
    }
    else if (team ==="guest" && isplay === true){
        guestScore += score
        guestScoreEl.textContent = guestScore
    }
    whoIsWinning()
}

                    document.getElementById("pause").style.display = "none";
                    function startTimer() {
                            isplay = true;
                            document.getElementById("new-game-btn").disabled=true;
                            var btton = document.getElementById("start").style.display = "none";
                            document.getElementById("pause").style.display = "inline";
                            
                            timerId = setInterval(function () {
                                document.getElementById("timer").textContent = min + ":" + sec;
                                sec--;
                                if (sec == -1) {
                                    min--;
                                    sec = 59;
                                }
                                if (min == -1) {
                                    clearTimeout(timerId);
                                    isplay = false;
                                }
                                if (sec < 10) {
                                    sec = "0" + sec;
                                }
                                if (min == 0 && sec == 0){
                                    document.getElementById("new-game-btn").disabled=false;
                                }
                            }, 1000);
                    }

function pause() {
  clearInterval(timerId);
  isplay = false;
  document.getElementById("new-game-btn").disabled=false;
  document.getElementById("start").style.display = "inline";
  document.getElementById("pause").style.display = "none";
}


function newGame () {
  homeScore = 0
  guestScore = 0
  min = 4
  sec = 59
  isplay = false;
  homeScoreEl.textContent = homeScore
  guestScoreEl.textContent = guestScore
  document.getElementById("home-score").style.backgroundColor = "black";
  document.getElementById("guest-score").style.backgroundColor = "black";
  timerEl.textContent = "5:00"
  document.getElementById("start").style.display = "inline";
  document.getElementById("pause").style.display = "none";
}

function whoIsWinning() {
    if (homeScore > guestScore) {
        document.getElementById("home-score").style.backgroundColor = "#5efd52";
        document.getElementById("guest-score").style.backgroundColor = "black";
    } else if (guestScore > homeScore){
        document.getElementById("guest-score").style.backgroundColor = "#5efd52";
        document.getElementById("home-score").style.backgroundColor = "black";
    } else {
        document.getElementById("home-score").style.backgroundColor = "black";
        document.getElementById("guest-score").style.backgroundColor = "black";
    }
}
