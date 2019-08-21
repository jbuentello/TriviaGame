var QuestionOne = ["Mustang", "Supra", "Corvette", "Alpha Romeo"];
var QuestionTwo = ["3qts", "1 Gallon", "1qt", "None"];
var QuestionThree= ["Pamolive", "Clorox", "Handsoap", "Meguires"]


//Psuedocode
//Create a page with a start button
//When you click start button the game timer begins and you can see the questions
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
//Create question ( this can be dynamically or hard coded into Html)
//Radomize the button location so that the answers don't stay in the same place

//Once all the guesses are clicked name a button that says done
//Once the button is clicked compare the answers to the correct answers.
//Mark all done when this is completed.
//If the answers match the answers mark the answer as true and put it on the score board as correct
//If the anser is false then add to score board as incorrect
//If the question was not answered at all and left blank mark the answer as Unanswered


