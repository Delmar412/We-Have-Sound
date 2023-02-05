function start()
{
document.getElementById("startButton").disabled= true;
document.getElementById("stopButton").disabled= false;

}

function stop()
{
    document.getElementById("startButton").disabled= false;
    document.getElementById("stopButton").disabled= true;
}