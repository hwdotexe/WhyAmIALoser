// Site version 1.1
// Created by xFyreWolfx - http://xfyrewolfx.tech/

var reasons = ["You're too school for cool", "You wish your boyfriend was hot like I am", "You can't cash me outside", "Mayonnaise is not an instrument", "You're friends with the Nigerian Prince", "You're on this website", "You forgot the Alamo, didn't you?", "You still can't find waldo", "Winning is illogical", "This site has deemed you one.", "You gotta get a job, hippie!", "You've had your blinker on for the past 5 blocks", "Victory is not yours", "We are not the champions", "Your losing streak is a world record", "You just lost The Game"];
var randomNumber, randomReason;
var i = 0;

document.getElementById("again").addEventListener("click", newReason);

function newReason(){
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
    i = 0;
}

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

newReason();