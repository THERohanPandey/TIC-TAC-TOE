// Select all elements with the class "box" and store them in the boxes variable
let boxes = document.querySelectorAll(".box");

// Select the element with the ID "reset-btn" and store it in the resetBtn variable
let resetBtn = document.querySelector("#reset-btn");

// Select the element with the ID "new-btn" and store it in the newGameBtn variable
let newGameBtn = document.querySelector("#new-btn");

// Select the element with the class "msg-container" and store it in the msgContainer variable
let msgContainer = document.querySelector(".msg-container");

// Select the element with the ID "msg" and store it in the msg variable
let msg = document.querySelector("#msg");

// Initialize a variable turnO to true, indicating it's player O's turn (X's turn if false)
let turnO = true; //x , O c

// Define an array of arrays containing winning patterns for tic-tac-toe
const winPatterns = [
  // Rows
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  // Columns
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  // Diagonals
  [0, 4, 8], // Top-left to bottom-right diagonal
  [2, 4, 6], // Top-right to bottom-left diagonal
];

// Define a function to reset the game state
const resetGame = () => {
  turnO = true; // Reset the turn to player O
  enableBoxes(); // Enable all boxes
  msgContainer.classList.add("hide"); // Hide the message container
};

// Add event listeners to each box for when it's clicked
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // Check whose turn it is and set the box text accordingly
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true; // Disable the clicked box

    checkWinner(); // Check if there's a winner after each move
  });
});

// Define a function to disable all boxes
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

// Define a function to enable all boxes
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false; // Enable the box
    box.innerText = ""; // Clear the text inside the box
  }
};

// Define a function to display the winner
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`; // Display the winner message
  msgContainer.classList.remove("hide"); // Show the message container
  disableBoxes(); // Disable all boxes
};

// Define a function to check if there's a winner
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val); // If all three positions in a pattern are the same, show the winner
      }
    }
  }
};

// Add event listeners to the new game button and reset button to reset the game
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
