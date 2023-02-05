function forLoop()
{
    var currTime = 10;
    var i = 1;
    // This is a for loop with if statements to change  display at certain specifications
    for( i = 1 ; i < 12 ; i++ )
    {
        
        setTimeout(function () {
            // This if statement  displays BLASTOFF once and only  when timer  hits 0
            if (currTime == 0)
        {
            document.getElementById("countdownTimer").innerHTML = "BLASTOFF!!!";

        }
        // This else  if statement puts the warning phrase  only when  currTime  is  less  than  5
        else  if(currTime < 5){
           document.getElementById("countdownTimer").innerHTML = "Warning Less Than  Half Way to Launch, Time Left:  " + currTime;
            currTime = currTime - 1;
        }
        // This  else  says as  long as none  of the  other  if  statements are   true  then it will  follow this
        else 
        {
            document.getElementById("countdownTimer").innerHTML = "Time Left: " + currTime;
            currTime = currTime - 1;

        }

    }, 1000 * i);
    }
}

function history()
{
    location.replace("space 2.html")
}
