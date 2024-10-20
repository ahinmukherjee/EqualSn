const playBoard = document.querySelector(".board");
let foodX= 10, foodY=15;
const initGame = () =>{
    let htmlMarkup= `<div class = "food" style= "grid-area: ${foodY}/ ${foodX} "></div>`;
    playBoard.innerHTML = htmlMarkup;   
}
initGame();


