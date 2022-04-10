let player1Score = 0;
let player2Score = 0;
let player1Turn = true;
let name1;
let name2;
let player1Counter = 0;
let player2Counter = 0;

const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const body = document.querySelector("body");
const container = document.querySelector(".container");
const doubleOrNothing = document.getElementById("dblOrNothing");
const doubleNum = document.getElementById("2x");
const secondDoubleNum = document.getElementById("2x2");

function showDisplayButton() {
  rollBtn.style.display = "none";
  resetBtn.style.display = "block";
}

function winGame() {
  if (
    player1Score >= 20 &&
    player1Counter === player2Counter &&
    player1Scoreboard.textContent > player2Scoreboard.textContent
  ) {
    message.textContent = `${name1} has won! 🥳`;
    doubleOrNothing.classList.add("hidden");
    if (name1 == "") {
      message.textContent = "Player 1 has won! 🥳";
    }
    body.style.backgroundImage =
      "radial-gradient(circle, #32cd2b, #3dbe22, #44af1b, #47a014, #48920f)";
    showDisplayButton();
    container.classList.add("vibrate-1");
    setTimeout(function () {
      confetti.start();
    });

    start();
  } else if (
    player2Score >= 20 &&
    player1Counter === player2Counter &&
    player2Scoreboard.textContent > player1Scoreboard.textContent
  ) {
    doubleOrNothing.classList.add("hidden");
    message.textContent = `${name2} has won! 🎉`;
    if (name2 == "") {
      message.textContent = "Player 2 has won! 🎉";
    }
    body.style.backgroundImage =
      "radial-gradient(circle, #32cd2b, #3dbe22, #44af1b, #47a014, #48920f)";

    showDisplayButton();
    container.classList.add("vibrate-1");
    setTimeout(function () {
      confetti.start();
    });
  }
}

window.onload = function () {
  name1 = prompt("Player 1 name:");
  name2 = prompt("Player 2 name:");
  message.textContent = `${name1}'s Turn`;

  if (name1 == "") {
    message.textContent = "Player 1 Turn";
  }
};

rollBtn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  if (player1Turn) {
    player1Counter++;

    player1Score += randomNumber;
    player1Scoreboard.textContent = player1Score;
    // player1Dice.textContent = randomNumber;
    if (randomNumber === 1) {
      player1Dice.innerHTML =
        '<i style="animation: fadeIn 0.6s" class="fa-solid fa-dice-one"></i>';
    } else if (randomNumber == 2) {
      player1Dice.innerHTML =
        '<i style="animation: fadeIn 0.6s" class="fa-solid fa-dice-two"></i>';
    } else if (randomNumber == 3) {
      player1Dice.innerHTML =
        '<i style="animation: fadeIn 0.6s" class="fa-solid fa-dice-three"></i>';
    } else if (randomNumber == 4) {
      player1Dice.innerHTML =
        '<i style="animation: fadeIn 0.6s" class="fa-solid fa-dice-four"></i>';
    } else if (randomNumber == 5) {
      player1Dice.innerHTML =
        '<i style="animation: fadeIn 0.6s" class="fa-solid fa-dice-five"></i>';
    } else if (randomNumber == 6) {
      player1Dice.innerHTML =
        '<i style="animation: fadeIn 0.6s" class="fa-solid fa-dice-six"></i>';
    }
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    message.textContent = `${name2}'s Turn`;
    if (name2 == "") {
      message.textContent = "Player 2 Turn";
    }
  } else {
    player2Counter++;
    player2Score += randomNumber;
    player2Scoreboard.textContent = player2Score;
    // player2Dice.textContent = randomNumber;
    if (randomNumber === 1) {
      player2Dice.innerHTML =
        '<i style="animation: fadeIn 0.6s" class="fa-solid fa-dice-one"></i>';
    } else if (randomNumber == 2) {
      player2Dice.innerHTML =
        '<i style="animation: fadeIn 0.6s" class="fa-solid fa-dice-two"></i>';
    } else if (randomNumber == 3) {
      player2Dice.innerHTML =
        '<i style="animation: fadeIn 0.6s" class="fa-solid fa-dice-three"></i>';
    } else if (randomNumber == 4) {
      player2Dice.innerHTML =
        '<i style="animation: fadeIn 0.6s" class="fa-solid fa-dice-four"></i>';
    } else if (randomNumber == 5) {
      player2Dice.innerHTML =
        '<i style="animation: fadeIn 0.6s" class="fa-solid fa-dice-five"></i>';
    } else if (randomNumber == 6) {
      player2Dice.innerHTML =
        '<i style="animation: fadeIn 0.6s" class="fa-solid fa-dice-six"></i>';
    }
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = `${name1}'s Turn`;
    if (name1 == "") {
      message.textContent = "Player 1 Turn";
    }
  }

  winGame();

  player1Turn = !player1Turn;
});

