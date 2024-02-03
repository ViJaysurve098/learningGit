let boxes = document.querySelectorAll(".box");
let btn = document.querySelector(".resetbtn");
let turn = true;

let msgcontainer = document.querySelector(".msg-container");
let newGameBtn = document.querySelector("#new-gameBtn");
let msg = document.querySelector(".msg");

let winningPatterns = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  let countOfClicks = 0;
  box.addEventListener("click", () => {
    
    
    console.log("box was clicked!");
    if (turn) {
      box.innerText = "O";
      box.style.color="green"
      turn = false;
      
    } else {
      box.innerText = "X";
      box.style.color="red"
      turn = true;
      
    }
    box.disabled = true;
    checkWinner();
    
  });
});
const resetGame = () => {
  turn = true;
  enableboxes();
  msgcontainer.classList.add("hide");
};

const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (position1Value) => {
 if(position1Value==="X"){
  msg.style.color="red"
 }else{
  msg.style.color="green"
 }
  msg.innerText = `Congrats! winner is : ${position1Value}`;
 
  msgcontainer.classList.remove("hide");
  disableboxes();
};

const checkWinner = () => {
  for (let pattern of winningPatterns) {
    

    let position1Value = boxes[pattern[0]].innerText;
    let position2Value = boxes[pattern[1]].innerText;
    let position3Value = boxes[pattern[2]].innerText;
    if (position1Value != "" && position2Value != "" && position3Value != "") {
     
      if (
        position1Value === position2Value &&
        position2Value === position3Value
      ) {
        showWinner(position1Value);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
btn.addEventListener("click", resetGame);
