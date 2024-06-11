const choices = ["rock","paper","scissors"];
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultdisplay = document.getElementById("resultdisplay");
const playerscoredisplay = document.getElementById("playerscoredisplay");
const computerscoredisplay = document.getElementById
("computerscoredisplay");
let computerscore = 0;
let playerscore = 0;

function playgame(playerchoice){
    const computerchoice = choices[Math.floor(Math.random()*3)];
   let result = "";
   if(playerchoice === computerchoice){
     result = "it is a tie";
   }
   else{
       switch(playerchoice){
        case"rock":
             result =(computerchoice === "scissors"? "you win":"you lose");
             break;
        case"paper":
             result =(computerchoice === "rock"? "you win":"you lose");
             break;
        case"scissors":
             result =(computerchoice === "paper"? "you win":"you lose");
             break;
       }
   }
   playerdisplay.textContent = `PLAYER:${playerchoice}`;
   computerdisplay.textContent = `COMPUTER:${computerchoice}`;
   resultdisplay.textContent = result;
   resultdisplay.classList.remove("greentext","redtext");

    switch(result){
        case "you win":
            resultdisplay.classList.add("greentext");
            playerscore++;
            playerscoredisplay.textContent = playerscore;
            break;
        case "you lose":
            resultdisplay.classList.add("redtext");
            computerscore++;
            computerscoredisplay.textContent = computerscore;
            break;   
         }
}

