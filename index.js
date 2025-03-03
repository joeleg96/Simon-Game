var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;


function nextSequence() { 
    var randomNumber = (Math.floor(Math.random()*4));
    var randomChosenColor = buttonColors[randomNumber];
    var sound = randomChosenColor;
    gamePattern.push(randomChosenColor);
    randomChosenColorID = ("#" + randomChosenColor);
    $(randomChosenColorID).fadeOut().fadeIn();

    makeSound(sound);

    $("#level-title").html("Level " + level);
    level = level + 1;   
};

$(document).on("click", function(event) {
    var userChosenColor = (event.target.id);
    userClickedPattern.push(userChosenColor);
    var currentColor = ("#" + userChosenColor);
    $(currentColor).fadeOut().fadeIn();
    var sound = userChosenColor;

    makeSound(sound); 

});


function makeSound(sound) {
    switch (sound) {
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


$(document).one("keydown", function(){
    nextSequence();   
});   

