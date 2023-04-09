let currentState = "Red";
let redButton = document.getElementById("red-button");
let greenButton = document.getElementById("green-button");
let yellowButton = document.getElementById("yellow-button");

function transitionState() {
  switch (currentState) {
    case "Green":
      setTimeout(function() {
        currentState = "Yellow";
        greenButton.classList.remove("green");
        yellowButton.classList.add("yellow");
        transitionState();
      }, 15000); // 15 seconds
      break;
    case "Yellow":
      setTimeout(function() {
        currentState = "Red";
        yellowButton.classList.remove("yellow");
        redButton.classList.add("red");
        transitionState();
      }, 5000); // 5 seconds
      break;
    case "Red":
      setTimeout(function() {
        currentState = "Green";
        redButton.classList.remove("red");
        greenButton.classList.add("green");
        transitionState();
      }, 20000); // 20 seconds
      break;
  }
}

redButton.addEventListener("click", function() {
  currentState = "Red";
  redButton.classList.add("red");
  greenButton.classList.remove("green");
  yellowButton.classList.remove("yellow");
  transitionState();
});

greenButton.addEventListener("click", function() {
  currentState = "Green";
  redButton.classList.remove("red");
  greenButton.classList.add("green");
  yellowButton.classList.remove("yellow");
  transitionState();
});

yellowButton.addEventListener("click", function() {
  currentState = "Yellow";
  redButton.classList.remove("red");
  greenButton.classList.remove("green");
  yellowButton.classList.add("yellow");
  transitionState();
});

// Call transitionState function to start the FSM
transitionState();