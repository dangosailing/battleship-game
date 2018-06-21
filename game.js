//grid coordinates
var location1 = 1;
var location2 = 2;
var location3 = 3;
var location4 = 4;
var location5 = 5;
var location6 = 6;

//ship coordinates
var shipLocation1 = Math.random() * 4;
var shipLocation2 = shipLocation1 + 1;
var shipLocation3 = shipLocation2 + 1;

//hit and miss counter
var hit = 0;
var miss = 0;
var isHit1 = false;
var isHit2 = false;
var isHit3 = false;

//game loop
while (isHit1 == false && isHit2 == false && isHit3 == false)
{
   var userInput = window.prompt("Enter the location you wish to bombard (1-6)!");

switch (userInput)
{
    case shipLocation1: 
    {
    isHit1 = true;
    hit++;
    break;
}
case shipLocation2: 
{
    isHit2 = true;
    hit++;
    break;
}
case shipLocation3: 
{
    isHit3 = true;
    hit++;
    break;
    }
default:
{
miss++;
window.alert("Missed! You have missed " + miss +" times!");
break;
}
} 
}

window.alert("You won!");