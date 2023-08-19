var turnNumber = 1;
var plate = null;

var winner = document.getElementById("winner");

var plate11 = document.getElementById("11");
var plate12 = document.getElementById("12");
var plate13 = document.getElementById("13");
var plate21 = document.getElementById("21");
var plate22 = document.getElementById("22");
var plate23 = document.getElementById("23");
var plate31 = document.getElementById("31");
var plate32 = document.getElementById("32");
var plate33 = document.getElementById("33");

var button = document.getElementsByTagName("button");

plate11.addEventListener("click", function () {
  plateDecider("0");
});
plate12.addEventListener("click", function () {
  plateDecider("1");
});
plate13.addEventListener("click", function () {
  plateDecider("2");
});
plate21.addEventListener("click", function () {
  plateDecider("3");
});
plate22.addEventListener("click", function () {
  plateDecider("4");
});
plate23.addEventListener("click", function () {
  plateDecider("5");
});
plate31.addEventListener("click", function () {
  plateDecider("6");
});
plate32.addEventListener("click", function () {
  plateDecider("7");
});
plate33.addEventListener("click", function () {
  plateDecider("8");
});

//button.addEventListener("click", playAgain);

function plateDecider(value) {
  var currentPlate = value;
  plate = document.getElementsByClassName("plate")[value];
  turnDecider();
}

function turnDecider() {
  if (turnNumber % 2 == 1) {
    plate.textContent = "X";
  } else if (turnNumber % 2 == 0) {
    plate.textContent = "O";
  }
  turnNumber += 1;
  winnerChecker();
}

function winnerDecider(value) {
  console.log("winner decider trigered");
  if (value == "X") {
    document.getElementById("winner").textContent =
      " And the winner is Player 1";
  } else if (value == "O") {
    document.getElementById("winner").textContent =
      " And the winner is Player 2";
  } else {
    console.log("cannot decide");
  }
}

function winnerChecker() {
  if (
    plate11 !== "" &&
    plate11.textContent === plate12.textContent &&
    plate12.textContent === plate13.textContent
  ) {
    console.log(plate11.textContent);
    console.log(plate12.textContent);
    console.log(plate13.textContent);
    console.log("we got a winner");
    document.getElementById("winner").textContent = "we got a winner";
    winnerDecider(plate11.textContent);
  } else if (
    plate23 !== "" &&
    plate21.textContent === plate22.textContent &&
    plate22.textContent === plate23.textContent
  ) {
    console.log("2row");
    console.log(plate21.textContent);
    console.log(plate22.textContent);
    console.log(plate23.textContent);
    console.log("we got a winner");
    document.getElementById("winner").textContent = "we got a winner";
    winnerDecider(plate21.textContent);
  } else if (
    plate33 !== "" &&
    plate31.textContent === plate32.textContent &&
    plate32.textContent === plate33.textContent
  ) {
    console.log("3row");
    console.log(plate31.textContent);
    console.log(plate32.textContent);
    console.log(plate33.textContent);
    console.log("we got a winner");
    document.getElementById("winner").textContent = "we got a winner";
    winnerDecider(plate31.textContent);
  } else if (
    plate31 !== "" &&
    plate11.textContent === plate21.textContent &&
    plate21.textContent === plate31.textContent
  ) {
    console.log("1 column");
    console.log(plate11.textContent);
    console.log(plate21.textContent);
    console.log(plate31.textContent);
    console.log("we got a winner");
    document.getElementById("winner").textContent = "we got a winner";
    winnerDecider(plate11.textContent);
  } else if (
    plate32 !== "" &&
    plate12.textContent === plate22.textContent &&
    plate22.textContent === plate32.textContent
  ) {
    console.log("2 column");
    console.log(plate12.textContent);
    console.log(plate22.textContent);
    console.log(plate32.textContent);
    console.log("we got a winner");
    document.getElementById("winner").textContent = "we got a winner";
    winnerDecider(plate12.textContent);
  } else if (
    plate33 !== "" &&
    plate13.textContent === plate23.textContent &&
    plate23.textContent === plate33.textContent
  ) {
    console.log("3 column");
    console.log(plate13.textContent);
    console.log(plate23.textContent);
    console.log(plate33.textContent);
    console.log("we got a winner");
    document.getElementById("winner").textContent = "we got a winner";
    winnerDecider(plate13.textContent);
  } else if (
    plate33 != "" &&
    plate11.textContent === plate22.textContent &&
    plate22.textContent === plate33.textContent
  ) {
    console.log("1 diagonal");
    console.log(plate11.textContent);
    console.log(plate22.textContent);
    console.log(plate33.textContent);
    console.log("we got a winner");
    document.getElementById("winner").textContent = "we got a winner";
    winnerDecider(plate11.textContent);
  } else if (
    plate31 !== "" &&
    plate13.textContent === plate22.textContent &&
    plate22.textContent === plate31.textContent
  ) {
    console.log("2 diagonal");
    console.log(plate13.textContent);
    console.log(plate22.textContent);
    console.log(plate31.textContent);
    console.log("we got a winner");
    document.getElementById("winner").textContent = "we got a winner";
    winnerDecider(plate13.textContent);
  } else {
    console.log("no winner yet");
  }
}

function playAgain() {
  location.reload();
}
