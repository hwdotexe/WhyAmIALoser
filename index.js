// Created by xFyreWolfx - http://xfyrewolfx.tech/

var reasons = ["Your face", "You smell like green eggs and ham", "You're too school for cool", "Your grandma told you so", "Dank memes", "You wish your boyfriend was hot like I am", "You can't cash me outside", "Mayonnaise is not an instrument", "You're friends with the Nigerian Prince", "Deodorant: try it sometime", "You order seasonal drinks from Starbucks out of season", "I don't like your T-Shirt", "You're on this website", "You can't cook", "You're the reincarnation of Flappy Bird", "You're really, really boring", "You forgot the Alamo, didn't you?", "Bad theology", "You still can't find waldo", "You voted for Mickey Mouse", "You're King of the Nerds", "Winning is illogical", "This site has deemed you one", "You gotta get a job, hippie!", "You literally can't even", "You're a carrot farmer", "You sunbathe on your roof. Naked. In the city.", "You've had your blinker on for the past 5 blocks", "Victory is not yours", "We are not the champions", "Your losing streak is a world record", "Sidewalk faceplant", "You surrender", "You didn't stop in the name of love", "You kept going during Hammer Time", "If you play hide-and-seek, nobody would look for you", "You play the clarinet", "You're too weird for Weird Al", "You have a Nick Cage movie collection", "Such loser. Much wow. So shameful.", "You're still doing the Harlem Shake", "I've got a jar of dirt", "The rum is always gone", "Your mother dresses you funny"];
var colors = ["red", "black", "#235108", "#0d3554", "#180777", "#631258", "#631218", "#7f020a", "#878e20", "#09a089", "#31a009", "#c47703"];
var randomNumber, randomReason, randomColor;
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

    randomColor = getRandom(0, colors.length);

    document.getElementById("reason").textContent= randomReason;
    document.getElementById("reason").setAttribute("style", "color: "+colors[randomColor]+";");

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