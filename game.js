//grid coordinates
var location1 = 1;
var location2 = 2;
var location3 = 3;
var location4 = 4;
var location5 = 5;
var location6 = 6;

//ship coordinates
var shipLocation1 = Math.floor(Math.random() * 4) + 1;
var shipLocation2 = shipLocation1 + 1;
var shipLocation3 = shipLocation2 + 1;

//hit, miss, guess and win condition 
var hit = 0;
var miss = 0;
var guess;
var isSunk = false;

//connecting ship coordinates to game grid
console.log(shipLocation1);
console.log(shipLocation2);
console.log(shipLocation3);
document.getElementById(shipLocation1).className="grid ship";
document.getElementById(shipLocation2).className="grid ship";
document.getElementById(shipLocation3).className="grid ship";


var isHit = false;

function gridSelection()
{
   var guess = event.target;
   guess.classList.add("guess");
  
   
        if(guess.classList.contains("guess") && guess.classList.contains("ship"))
        {
            hit++;
             alert("ship hit!");
             guess.classList.add("hit");
        } else 
        {
            alert("You missed! Try again");
            guess.classList.add("miss");
            
        }
    
}
    



