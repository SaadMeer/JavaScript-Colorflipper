const hexColors = ["1","2","3","4","5","6","7","8","9","A",
"B","C","D","E","F",];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let hexSign = "#";
    for(let i = 0; i < 6; i++){
        hexSign += hexColors[getRandomNumber()];
    }
    document.body.style.backgroundColor = hexSign;
    color.textContent = hexSign;
})

function getRandomNumber(){
    return Math.floor(Math.random() * hexColors.length);
}