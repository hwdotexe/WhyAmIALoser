// Created by xFyreWolfx - http://hadenw.tech/

var reasons = [];
var colors = ["red", "black", "#235108", "#0d3554", "#180777", "#631258", "#631218", "#7f020a", "#878e20", "#09a089",
    "#31a009", "#c47703", "#16e5de", "#1acc26", "#7f1acc"];
var randomNumber, randomReason, randomColor;

function loadReasons(file, cb) {
    var f = new XMLHttpRequest();
    f.overrideMimeType("application/json");
    f.open("GET", file);
    f.onreadystatechange = function() {
        if (f.readyState === 4 && f.status === 200) {
            cb(f.responseText);
        }
    };

    f.send(null);
}

function newReason(){
    randomColor = getRandom(0, colors.length);

    if(reasons.length !== 0) {
        randomNumber = getRandom(0, reasons.length);
        randomReason = reasons[randomNumber].toUpperCase(); // Remove from this as more are displayed
        document.getElementById("reason").textContent = randomReason;
        document.getElementById("reason").setAttribute("style", "color: " + colors[randomColor] + ";");

        reasons.splice(randomNumber, 1);
    }else{
        init();
    }
}

function getRandom(bottom, top) {
    return Math.floor(Math.random()*(top-bottom))+bottom;
}

// Register button click listener.
document.getElementById("again").addEventListener("click", newReason);

// Load our reason data from file.
function init(){
    loadReasons("reasons.json", function(text){
        var data = JSON.parse(text);

        for(var obj in data){
            data[obj].forEach(function(reason){
                reasons.push(reason.toString());
            });
        }

        newReason();
    });
}

init();