function reset() {
  setTimeout(function () {
    confetti.stop();
  });
  player1Score = 0;
  player2Score = 0;
  player1Turn = true;
  player1Scoreboard.textContent = player1Score;
  player2Scoreboard.textContent = player2Score;
  doubleOrNothing.classList.remove("hidden");

  message.textContent = `${name1}'s Turn`;
  if (name1 == "") {
    message.textContent = "Player 1 Turn";
  }
  player1Dice.classList.add("active");
  player2Dice.classList.remove("active");
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
  resetBtn.style.display = "none";
  rollBtn.style.display = "block";
  body.style.backgroundImage =
    "radial-gradient(circle, #cd2b41, #d43f35, #d75328, #d86619, #d67902)";
  container.classList.remove("vibrate-1");
}

doubleOrNothing.addEventListener("click", function () {
  let risk = Math.floor(Math.random() * 6) + 1;
  if (player1Turn && risk <= 3) {
    player1Counter++;
    player1Score = 0;
    player1Scoreboard.textContent = player1Score;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    player1Dice.innerHTML =
      '<i style="animation: fadeIn 0.6s" class="fa-solid fa-xmark"></i>';
  } else if (player1Turn && risk > 3) {
    player1Counter++;
    let doubledPoints = risk * 2;
    player1Score += doubledPoints;
    player1Scoreboard.textContent = player1Score;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");

    if (risk === 4) {
      player1Dice.innerHTML =
        '<i style="animation: fadeIn 0.6s" class="fa-solid fa-dice-four"></i>';
      doubleNum.classList.remove("hidden");
      setTimeout(() => {
        doubleNum.classList.add("hidden");
      }, 1000);
      player1Dice.classList.remove("active");
      player2Dice.classList.add("active");
    } else if (risk == 5) {
      player1Dice.innerHTML =
        '<i style="animation: fadeIn 0.6s" class="fa-solid fa-dice-five"></i>';
      doubleNum.classList.remove("hidden");
      setTimeout(() => {
        doubleNum.classList.add("hidden");
      }, 1000);
      player1Dice.classList.remove("active");
      player2Dice.classList.add("active");
    } else if (risk == 6) {
      player1Dice.innerHTML =
        '<i style="animation: fadeIn 0.6s" class="fa-solid fa-dice-six"></i>';
      doubleNum.classList.remove("hidden");
      player1Dice.classList.remove("active");
      player2Dice.classList.add("active");
      setTimeout(() => {
        doubleNum.classList.add("hidden");
      }, 1000);
    }
  }

  if (!player1Turn && risk <= 3) {
    player2Counter++;
    player2Score = 0;
    player2Scoreboard.textContent = player2Score;
    player2Dice.innerHTML =
      '<i style="animation: fadeIn 0.6s" class="fa-solid fa-xmark"></i>';
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
  } else if (!player1Turn && risk > 3) {
    player2Counter++;
    let p2DoubledPoints = risk * 2;
    player2Score += p2DoubledPoints;
    player2Scoreboard.textContent = player2Score;
    player2Scoreboard.textContent = player2Score;

    if (risk === 4) {
      player2Dice.innerHTML =
        '<i style="animation: fadeIn 0.6s" class="fa-solid fa-dice-four"></i>';
      secondDoubleNum.classList.remove("hidden");
      setTimeout(() => {
        secondDoubleNum.classList.add("hidden");
      }, 1000);
      player2Scoreboard.textContent = player2Score;
    } else if (risk == 5) {
      player2Dice.innerHTML =
        '<i style="animation: fadeIn 0.6s" class="fa-solid fa-dice-five"></i>';
      secondDoubleNum.classList.remove("hidden");
      setTimeout(() => {
        secondDoubleNum.classList.add("hidden");
      }, 1000);
      player2Scoreboard.textContent = player2Score;
    } else if (risk == 6) {
      player2Dice.innerHTML =
        '<i style="animation: fadeIn 0.6s" class="fa-solid fa-dice-six"></i>';
      secondDoubleNum.classList.remove("hidden");
      player2Scoreboard.textContent = player2Score;

      setTimeout(() => {
        secondDoubleNum.classList.add("hidden");
      }, 1000);
    }
  }
  winGame();

  player1Turn = !player1Turn;
});

resetBtn.addEventListener("click", reset);
