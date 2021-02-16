//HAND FOR TEAMS
var doHand = false;
var doAnnoyingHand = false;
var handID = "NULL";
var isRaised = false;

function shouldDoHand(){ return doHand; };

function getHandID(){ return handID; };

function doHand(){
    if(!shouldDoHand()){
        return;
    }
    if(!$(getHandID()).hasClass("is-hand-raised")){
        $("#raise-hand-button").click();
    }
}

function annoyingHand(){
   if(!doAnnoyingHand){
        return;
    }
    $("#raise-hand-button").click();
}