var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).on("keydown", function(){
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }     
}); 

$(".btn").on("click", function(event) {
    var userChosenColor = (event.target.id);
    userClickedPattern.push(userChosenColor);

    makeSound(userChosenColor);
    animatePress(userChosenColor); 
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(lastColor) {
    if (userClickedPattern[lastColor] === gamePattern[lastColor]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout (function() {
                nextSequence();
            }, 1000);
            }
        } else {
        var errorSound = new Audio("sounds/wrong.mp3");
        errorSound.play();
        $("body").addClass("game-over");
        setTimeout (function() {
            $("body").removeClass("game-over")();
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart")

        startOver();
        }
};

function nextSequence() { 
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = (Math.floor(Math.random()*4));
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    randomChosenColorID = ("#" + randomChosenColor);
    $(randomChosenColorID).fadeOut().fadeIn();

    makeSound(randomChosenColor);     
};

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout (function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100)
}

function makeSound(color) {
    switch (color) {
        case "green":
            var green = new Audio("sounds/green.mp3");
            green.play();
        break;
        
        case "red":
            var red = new Audio("sounds/red.mp3");
            red.play();
        break;

        case "yellow":
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
        break;

        case "blue":
            var blue = new Audio("sounds/blue.mp3");
            blue.play();
        break;

        default:
            console.log(sound);
        break;

    }
} 



function startOver() {
    level = 0;
    gamePattern = [];
    started = false; 
}

