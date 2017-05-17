// Site version 1.0
// Created by xFyreWolfx - http://xfyrewolfx.tech/

var reasons = ["You smell like green eggs and ham", "You're too school for cool", "Your grandma told you so", "Dank memes", "You wish your boyfriend was hot like I am", "You can't catch me outside", "Mayonnaise is not an instrument", "You're friends with the Nigerian Prince", "Deodorant: try it sometime", "I don't like your T-Shirt", "You're on this website", "Your height", "You've had one too many hot dogs. Or seven.", "You were grown in a lab... and you just found out", "You forgot the Alamo, didn't you?", "You're not a real boy", "You still can't find waldo", "You eat worms", "You're a comic book nerd", "Winning is illogical", "This site has deemed you one.", "You gotta get a job, hippie!", "You got your mobility back", "You're a carrot farmer", "You sunbathe on your roof. Naked. In the city.", "Science"];

var randomNumber, randomReason;
var i = 0;

while(i<reasons.length) {
    i++;
    var duplicate = false;
    randomNumber = getRandom(0, reasons.length);
    randomReason = reasons[randomNumber].toUpperCase();

    if(i<reasons.length) {
        getPastReasons().forEach(function (item) {
            if (randomReason === item) {
                duplicate = true;
            }
        });
    }

    if(!duplicate){
        break;
    }
}

document.getElementById("reason").textContent= randomReason;

if(i<reasons.length) storePastReasons();

function storePastReasons(){
    var pr = getPastReasons();
    pr.push(randomReason);
    sessionStorage.setItem("reasons", JSON.stringify(pr));
}

function getPastReasons(){
    return JSON.parse(sessionStorage.getItem("reasons")) || [];
}

function getRandom(bottom, top) {
    return Math.floor(Math.random()*(top-bottom))+bottom;
}