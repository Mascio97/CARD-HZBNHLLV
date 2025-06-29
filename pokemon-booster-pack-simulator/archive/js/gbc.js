function newPackSound() {
    var newPackSound = new Audio("../../music/29 Get Booster Pack.mp3")
    if (toggleSound === 1) {
        newPackSound.play();
    }
}

function easterEgg(){
    if (cardCount === 208) {
        alert("Congratulations! You collected every card!");

        //Creates button to unlock promos when all normal cards are collected
        var promotionalButton = document.createElement("button");
        var buttonText = document.createTextNode("BONUS!");
        promotionalButton.appendChild(buttonText);
        document.body.appendChild(promotionalButton);
        span = document.getElementById("promotionalButtonLocation");
        span.appendChild(promotionalButton);

        //Adds unlockPromotionalCards function to button just created
        promotionalButton.setAttribute("onclick", "unlockPromotionalCards();");
        promotionalButton.id="promotionalButton";
        promotionalButton.scrollIntoView();
    }
}

//Bonus for collecting all cards in gbc page
function unlockPromotionalCards() {
    var top = document.getElementById("topBarMiddle")
    top.scrollIntoView();
    pauseMusic()
    var unlockMusic = new Audio("../../music/25 Win!.mp3")
    unlockMusic.play();
    document.getElementById("hidden1").id = "promotional_div";
    document.getElementById("hidden2").id = "promotional_logo";
    var hidden = document.getElementsByTagName("p");
    for (i = 0; i < hidden.length; ++i) {
        hidden[i].className = "promotionalCards"
        } 
}

let cardCount = 0

function increaseCardCount() {
    ++cardCount;
    document.getElementById("cardCount").innerHTML = "Cards Pulled: " + cardCount + "/208";
    easterEgg();
}

let packCount = 0;

function increasePacksGenerated() {
    ++packCount;
    var element = document.getElementById("packCount");
    element.innerHTML = "Packs Generated: " + packCount;
}

let toggleSound = 1

function soundControl() {
    if (toggleSound === 1) {
        toggleSound = 0;
        document.getElementById("soundControl").innerHTML = "BOOSTER PACK SOUND: OFF"
    } else {
        toggleSound = 1;
        document.getElementById("soundControl").innerHTML = "BOOSTER PACK SOUND: ON"
    }
}

let cardOrderGameBoy = [
    'currentCard1', 
    'currentCard2', 
    'currentCard3', 
    'currentCard4', 
    'currentCard5', 
    'currentCard6', 
    'currentCard7', 
    'currentCard8', 
    'currentCard9',
    'currentCard10'];

let newCardOrderGameBoy = [
    'titlescreen.gif',
    'titlescreen.gif',
    'titlescreen.gif',
    'titlescreen.gif',
    'titlescreen.gif',
    'titlescreen.gif',
    'titlescreen.gif',
    'titlescreen.gif',
    'titlescreen.gif',
    'titlescreen.gif']

//Enables random pack button
function randomGameBoyPack() {
    randomSet = Math.floor(Math.random()*5 + 1);
    switch(randomSet) {
        case 1:
            newPackColosseum();
            break;
        case 2:
            newPackEvolution();
            break;
        case 3:
            newPackMystery();
            break;
        case 4:
            newPackLaboratory();
            break;
    }
}

let currentSet = 0

function showCard() {
    identifySet = arguments[0].slice(0, 1);
    newImage = arguments[0] + ".png";
    if (document.getElementById(arguments[0]).className === "collected") {
        switch(identifySet) {
            case "A":
                newImage = "../../images/gbc/colosseum/" + newImage;
                document.getElementById("screen").src = newImage;
                break;
            case "B":
                newImage = "../../images/gbc/evolution/" + newImage;
                document.getElementById("screen").src = newImage;
                break;
            case "C":
                newImage = "../../images/gbc/mystery/" + newImage;
                document.getElementById("screen").src = newImage;
                break;
            case "D":
                newImage = "../../images/gbc/laboratory/" + newImage;
                document.getElementById("screen").src = newImage;
                break;
            case "E":
                newImage = "../../images/gbc/colosseum/" + newImage;
                document.getElementById("screen").src = newImage;
                break;
        }
    }
    if (document.getElementById(arguments[0]).className === "promotionalCards") {
        newImage = "../../images/gbc/promotional/" + newImage;
        document.getElementById("screen").src = newImage;
    }
}

let lastPulledCard = 11

//Enables d-pad on game boy color
function goUp() {
    if (lastPulledCard > 0) {
        --lastPulledCard;
        switch(lastPulledCard) {
            case 0 : 
                changeScreen1();
                break;
            case 1 : 
                changeScreen2();
                break;
            case 2 : 
                changeScreen3();
                break;
            case 3 : 
                changeScreen4();
                break;
            case 4 : 
                changeScreen5();
                break;
            case 5 : 
                changeScreen6();
                break;
            case 6 : 
                changeScreen7();
                break;
            case 7 : 
                changeScreen8();
                break;
            case 8 : 
                changeScreen9();
                break;
            case 9 : 
                changeScreen10();
                break;
        }
    }
}

function goLeft() {
    if (lastPulledCard > 0) {
        --lastPulledCard;
        switch(lastPulledCard) {
            case 0 : 
                changeScreen1();
                break;
            case 1 : 
                changeScreen2();
                break;
            case 2 : 
                changeScreen3();
                break;
            case 3 : 
                changeScreen4();
                break;
            case 4 : 
                changeScreen5();
                break;
            case 5 : 
                changeScreen6();
                break;
            case 6 : 
                changeScreen7();
                break;
            case 7 : 
                changeScreen8();
                break;
            case 8 : 
                changeScreen9();
                break;
            case 9 : 
                changeScreen10();
                break;
        }
    }
}

function goDown() {
    if (lastPulledCard < 9) {
        ++lastPulledCard;
        switch(lastPulledCard) {
            case 0 : 
                changeScreen1();
                break;
            case 1 : 
                changeScreen2();
                break;
            case 2 : 
                changeScreen3();
                break;
            case 3 : 
                changeScreen4();
                break;
            case 4 : 
                changeScreen5();
                break;
            case 5 : 
                changeScreen6();
                break;
            case 6 : 
                changeScreen7();
                break;
            case 7 : 
                changeScreen8();
                break;
            case 8 : 
                changeScreen9();
                break;
            case 9 : 
                changeScreen10();
                break;
        }
    }
}

function goRight() {
    if (lastPulledCard < 9) {
        ++lastPulledCard;
        switch(lastPulledCard) {
            case 0 : 
                changeScreen1();
                break;
            case 1 : 
                changeScreen2();
                break;
            case 2 : 
                changeScreen3();
                break;
            case 3 : 
                changeScreen4();
                break;
            case 4 : 
                changeScreen5();
                break;
            case 5 : 
                changeScreen6();
                break;
            case 6 : 
                changeScreen7();
                break;
            case 7 : 
                changeScreen8();
                break;
            case 8 : 
                changeScreen9();
                break;
            case 9 : 
                changeScreen10();
                break;
        }
    }
}

// Adapted from https://stackoverflow.com/questions/27368778/how-to-toggle-audio-play-pause-with-one-button-or-link

var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");
var audio3 = document.getElementById("audio3");
var audio4 = document.getElementById("audio4");

let currentAudio = 0

function playMusic() {
  pauseMusic();
    if (currentAudio > -1 && currentAudio < 4){
      ++currentAudio;
  } else {
      currentAudio = 1;
  }
  switch(currentAudio) {
      case 1:
        audio1.play();
        break;
    case 2:
        audio2.play();
        break;
    case 3: 
        audio3.play();
        break;
    case 4: 
        audio4.play();
        break;
  }
};

function pauseMusic() {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
  };

function changeScreen1() {
    lastPulledCard = 0;
    document.getElementById("screen").src = newCardOrderGameBoy[0];
    element = newCardOrderGameBoy[0];
    cutElement = element.slice(0, -4);
    switch(currentSet) {
        case 1: 
            cutElement = cutElement.slice(27);
            newId = document.getElementById(cutElement);
            if (newId.className != "collected") {
                newId.className = "collected";
                increaseCardCount();
                return;
            }
            break;
        case 2:
            cutElement = cutElement.slice(27);
            newId = document.getElementById(cutElement);
            if (newId.className != "collected") {
                newId.className = "collected";
                increaseCardCount();
                return;
            }
            break;
        case 3:
            if (element.charAt(17) === "m") {
                cutElement = cutElement.slice(25);
                newId = document.getElementById(cutElement);
                if (newId.className != "collected") {
                    newId.className = "collected";
                    increaseCardCount();
                    return;
                }
            } else {
                cutElement = cutElement.slice(27);
                newId = document.getElementById(cutElement);
                if (newId.className != "collected") {
                    newId.className = "collected";
                    increaseCardCount();
                    return;
                }
            }
            break;
        case 4:
            cutElement = cutElement.slice(28);
            newId = document.getElementById(cutElement);
            if (newId.className != "collected") {
                newId.className = "collected";
                increaseCardCount();
                return;
            }
            break;
    }
}

function changeScreen2() {
    lastPulledCard = 1;
    document.getElementById("screen").src = newCardOrderGameBoy[1];
    element = newCardOrderGameBoy[1];
    cutElement = element.slice(0, -4);
    switch(currentSet) {
        case 1: 
            cutElement = cutElement.slice(27);
            newId = document.getElementById(cutElement);
            if (newId.className != "collected") {
                newId.className = "collected";
                increaseCardCount();
                return;
            }
            break;
        case 2:
            cutElement = cutElement.slice(27);
            newId = document.getElementById(cutElement);
            if (newId.className != "collected") {
                newId.className = "collected";
                increaseCardCount();
                return;
            }
            break;
        case 3:
            if (element.charAt(17) === "m") {
                cutElement = cutElement.slice(25);
                newId = document.getElementById(cutElement);
                if (newId.className != "collected") {
                    newId.className = "collected";
                    increaseCardCount();
                    return;
                }
            } else {
                cutElement = cutElement.slice(27);
                newId = document.getElementById(cutElement);
                if (newId.className != "collected") {
                    newId.className = "collected";
                    increaseCardCount();
                    return;
                }
            }
            break;
        case 4:
            cutElement = cutElement.slice(28);
            newId = document.getElementById(cutElement);
            if (newId.className != "collected") {
                newId.className = "collected";
                increaseCardCount();
                return;
            }
            break;
    }
}

function changeScreen3() {
    lastPulledCard = 2;
    document.getElementById("screen").src = newCardOrderGameBoy[2];
    element = newCardOrderGameBoy[2];
    cutElement = element.slice(0, -4);
    switch(currentSet) {
        case 1: 
            cutElement = cutElement.slice(27);
            newId = document.getElementById(cutElement);
            if (newId.className != "collected") {
                newId.className = "collected";
                increaseCardCount();
                return;
            }
            break;
        case 2:
            cutElement = cutElement.slice(27);
            newId = document.getElementById(cutElement);
            if (newId.className != "collected") {
                newId.className = "collected";
                increaseCardCount();
                return;
            }
            break;
        case 3:
            if (element.charAt(17) === "m") {
                cutElement = cutElement.slice(25);
                newId = document.getElementById(cutElement);
                if (newId.className != "collected") {
                    newId.className = "collected";
                    increaseCardCount();
                    return;
                }
            } else {
                cutElement = cutElement.slice(27);
                newId = document.getElementById(cutElement);
                if (newId.className != "collected") {
                    newId.className = "collected";
                    increaseCardCount();
                    return;
                }
            }
            break;
        case 4:
            cutElement = cutElement.slice(28);
            newId = document.getElementById(cutElement);
            if (newId.className != "collected") {
                newId.className = "collected";
                increaseCardCount();
                return;
            }
            break;
    }
}

function changeScreen4() {
    lastPulledCard = 3;
    document.getElementById("screen").src = newCardOrderGameBoy[3];
    element = newCardOrderGameBoy[3];
    cutElement = element.slice(0, -4);
    switch(currentSet) {
        case 1: 
            cutElement = cutElement.slice(27);
            newId = document.getElementById(cutElement);
            if (newId.className != "collected") {
                newId.className = "collected";
                increaseCardCount();
                return;
            }
            break;
        case 2:
            cutElement = cutElement.slice(27);
            newId = document.getElementById(cutElement);
            if (newId.className != "collected") {
                newId.className = "collected";
                increaseCardCount();
                return;
            }
            break;
        case 3:
            if (element.charAt(17) === "m") {
                cutElement = cutElement.slice(25);
                newId = document.getElementById(cutElement);
                if (newId.className != "collected") {
                    newId.className = "collected";
                    increaseCardCount();
                    return;
                }
            } else {
                cutElement = cutElement.slice(27);
                newId = document.getElementById(cutElement);
                if (newId.className != "collected") {
                    newId.className = "collected";
                    increaseCardCount();
                    return;
                }
            }
            break;
        case 4:
            cutElement = cutElement.slice(28);
            newId = document.getElementById(cutElement);
            if (newId.className != "collected") {
                newId.className = "collected";
                increaseCardCount();
                return;
            }
            break;
    }
}

function changeScreen5() {
    lastPulledCard = 4;
    document.getElementById("screen").src = newCardOrderGameBoy[4];
    element = newCardOrderGameBoy[4];
    cutElement = element.slice(0, -4);
    switch(currentSet) {
        case 1: 
            cutElement = cutElement.slice(27);
            newId = document.getElementById(cutElement);
            if (newId.className != "collected") {
                newId.className = "collected";
                increaseCardCount();
                return;
            }
            break;
        case 2:
            cutElement = cutElement.slice(27);
            newId = document.getElementById(cutElement);
            if (newId.className != "collected") {
                newId.className = "collected";
                increaseCardCount();
                return;
            }
            break;
        case 3:
            if (element.charAt(17) === "m") {
                cutElement = cutElement.slice(25);
                newId = document.getElementById(cutElement);
                if (newId.className != "collected") {
                    newId.className = "collected";
                    increaseCardCount();
                    return;
                }
            } else {
                cutElement = cutElement.slice(27);
                newId = document.getElementById(cutElement);
                if (newId.className != "collected") {
                    newId.className = "collected";
                    increaseCardCount();
                    return;
                }
            }
            break;
        case 4:
            cutElement = cutElement.slice(28);
            newId = document.getElementById(cutElement);
            if (newId.className != "collected") {
                newId.className = "collected";
                increaseCardCount();
                return;
            }
            break;
    }
}

function changeScreen6() {
    lastPulledCard = 5;
    document.getElementById("screen").src = newCardOrderGameBoy[5];
    element = newCardOrderGameBoy[5];
    cutElement = element.slice(0, -4);
    switch(currentSet) {
        case 1: 
            cutElement = cutElement.slice(27);
            newId = document.getElementById(cutElement);
            if (newId.className != "collected") {
                newId.className = "collected";
                increaseCardCount();
                return;
            }
            break;
        case 2:
            cutElement = cutElement.slice(27);
            newId = document.getElementById(cutElement);
            if (newId.className != "collected") {
                newId.className = "collected";
                increaseCardCount();
                return;
            }
            break;
        case 3:
            if (element.charAt(17) === "m") {
                cutElement = cutElement.slice(25);
                newId = document.getElementById(cutElement);
                if (newId.className != "collected") {
                    newId.className = "collected";
                    increaseCardCount();
                    return;
                }
            } else {
                cutElement = cutElement.slice(27);
                newId = document.getElementById(cutElement);
                if (newId.className != "collected") {
                    newId.className = "collected";
                    increaseCardCount();
                    return;
                }
            }
            break;
        case 4:
            cutElement = cutElement.slice(28);
            newId = document.getElementById(cutElement);
            if (newId.className != "collected") {
                newId.className = "collected";
                increaseCardCount();
                return;
            }
            break;
    }
}

function changeScreen7() {
    lastPulledCard = 6;
    document.getElementById("screen").src = newCardOrderGameBoy[6];
    element = newCardOrderGameBoy[6];
    cutElement = element.slice(0, -4);
    switch(currentSet) {
        case 1: 
            cutElement = cutElement.slice(27);
            newId = document.getElementById(cutElement);
            if (newId.className != "collected") {
                newId.className = "collected";
                increaseCardCount();
                return;
            }
            break;
        case 2:
            cutElement = cutElement.slice(27);
            newId = document.getElementById(cutElement);
            if (newId.className != "collected") {
                newId.className = "collected";
                increaseCardCount();
                return;
            }
            break;
        case 3:
            if (element.charAt(17) === "m") {
                cutElement = cutElement.slice(25);
                newId = document.getElementById(cutElement);
                if (newId.className != "collected") {
                    newId.className = "collected";
                    increaseCardCount();
                    return;
                }
            } else {
                cutElement = cutElement.slice(27);
                newId = document.getElementById(cutElement);
                if (newId.className != "collected") {
                    newId.className = "collected";
                    increaseCardCount();
                    return;
                }
            }
            break;
        case 4:
            cutElement = cutElement.slice(28);
            newId = document.getElementById(cutElement);
            if (newId.className != "collected") {
                newId.className = "collected";
                increaseCardCount();
                return;
            }
            break;
    }
}

function changeScreen8() {
    lastPulledCard = 7;
    document.getElementById("screen").src = newCardOrderGameBoy[7];
    element = newCardOrderGameBoy[7];
    cutElement = element.slice(0, -4);
    switch(currentSet) {
        case 1: 
            cutElement = cutElement.slice(27);
            newId = document.getElementById(cutElement);
            if (newId.className != "collected") {
                newId.className = "collected";
                increaseCardCount();
                return;
            }
            break;
        case 2:
            cutElement = cutElement.slice(27);
            newId = document.getElementById(cutElement);
            if (newId.className != "collected") {
                newId.className = "collected";
                increaseCardCount();
                return;
            }
            break;
        case 3:
            if (element.charAt(17) === "m") {
                cutElement = cutElement.slice(25);
                newId = document.getElementById(cutElement);
                if (newId.className != "collected") {
                    newId.className = "collected";
                    increaseCardCount();
                    return;
                }
            } else {
                cutElement = cutElement.slice(27);
                newId = document.getElementById(cutElement);
                if (newId.className != "collected") {
                    newId.className = "collected";
                    increaseCardCount();
                    return;
                }
            }
            break;
        case 4:
            cutElement = cutElement.slice(28);
            newId = document.getElementById(cutElement);
            if (newId.className != "collected") {
                newId.className = "collected";
                increaseCardCount();
                return;
            }
            break;
    }
}

function changeScreen9() {
    lastPulledCard = 8;
    document.getElementById("screen").src = newCardOrderGameBoy[8];
    element = newCardOrderGameBoy[8];
    cutElement = element.slice(0, -4);
    switch(currentSet) {
        case 1: 
            cutElement = cutElement.slice(27);
            newId = document.getElementById(cutElement);
            if (newId.className != "collected") {
                newId.className = "collected";
                increaseCardCount();
                return;
            }
            break;
        case 2:
            cutElement = cutElement.slice(27);
            newId = document.getElementById(cutElement);
            if (newId.className != "collected") {
                newId.className = "collected";
                increaseCardCount();
                return;
            }
            break;
        case 3:
            if (element.charAt(17) === "m") {
                cutElement = cutElement.slice(25);
                newId = document.getElementById(cutElement);
                if (newId.className != "collected") {
                    newId.className = "collected";
                    increaseCardCount();
                    return;
                }
            } else {
                cutElement = cutElement.slice(27);
                newId = document.getElementById(cutElement);
                if (newId.className != "collected") {
                    newId.className = "collected";
                    increaseCardCount();
                    return;
                }
            }
            break;
        case 4:
            cutElement = cutElement.slice(28);
            newId = document.getElementById(cutElement);
            if (newId.className != "collected") {
                newId.className = "collected";
                increaseCardCount();
                return;
            }
            break;
    }
}

function changeScreen10() {
    lastPulledCard = 9;
    document.getElementById("screen").src = newCardOrderGameBoy[9];
    element = newCardOrderGameBoy[9];
    cutElement = element.slice(0, -4);
    switch(currentSet) {
        case 1: 
            cutElement = cutElement.slice(27);
            newId = document.getElementById(cutElement);
            if (newId.className != "collected") {
                newId.className = "collected";
                increaseCardCount();
                return;
            }
            break;
        case 2:
            cutElement = cutElement.slice(27);
            newId = document.getElementById(cutElement);
            if (newId.className != "collected") {
                newId.className = "collected";
                increaseCardCount();
                return;
            }
            break;
        case 3:
            if (element.charAt(17) === "m") {
                cutElement = cutElement.slice(25);
                newId = document.getElementById(cutElement);
                if (newId.className != "collected") {
                    newId.className = "collected";
                    increaseCardCount();
                    return;
                }
            } else {
                cutElement = cutElement.slice(27);
                newId = document.getElementById(cutElement);
                if (newId.className != "collected") {
                    newId.className = "collected";
                    increaseCardCount();
                    return;
                }
            }
            break;
        case 4:
            cutElement = cutElement.slice(28);
            newId = document.getElementById(cutElement);
            if (newId.className != "collected") {
                newId.className = "collected";
                increaseCardCount();
                return;
            }
            break;
    }
}

function newPackColosseum() {
    //Sets up currentSet variable, which enables the changeScreen functions
    currentSet = 1;

    //Resets D-Pad button functions
    lastPulledCard = -1;
    
    //Erases global array of new cards
    newCardOrderGameBoy = [];

    //Ticks up pack counter
    increasePacksGenerated();

    //Changes title screen
    document.getElementById("screen").src="../../images/gbc/packs/newPackColosseum.png";

    //Picks a rare (no distinction between regular and holo)
    let numOfRares = colosseum[0].length;
    let randomRare = Math.floor(Math.random()*numOfRares);
    let newRare = colosseum[0][randomRare];
    let cardSlot1 = cardOrderGameBoy[0];

    //Pushes new rare image source to global array
    newCardOrderGameBoy.push(newRare);

    //Cuts off ".png" from end of picked string
    let newRareString = newRare.slice(0, -4);

    //Cuts off "/colosseum" from beginning of string
    newRareString = newRareString.slice(27);

    //Prints cut string to console
    document.getElementById(cardSlot1).innerHTML = newRareString;

    //Same process, for 3 uncommons
    let numOfUncommons = colosseum[1].length;
    let randomUncommon1 = Math.floor(Math.random()*numOfUncommons);
    let randomUncommon2 = Math.floor(Math.random()*numOfUncommons);
    let randomUncommon3 = Math.floor(Math.random()*numOfUncommons);
    let newUncommon1 = colosseum[1][randomUncommon1];
    let newUncommon2 = colosseum[1][randomUncommon2];
    let newUncommon3 = colosseum[1][randomUncommon3];
    let cardSlot2 = cardOrderGameBoy[1];
    let cardSlot3 = cardOrderGameBoy[2];
    let cardSlot4 = cardOrderGameBoy[3];
    newCardOrderGameBoy.push(newUncommon1);
    newCardOrderGameBoy.push(newUncommon2);
    newCardOrderGameBoy.push(newUncommon3);
    let newUncommonString1 = newUncommon1.slice(0, -4);
    let newUncommonString2 = newUncommon2.slice(0, -4);
    let newUncommonString3 = newUncommon3.slice(0, -4);
    newUncommonString1 = newUncommonString1.slice(27);
    newUncommonString2 = newUncommonString2.slice(27);
    newUncommonString3 = newUncommonString3.slice(27);
    document.getElementById(cardSlot2).innerHTML = newUncommonString1;
    document.getElementById(cardSlot3).innerHTML = newUncommonString2;
    document.getElementById(cardSlot4).innerHTML = newUncommonString3;

    //Prevents duplicate uncommons by repeating function if duplicate is found
    let currentUncommons = [newUncommon1, newUncommon2, newUncommon3]
    for (let i = 0; i < 3; i++) {
        let j = 1 + i
            for (j; j < currentUncommons.length; j++) {
                if (currentUncommons[i] === currentUncommons[j]) {
                    --packCount;
                    newPackColosseum();
                    return;
            }
        }
    }

    //Same process, for 5 uncommons
    let numOfCommons = colosseum[2].length;
    let randomCommon1 = Math.floor(Math.random()*numOfCommons);
    let randomCommon2 = Math.floor(Math.random()*numOfCommons);
    let randomCommon3 = Math.floor(Math.random()*numOfCommons);
    let randomCommon4 = Math.floor(Math.random()*numOfCommons);
    let randomCommon5 = Math.floor(Math.random()*numOfCommons);
    let newCommon1 = colosseum[2][randomCommon1];
    let newCommon2 = colosseum[2][randomCommon2];
    let newCommon3 = colosseum[2][randomCommon3];
    let newCommon4 = colosseum[2][randomCommon4];
    let newCommon5 = colosseum[2][randomCommon5];
    let cardSlot5 = cardOrderGameBoy[4];
    let cardSlot6 = cardOrderGameBoy[5];
    let cardSlot7 = cardOrderGameBoy[6];
    let cardSlot8 = cardOrderGameBoy[7];
    let cardSlot9 = cardOrderGameBoy[8];
    newCardOrderGameBoy.push(newCommon1);
    newCardOrderGameBoy.push(newCommon2);
    newCardOrderGameBoy.push(newCommon3);
    newCardOrderGameBoy.push(newCommon4);
    newCardOrderGameBoy.push(newCommon5);
    let newCommonString1 = newCommon1.slice(0, -4);
    let newCommonString2 = newCommon2.slice(0, -4);
    let newCommonString3 = newCommon3.slice(0, -4);
    let newCommonString4 = newCommon4.slice(0, -4);
    let newCommonString5 = newCommon5.slice(0, -4);
    newCommonString1 = newCommonString1.slice(27);
    newCommonString2 = newCommonString2.slice(27);
    newCommonString3 = newCommonString3.slice(27);
    newCommonString4 = newCommonString4.slice(27);
    newCommonString5 = newCommonString5.slice(27);
    document.getElementById(cardSlot5).innerHTML = newCommonString1;
    document.getElementById(cardSlot6).innerHTML = newCommonString2;
    document.getElementById(cardSlot7).innerHTML = newCommonString3;
    document.getElementById(cardSlot8).innerHTML = newCommonString4;
    document.getElementById(cardSlot9).innerHTML = newCommonString5;
    
    //Prevents duplicate commons
    let currentCommons = [newCommon1, newCommon2, newCommon3, newCommon4, newCommon5]
    for (let i = 0; i < 5; i++) {
        let j = 1 + i
            for (j; j < currentCommons.length; j++) {
                if (currentCommons[i] === currentCommons[j]) {
                    --packCount;
                    newPackColosseum();
                    return;
            }
        }
    }

    //Chooses 1 energy
    let numOfEnergy = colosseum[3].length;
    let randomEnergy = Math.floor(Math.random()*numOfEnergy);
    let newEnergy = colosseum[3][randomEnergy];
    let cardSlot10 = cardOrderGameBoy[9];
    newCardOrderGameBoy.push(newEnergy);
    let newEnergyString = newEnergy.slice(0, -4);
    newEnergyString = newEnergyString.slice(27);
    document.getElementById(cardSlot10).innerHTML = newEnergyString;
}

function newPackEvolution() {
    currentSet = 2;
    lastPulledCard = -1;
    newCardOrderGameBoy = [];
    increasePacksGenerated();
    document.getElementById("screen").src="../../images/gbc/packs/newPackEvolution.png";

    //Picks a rare (no distinction between regular and holo)
    let numOfRares = evolution[0].length;
    let randomRare = Math.floor(Math.random()*numOfRares);
    let newRare = evolution[0][randomRare];
    let cardSlot1 = cardOrderGameBoy[0];
    newCardOrderGameBoy.push(newRare);
    let newRareString = newRare.slice(0, -4);
    newRareString = newRareString.slice(27);
    document.getElementById(cardSlot1).innerHTML = newRareString;

    //Same process, for 3 uncommons
    let numOfUncommons = evolution[1].length;
    let randomUncommon1 = Math.floor(Math.random()*numOfUncommons);
    let randomUncommon2 = Math.floor(Math.random()*numOfUncommons);
    let randomUncommon3 = Math.floor(Math.random()*numOfUncommons);
    let newUncommon1 = evolution[1][randomUncommon1];
    let newUncommon2 = evolution[1][randomUncommon2];
    let newUncommon3 = evolution[1][randomUncommon3];
    let cardSlot2 = cardOrderGameBoy[1];
    let cardSlot3 = cardOrderGameBoy[2];
    let cardSlot4 = cardOrderGameBoy[3];
    newCardOrderGameBoy.push(newUncommon1);
    newCardOrderGameBoy.push(newUncommon2);
    newCardOrderGameBoy.push(newUncommon3);
    let newUncommonString1 = newUncommon1.slice(0, -4);
    let newUncommonString2 = newUncommon2.slice(0, -4);
    let newUncommonString3 = newUncommon3.slice(0, -4);
    newUncommonString1 = newUncommonString1.slice(27);
    newUncommonString2 = newUncommonString2.slice(27);
    newUncommonString3 = newUncommonString3.slice(27);
    document.getElementById(cardSlot2).innerHTML = newUncommonString1;
    document.getElementById(cardSlot3).innerHTML = newUncommonString2;
    document.getElementById(cardSlot4).innerHTML = newUncommonString3;

    //Prevents duplicate uncommons by repeating function if duplicate is found
    let currentUncommons = [newUncommon1, newUncommon2, newUncommon3]
    for (let i = 0; i < 3; i++) {
        let j = 1 + i
            for (j; j < currentUncommons.length; j++) {
                if (currentUncommons[i] === currentUncommons[j]) {
                    --packCount;
                    newPackEvolution();
                    return;
            }
        }
    }

    //Same process, for 5 uncommons
    let numOfCommons = evolution[2].length;
    let randomCommon1 = Math.floor(Math.random()*numOfCommons);
    let randomCommon2 = Math.floor(Math.random()*numOfCommons);
    let randomCommon3 = Math.floor(Math.random()*numOfCommons);
    let randomCommon4 = Math.floor(Math.random()*numOfCommons);
    let randomCommon5 = Math.floor(Math.random()*numOfCommons);
    let newCommon1 = evolution[2][randomCommon1];
    let newCommon2 = evolution[2][randomCommon2];
    let newCommon3 = evolution[2][randomCommon3];
    let newCommon4 = evolution[2][randomCommon4];
    let newCommon5 = evolution[2][randomCommon5];
    let cardSlot5 = cardOrderGameBoy[4];
    let cardSlot6 = cardOrderGameBoy[5];
    let cardSlot7 = cardOrderGameBoy[6];
    let cardSlot8 = cardOrderGameBoy[7];
    let cardSlot9 = cardOrderGameBoy[8];
    newCardOrderGameBoy.push(newCommon1);
    newCardOrderGameBoy.push(newCommon2);
    newCardOrderGameBoy.push(newCommon3);
    newCardOrderGameBoy.push(newCommon4);
    newCardOrderGameBoy.push(newCommon5);
    let newCommonString1 = newCommon1.slice(0, -4);
    let newCommonString2 = newCommon2.slice(0, -4);
    let newCommonString3 = newCommon3.slice(0, -4);
    let newCommonString4 = newCommon4.slice(0, -4);
    let newCommonString5 = newCommon5.slice(0, -4);
    newCommonString1 = newCommonString1.slice(27);
    newCommonString2 = newCommonString2.slice(27);
    newCommonString3 = newCommonString3.slice(27);
    newCommonString4 = newCommonString4.slice(27);
    newCommonString5 = newCommonString5.slice(27);
    document.getElementById(cardSlot5).innerHTML = newCommonString1;
    document.getElementById(cardSlot6).innerHTML = newCommonString2;
    document.getElementById(cardSlot7).innerHTML = newCommonString3;
    document.getElementById(cardSlot8).innerHTML = newCommonString4;
    document.getElementById(cardSlot9).innerHTML = newCommonString5;
    
    //Prevents duplicate commons
    let currentCommons = [newCommon1, newCommon2, newCommon3, newCommon4, newCommon5]
    for (let i = 0; i < 5; i++) {
        let j = 1 + i
            for (j; j < currentCommons.length; j++) {
                if (currentCommons[i] === currentCommons[j]) {
                    --packCount;
                    newPackEvolution();
                    return;
            }
        }
    }

    //Chooses 1 energy from colosseum array
    let numOfEnergy = colosseum[3].length;
    let randomEnergy = Math.floor(Math.random()*numOfEnergy);
    let newEnergy = colosseum[3][randomEnergy];
    let cardSlot10 = cardOrderGameBoy[9];
    newCardOrderGameBoy.push(newEnergy);
    let newEnergyString = newEnergy.slice(0, -4);
    newEnergyString = newEnergyString.slice(27);
    document.getElementById(cardSlot10).innerHTML = newEnergyString;
}

//Creates a method within the Array object to shuffle an array via the Fisher-Yates shuffle
//Thanks to https://www.youtube.com/watch?v=tLxBwSL3lPQ&list=LLW-9kdTXKEKCyK43u9SqarQ&index=6&t=0s for explaining this so well
//Only used for the laboratory pack to include the randomized energy
Array.prototype.shuffle = function() {
    let i = this.length, j, temp;
    while(--i > 0) {
        j = Math.floor(Math.random()* (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
    return this;
}

function newPackMystery() {
    currentSet = 3;
    lastPulledCard = -1;
    newCardOrderGameBoy = [];
    increasePacksGenerated();
    document.getElementById("screen").src="../../images/gbc/packs/newPackMystery.png";

    //Picks a rare (no distinction between regular and holo)
    let numOfRares = mystery[0].length;
    let randomRare = Math.floor(Math.random()*numOfRares);
    let newRare = mystery[0][randomRare];
    let cardSlot1 = cardOrderGameBoy[0];
    newCardOrderGameBoy.push(newRare);
    let newRareString = newRare.slice(0, -4);
    newRareString = newRareString.slice(25);
    document.getElementById(cardSlot1).innerHTML = newRareString;    
    
    //Same process, for 3 uncommons
    let numOfUncommons = mystery[1].length;
    let randomUncommon1 = Math.floor(Math.random()*numOfUncommons);
    let randomUncommon2 = Math.floor(Math.random()*numOfUncommons);
    let randomUncommon3 = Math.floor(Math.random()*numOfUncommons);
    let newUncommon1 = mystery[1][randomUncommon1];
    let newUncommon2 = mystery[1][randomUncommon2];
    let newUncommon3 = mystery[1][randomUncommon3];
    let cardSlot2 = cardOrderGameBoy[1];
    let cardSlot3 = cardOrderGameBoy[2];
    let cardSlot4 = cardOrderGameBoy[3];
    newCardOrderGameBoy.push(newUncommon1);
    newCardOrderGameBoy.push(newUncommon2);
    newCardOrderGameBoy.push(newUncommon3);
    let newUncommonString1 = newUncommon1.slice(0, -4);
    let newUncommonString2 = newUncommon2.slice(0, -4);
    let newUncommonString3 = newUncommon3.slice(0, -4);
    newUncommonString1 = newUncommonString1.slice(25);
    newUncommonString2 = newUncommonString2.slice(25);
    newUncommonString3 = newUncommonString3.slice(25);
    document.getElementById(cardSlot2).innerHTML = newUncommonString1;
    document.getElementById(cardSlot3).innerHTML = newUncommonString2;
    document.getElementById(cardSlot4).innerHTML = newUncommonString3;

    //Prevents duplicate uncommons by repeating function if duplicate is found
    let currentUncommons = [newUncommon1, newUncommon2, newUncommon3]
    for (let i = 0; i < 3; i++) {
        let j = 1 + i
            for (j; j < currentUncommons.length; j++) {
                if (currentUncommons[i] === currentUncommons[j]) {
                    --packCount;
                    newPackMystery();
                    return;
            }
        }
    }

    //This set is unique insofar as its energy placement is randomized, and optional
    //Hence the shuffle method and the branch for a possible no energy pull

    //Gives 80% chance of an energy; otherwise, another common is chosen
    let chanceOfEnergy = Math.floor(Math.random()*9)
    if (chanceOfEnergy > 7) {
        
        let numOfCommons = mystery[2].length;
        let randomCommon1 = Math.floor(Math.random()*numOfCommons);
        let randomCommon2 = Math.floor(Math.random()*numOfCommons);
        let randomCommon3 = Math.floor(Math.random()*numOfCommons);
        let randomCommon4 = Math.floor(Math.random()*numOfCommons);
        let randomCommon5 = Math.floor(Math.random()*numOfCommons);
        let randomCommon6 = Math.floor(Math.random()*numOfCommons);
        let newCommon1 = mystery[2][randomCommon1];
        let newCommon2 = mystery[2][randomCommon2];
        let newCommon3 = mystery[2][randomCommon3];
        let newCommon4 = mystery[2][randomCommon4];
        let newCommon5 = mystery[2][randomCommon5];
        let newCommon6 = mystery[2][randomCommon6];

        let newCommonsArray = [
            newCommon1,
            newCommon2,
            newCommon3,
            newCommon4,
            newCommon5,
            newCommon6]

        newCommonsArray.shuffle();

        newCardOrderGameBoy.push(newCommonsArray[0]);
        newCardOrderGameBoy.push(newCommonsArray[1]);
        newCardOrderGameBoy.push(newCommonsArray[2]);
        newCardOrderGameBoy.push(newCommonsArray[3]);
        newCardOrderGameBoy.push(newCommonsArray[4]);
        newCardOrderGameBoy.push(newCommonsArray[5]);
        
        let newCommonString1 = newCommonsArray[0].slice(0, -4);
        let newCommonString2 = newCommonsArray[1].slice(0, -4);
        let newCommonString3 = newCommonsArray[2].slice(0, -4);
        let newCommonString4 = newCommonsArray[3].slice(0, -4);
        let newCommonString5 = newCommonsArray[4].slice(0, -4);
        let newCommonString6 = newCommonsArray[5].slice(0, -4);

        newCommonString1 = newCommonString1.slice(25);
        newCommonString2 = newCommonString2.slice(25);
        newCommonString3 = newCommonString3.slice(25);
        newCommonString4 = newCommonString4.slice(25);
        newCommonString5 = newCommonString5.slice(25);
        newCommonString6 = newCommonString6.slice(25);
    
        document.getElementById("currentCard5").innerHTML = newCommonString1;
        document.getElementById("currentCard6").innerHTML = newCommonString2;
        document.getElementById("currentCard7").innerHTML = newCommonString3;
        document.getElementById("currentCard8").innerHTML = newCommonString4;
        document.getElementById("currentCard9").innerHTML = newCommonString5;
        document.getElementById("currentCard10").innerHTML = newCommonString6;
    
        //Prevents duplicate commons for 6 commons
        let currentCommons = [newCommon1, newCommon2, newCommon3, newCommon4, newCommon5, newCommon6]
        for (let i = 0; i < 6; i++) {
            let j = 1 + i
                for (j; j < currentCommons.length; j++) {
                    if (currentCommons[i] === currentCommons[j]) {
                        --packCount;
                        newPackMystery();
                        return;
                }
            }
        }

    } else {

        //Chooses 5 commmons from mystery array and 1 energy from colosseum array
         
        let numOfCommons = mystery[2].length;
        let numOfEnergy = colosseum[3].length;

        let randomCommon1 = Math.floor(Math.random()*numOfCommons);
        let randomCommon2 = Math.floor(Math.random()*numOfCommons);
        let randomCommon3 = Math.floor(Math.random()*numOfCommons);
        let randomCommon4 = Math.floor(Math.random()*numOfCommons);
        let randomCommon5 = Math.floor(Math.random()*numOfCommons);
        let randomCommon6 = Math.floor(Math.random()*numOfEnergy);
        
        let newCommon1 = mystery[2][randomCommon1];
        let newCommon2 = mystery[2][randomCommon2];
        let newCommon3 = mystery[2][randomCommon3];
        let newCommon4 = mystery[2][randomCommon4];
        let newCommon5 = mystery[2][randomCommon5];
        let newCommon6 = colosseum[3][randomCommon6];

        let newCommonsArray = [
            newCommon1,
            newCommon2,
            newCommon3,
            newCommon4,
            newCommon5,
            newCommon6]

        newCommonsArray.shuffle();

        newCardOrderGameBoy.push(newCommonsArray[0]);
        newCardOrderGameBoy.push(newCommonsArray[1]);
        newCardOrderGameBoy.push(newCommonsArray[2]);
        newCardOrderGameBoy.push(newCommonsArray[3]);
        newCardOrderGameBoy.push(newCommonsArray[4]);
        newCardOrderGameBoy.push(newCommonsArray[5]);

        //Find way to slice the energy card differently with an if/else loop,
        //Since the energy card has been assimilated randomly into the array

        let newCommonString1 = newCommonsArray[0]
        let newCommonString2 = newCommonsArray[1]
        let newCommonString3 = newCommonsArray[2]
        let newCommonString4 = newCommonsArray[3]
        let newCommonString5 = newCommonsArray[4]
        let newCommonString6 = newCommonsArray[5]

        newCommonString1 = newCommonString1.slice(0, -4);
        newCommonString2 = newCommonString2.slice(0, -4);
        newCommonString3 = newCommonString3.slice(0, -4);
        newCommonString4 = newCommonString4.slice(0, -4);
        newCommonString5 = newCommonString5.slice(0, -4);
        newCommonString6 = newCommonString6.slice(0, -4);

        if (newCommonString1.charAt(17) === "m") {
            newCommonString1 = newCommonString1.slice(25);
        } else {
            newCommonString1 = newCommonString1.slice(27);
        }
        
        if (newCommonString2.charAt(17) === "m") {
            newCommonString2 = newCommonString2.slice(25);
        } else {
            newCommonString2 = newCommonString2.slice(27);
        }

        if (newCommonString3.charAt(17) === "m") {
            newCommonString3 = newCommonString3.slice(25);
        } else {
            newCommonString3 = newCommonString3.slice(27);
        }

        if (newCommonString4.charAt(17) === "m") {
            newCommonString4 = newCommonString4.slice(25);
        } else {
            newCommonString4 = newCommonString4.slice(27);
        }

        if (newCommonString5.charAt(17) === "m") {
            newCommonString5 = newCommonString5.slice(25);
        } else {
            newCommonString5 = newCommonString5.slice(27);
        }

        if (newCommonString6.charAt(17) === "m") {
            newCommonString6 = newCommonString6.slice(25);
        } else {
            newCommonString6 = newCommonString6.slice(27);
        }

        document.getElementById("currentCard5").innerHTML = newCommonString1;
        document.getElementById("currentCard6").innerHTML = newCommonString2;
        document.getElementById("currentCard7").innerHTML = newCommonString3;
        document.getElementById("currentCard8").innerHTML = newCommonString4;
        document.getElementById("currentCard9").innerHTML = newCommonString5;
        document.getElementById("currentCard10").innerHTML = newCommonString6;
    
        //Prevents duplicate commons for 5 commons
        let currentCommons = [newCommon1, newCommon2, newCommon3, newCommon4, newCommon5, newCommon6]
        for (let i = 0; i < 6; i++) {
            let j = 1 + i
                for (j; j < currentCommons.length; j++) {
                    if (currentCommons[i] === currentCommons[j]) {
                        --packCount;
                        newPackMystery();
                        return;
                }
            }
        }

    } 
}

function newPackLaboratory() {
    currentSet = 4;
    lastPulledCard = -1;
    newCardOrderGameBoy = [];
    increasePacksGenerated();
    document.getElementById("screen").src="../../images/gbc/packs/newPackLaboratory.png";

    //Picks a rare (no distinction between regular and holo)
    let numOfRares = laboratory[0].length;
    let randomRare = Math.floor(Math.random()*numOfRares);
    let newRare = laboratory[0][randomRare];
    let cardSlot1 = cardOrderGameBoy[0];
    newCardOrderGameBoy.push(newRare);
    let newRareString = newRare.slice(0, -4);
    newRareString = newRareString.slice(28);
    document.getElementById(cardSlot1).innerHTML = newRareString;

    //Same process, for 3 uncommons
    let numOfUncommons = laboratory[1].length;
    let randomUncommon1 = Math.floor(Math.random()*numOfUncommons);
    let randomUncommon2 = Math.floor(Math.random()*numOfUncommons);
    let randomUncommon3 = Math.floor(Math.random()*numOfUncommons);
    let newUncommon1 = laboratory[1][randomUncommon1];
    let newUncommon2 = laboratory[1][randomUncommon2];
    let newUncommon3 = laboratory[1][randomUncommon3];
    let cardSlot2 = cardOrderGameBoy[1];
    let cardSlot3 = cardOrderGameBoy[2];
    let cardSlot4 = cardOrderGameBoy[3];
    newCardOrderGameBoy.push(newUncommon1);
    newCardOrderGameBoy.push(newUncommon2);
    newCardOrderGameBoy.push(newUncommon3);
    let newUncommonString1 = newUncommon1.slice(0, -4);
    let newUncommonString2 = newUncommon2.slice(0, -4);
    let newUncommonString3 = newUncommon3.slice(0, -4);
    newUncommonString1 = newUncommonString1.slice(28);
    newUncommonString2 = newUncommonString2.slice(28);
    newUncommonString3 = newUncommonString3.slice(28);
    document.getElementById(cardSlot2).innerHTML = newUncommonString1;
    document.getElementById(cardSlot3).innerHTML = newUncommonString2;
    document.getElementById(cardSlot4).innerHTML = newUncommonString3;

    //Prevents duplicate uncommons by repeating function if duplicate is found
    let currentUncommons = [newUncommon1, newUncommon2, newUncommon3]
    for (let i = 0; i < 3; i++) {
        let j = 1 + i
            for (j; j < currentUncommons.length; j++) {
                if (currentUncommons[i] === currentUncommons[j]) {
                    --packCount;
                    newPackLaboratory();
                    return;
            }
        }
    }

    //Same process, for 5 uncommons
    let numOfCommons = laboratory[2].length;
    let randomCommon1 = Math.floor(Math.random()*numOfCommons);
    let randomCommon2 = Math.floor(Math.random()*numOfCommons);
    let randomCommon3 = Math.floor(Math.random()*numOfCommons);
    let randomCommon4 = Math.floor(Math.random()*numOfCommons);
    let randomCommon5 = Math.floor(Math.random()*numOfCommons);
    let randomCommon6 = Math.floor(Math.random()*numOfCommons);
    let newCommon1 = laboratory[2][randomCommon1];
    let newCommon2 = laboratory[2][randomCommon2];
    let newCommon3 = laboratory[2][randomCommon3];
    let newCommon4 = laboratory[2][randomCommon4];
    let newCommon5 = laboratory[2][randomCommon5];
    let newCommon6 = laboratory[2][randomCommon6];
    let cardSlot5 = cardOrderGameBoy[4];
    let cardSlot6 = cardOrderGameBoy[5];
    let cardSlot7 = cardOrderGameBoy[6];
    let cardSlot8 = cardOrderGameBoy[7];
    let cardSlot9 = cardOrderGameBoy[8];
    let cardSlot10 = cardOrderGameBoy[9];
    newCardOrderGameBoy.push(newCommon1);
    newCardOrderGameBoy.push(newCommon2);
    newCardOrderGameBoy.push(newCommon3);
    newCardOrderGameBoy.push(newCommon4);
    newCardOrderGameBoy.push(newCommon5);
    newCardOrderGameBoy.push(newCommon6);
    let newCommonString1 = newCommon1.slice(0, -4);
    let newCommonString2 = newCommon2.slice(0, -4);
    let newCommonString3 = newCommon3.slice(0, -4);
    let newCommonString4 = newCommon4.slice(0, -4);
    let newCommonString5 = newCommon5.slice(0, -4);
    let newCommonString6 = newCommon6.slice(0, -4);
    newCommonString1 = newCommonString1.slice(28);
    newCommonString2 = newCommonString2.slice(28);
    newCommonString3 = newCommonString3.slice(28);
    newCommonString4 = newCommonString4.slice(28);
    newCommonString5 = newCommonString5.slice(28);
    newCommonString6 = newCommonString6.slice(28);
    document.getElementById(cardSlot5).innerHTML = newCommonString1;
    document.getElementById(cardSlot6).innerHTML = newCommonString2;
    document.getElementById(cardSlot7).innerHTML = newCommonString3;
    document.getElementById(cardSlot8).innerHTML = newCommonString4;
    document.getElementById(cardSlot9).innerHTML = newCommonString5;
    document.getElementById(cardSlot10).innerHTML = newCommonString6;

    //Prevents duplicate commons
    let currentCommons = [newCommon1, newCommon2, newCommon3, newCommon4, newCommon5, newCommon6]
    for (let i = 0; i < 6; i++) {
        let j = 1 + i
            for (j; j < currentCommons.length; j++) {
                if (currentCommons[i] === currentCommons[j]) {
                    --packCount;
                    newPackLaboratory();
                    return;
            }
        }
    }
}

const colosseum = [

    //Holos and rares at index 0
    ['../../images/gbc/colosseum/A04 Scyther.png',
    '../../images/gbc/colosseum/A05 Pinsir.png',
    '../../images/gbc/colosseum/A18 Gyarados.png',
    '../../images/gbc/colosseum/A20 Raichu.png',
    '../../images/gbc/colosseum/A22 Magneton.png',
    '../../images/gbc/colosseum/A24 Zapdos.png',
    '../../images/gbc/colosseum/A28 Hitmonchan.png',
    '../../images/gbc/colosseum/A34 Wigglytuff.png',
    '../../images/gbc/colosseum/A36 Chansey.png',
    '../../images/gbc/colosseum/A37 Kangaskhan.png',
    '../../images/gbc/colosseum/A38 Snorlax.png',
    //Regular rares
    '../../images/gbc/colosseum/A23 Electabuzz.png',
    '../../images/gbc/colosseum/A26 Dugtrio.png',
    '../../images/gbc/colosseum/A47 Item Finder.png',
    '../../images/gbc/colosseum/A43 Scoop Up.png',
    '../../images/gbc/colosseum/A44 Computer Search.png'],

    //Uncommons at index 1
    ['../../images/gbc/colosseum/A07 Charmeleon.png',
    '../../images/gbc/colosseum/A08 Growlithe.png',
    '../../images/gbc/colosseum/A09 Arcanine.png',
    '../../images/gbc/colosseum/A11 Magmar.png',
    '../../images/gbc/colosseum/A02 Nidorino.png',
    '../../images/gbc/colosseum/A12 Seel.png',
    '../../images/gbc/colosseum/A13 Dewgong.png',
    '../../images/gbc/colosseum/A17 Magikarp.png',
    '../../images/gbc/colosseum/A15 Seaking.png',
    '../../images/gbc/colosseum/A30 Kadabra.png',
    '../../images/gbc/colosseum/A32 Raticate.png',
    '../../images/gbc/colosseum/A49 Full Heal.png',
    '../../images/gbc/colosseum/A50 Revive.png',
    '../../images/gbc/colosseum/A39 Professor Oak.png',
    '../../images/gbc/colosseum/A45 PlusPower.png',
    '../../images/gbc/colosseum/A46 Defender.png'],

    //Commons at index 2
    ['../../images/gbc/colosseum/A01 Nidoran(m).png',
    '../../images/gbc/colosseum/A06 Charmander.png',
    '../../images/gbc/colosseum/A10 Ponyta.png',
    '../../images/gbc/colosseum/A03 Tangela.png',
    '../../images/gbc/colosseum/A14 Goldeen.png',
    '../../images/gbc/colosseum/A16 Staryu.png',
    '../../images/gbc/colosseum/A19 Pikachu.png',
    '../../images/gbc/colosseum/A21 Magnemite.png',
    '../../images/gbc/colosseum/A25 Diglett.png',
    '../../images/gbc/colosseum/A27 Machop.png',
    '../../images/gbc/colosseum/A29 Abra.png',
    '../../images/gbc/colosseum/A31 Rattata.png',
    '../../images/gbc/colosseum/A33 Jigglypuff.png',
    '../../images/gbc/colosseum/A35 Meowth.png',
    '../../images/gbc/colosseum/A48 Potion.png',
    '../../images/gbc/colosseum/A40 Bill.png',
    '../../images/gbc/colosseum/A41 Switch.png',
    '../../images/gbc/colosseum/A42 Poke Ball.png'],

    //Energy at index 3
    ['../../images/gbc/colosseum/E01 Grass Energy.png',
    '../../images/gbc/colosseum/E02 Fire Energy.png',
    '../../images/gbc/colosseum/E03 Water Energy.png',
    '../../images/gbc/colosseum/E04 Lightning Energy.png',
    '../../images/gbc/colosseum/E05 Fighting Energy.png',
    '../../images/gbc/colosseum/E06 Psychic Energy.png'],
]

const evolution = [

    //Holos and rares at index 0
    ['../../images/gbc/evolution/B03 Venusaur.png',
    '../../images/gbc/evolution/B10 Nidoking.png',
    '../../images/gbc/evolution/B13 Victreebel.png',
    '../../images/gbc/evolution/B14 Charizard.png',
    '../../images/gbc/evolution/B16 Flareon.png',
    '../../images/gbc/evolution/B19 Blastoise.png',
    '../../images/gbc/evolution/B23 Vaporeon.png',
    '../../images/gbc/evolution/B24 Jolteon.png',
    '../../images/gbc/evolution/B28 Machamp.png',
    '../../images/gbc/evolution/B36 Gengar.png',
    '../../images/gbc/evolution/B40 Pidgeot.png',
    //Regular rares
    '../../images/gbc/evolution/B09 Beedrill.png',
    '../../images/gbc/evolution/B39 Pidgeotto.png',
    '../../images/gbc/evolution/B43 Pokemon Trader.png',
    '../../images/gbc/evolution/B44 Pokemon Breeder.png',
    '../../images/gbc/evolution/B45 Clefairy Doll.png'],

    //Uncommons at index 2
    ['../../images/gbc/evolution/B02 Ivysaur.png',
    '../../images/gbc/evolution/B06 Butterfree.png',
    '../../images/gbc/evolution/B08 Kakuna.png',
    '../../images/gbc/evolution/B12 Weepinbell.png',
    '../../images/gbc/evolution/B15 Rapidash.png',
    '../../images/gbc/evolution/B18 Wartortle.png',
    '../../images/gbc/evolution/B21 Kingler.png',
    '../../images/gbc/evolution/B26 Sandslash.png',
    '../../images/gbc/evolution/B27 Machoke.png',
    '../../images/gbc/evolution/B30 Graveler.png',
    '../../images/gbc/evolution/B31 Golem.png',
    '../../images/gbc/evolution/B33 Marowak.png',
    '../../images/gbc/evolution/B35 Haunter.png',
    '../../images/gbc/evolution/B37 Jynx.png',
    '../../images/gbc/evolution/B46 Energy Retrieval.png',
    '../../images/gbc/evolution/B49 Super Potion.png',
    '../../images/gbc/evolution/B50 Pokemon Flute.png'],

    //Commons at index 3
    ['../../images/gbc/evolution/B01 Bulbasaur.png',
    '../../images/gbc/evolution/B04 Caterpie.png',
    '../../images/gbc/evolution/B05 Metapod.png',
    '../../images/gbc/evolution/B07 Weedle.png',
    '../../images/gbc/evolution/B11 Bellsprout.png',
    '../../images/gbc/evolution/B17 Squirtle.png',
    '../../images/gbc/evolution/B20 Krabby.png',
    '../../images/gbc/evolution/B22 Starmie.png',
    '../../images/gbc/evolution/B25 Sandshrew.png',
    '../../images/gbc/evolution/B29 Geodude.png',
    '../../images/gbc/evolution/B32 Cubone.png',
    '../../images/gbc/evolution/B34 Gastly.png',
    '../../images/gbc/evolution/B38 Pidgey.png',
    '../../images/gbc/evolution/B41 Jigglypuff.png',
    '../../images/gbc/evolution/B42 Eevee.png',
    '../../images/gbc/evolution/B47 Energy Search.png',
    '../../images/gbc/evolution/B48 Gust of Wind.png'],
    
]

const mystery = [

    //Holos and rarees at index 0
    ['../../images/gbc/mystery/C03 Nidoqueen.png',
    '../../images/gbc/mystery/C06 Vileplume.png',
    '../../images/gbc/mystery/C12 Ninetales.png',
    '../../images/gbc/mystery/C14 Moltres.png',
    '../../images/gbc/mystery/C17 Lapras.png',
    '../../images/gbc/mystery/C21 Articuno.png',
    '../../images/gbc/mystery/C23 Raichu.png',
    '../../images/gbc/mystery/C25 Electrode.png',
    '../../images/gbc/mystery/C27 Zapdos.png',
    '../../images/gbc/mystery/C33 Kabutops.png',
    '../../images/gbc/mystery/C34 Aerodactyl.png',
    '../../images/gbc/mystery/C35 Alakazam.png',
    '../../images/gbc/mystery/C37 Mew.png',
    '../../images/gbc/mystery/C38 Clefairy.png',
    '../../images/gbc/mystery/C46 Dragonite.png',
    //Regular rare
    '../../images/gbc/mystery/C45 Dragonair.png'],

    //Uncommons at index 1
    ['../../images/gbc/mystery/E07 Double Colorless Energy.png',
    '../../images/gbc/mystery/C50 Pokemon Center.png',
    '../../images/gbc/mystery/C02 Nidorina.png',
    '../../images/gbc/mystery/C05 Gloom.png',
    '../../images/gbc/mystery/C08 Parasect.png',
    '../../images/gbc/mystery/C10 Exeggutor.png',
    '../../images/gbc/mystery/C13 Flareon.png',
    '../../images/gbc/mystery/C16 Cloyster.png',
    '../../images/gbc/mystery/C18 Vaporeon.png',
    '../../images/gbc/mystery/C20 Omastar.png',
    '../../images/gbc/mystery/C26 Jolteon.png',
    '../../images/gbc/mystery/C29 Primeape.png',
    '../../images/gbc/mystery/C31 Rhydon.png',
    '../../images/gbc/mystery/C40 Persian.png',
    '../../images/gbc/mystery/C41 Farfetchd.png',
    '../../images/gbc/mystery/C42 Lickitung.png',
    '../../images/gbc/mystery/C43 Tauros.png',
    '../../images/gbc/mystery/C44 Dratini.png',
    '../../images/gbc/mystery/C47 Mr. Fuji.png',],

    //Commons at index 2
    ['../../images/gbc/mystery/C01 Nidoran.png',
    '../../images/gbc/mystery/C07 Paras.png',
    '../../images/gbc/mystery/C09 Exeggcute.png',
    '../../images/gbc/mystery/C11 Vulpix.png',
    '../../images/gbc/mystery/C15 Shellder.png',
    '../../images/gbc/mystery/C19 Omanyte.png',
    '../../images/gbc/mystery/C22 Pikachu.png',
    '../../images/gbc/mystery/C24 Voltorb.png',
    '../../images/gbc/mystery/C28 Mankey.png',
    '../../images/gbc/mystery/C30 Rhyhorn.png',
    '../../images/gbc/mystery/C32 Kabuto.png',
    '../../images/gbc/mystery/C36 Drowzee.png',
    '../../images/gbc/mystery/C39 Meowth.png',
    '../../images/gbc/mystery/C04 Oddish.png',
    '../../images/gbc/mystery/C48 Mysterious Fossil.png',
    '../../images/gbc/mystery/C49 Energy Removal.png'],
    
]

const laboratory = [

    //Holos and rares at index 0
    ['../../images/gbc/laboratory/D08 Muk.png',
    '../../images/gbc/laboratory/D06 Venomoth.png',
    '../../images/gbc/laboratory/D18 Poliwrath.png',
    '../../images/gbc/laboratory/D24 Magneton.png',
    '../../images/gbc/laboratory/D28 Hitmonlee.png',
    '../../images/gbc/laboratory/D35 Mewtwo.png',
    '../../images/gbc/laboratory/D32 Haunter.png',
    '../../images/gbc/laboratory/D33 Hypno.png',
    '../../images/gbc/laboratory/D34 Mr. Mime.png',
    '../../images/gbc/laboratory/D39 Clefable.png',
    //Regular rares
    '../../images/gbc/laboratory/D12 Ninetales.png',
    '../../images/gbc/laboratory/D25 Electrode.png',
    '../../images/gbc/laboratory/D42 Ditto.png',
    '../../images/gbc/laboratory/D36 Pidgeot.png',
    '../../images/gbc/laboratory/D45 Lass.png',
    '../../images/gbc/laboratory/D46 Super Energy Removal.png',
    '../../images/gbc/laboratory/D48 Devolution Spray.png',
    '../../images/gbc/laboratory/D44 Impostor Professor Oak.png'],

    //Uncommons at index 1
    ['../../images/gbc/laboratory/D10 Weezing.png',
    '../../images/gbc/laboratory/D02 Arbok.png',
    '../../images/gbc/laboratory/D04 Golbat.png',
    '../../images/gbc/laboratory/D13 Magmar.png',
    '../../images/gbc/laboratory/D15 Golduck.png',
    '../../images/gbc/laboratory/D17 Poliwhirl.png',
    '../../images/gbc/laboratory/D20 Tentacruel.png',
    '../../images/gbc/laboratory/D22 Seadra.png',
    '../../images/gbc/laboratory/D27 Marowak.png',
    '../../images/gbc/laboratory/D31 Gastly.png',
    '../../images/gbc/laboratory/D43 Porygon.png',
    '../../images/gbc/laboratory/D38 Fearow.png',
    '../../images/gbc/laboratory/D41 Dodrio.png',
    '../../images/gbc/laboratory/D47 Pokedex.png',
    '../../images/gbc/laboratory/D49 Maintenance.png',
    '../../images/gbc/laboratory/D30 Slowbro.png'],

    //Commons at index 2
    ['../../images/gbc/laboratory/D09 Koffing.png',
    '../../images/gbc/laboratory/D11 Tangela.png',
    '../../images/gbc/laboratory/D01 Ekans.png',
    '../../images/gbc/laboratory/D03 Zubat.png',
    '../../images/gbc/laboratory/D07 Grimer.png',
    '../../images/gbc/laboratory/D05 Venonat.png',
    '../../images/gbc/laboratory/D14 Psyduck.png',
    '../../images/gbc/laboratory/D16 Poliwag.png',
    '../../images/gbc/laboratory/D19 Tentacool.png',
    '../../images/gbc/laboratory/D21 Horsea.png',
    '../../images/gbc/laboratory/D23 Magnemite.png',
    '../../images/gbc/laboratory/D26 Onix.png',
    '../../images/gbc/laboratory/D37 Spearow.png',
    '../../images/gbc/laboratory/D40 Doduo.png',
    '../../images/gbc/laboratory/D50 Gambler.png',
    '../../images/gbc/laboratory/D51 Recycle.png',
    '../../images/gbc/laboratory/D29 Slowpoke.png'],

]

const promotional = [

    '../../images/gbc/promotional/P01 Arcanine.png',
    '../../images/gbc/promotional/P02 Moltres.png',
    '../../images/gbc/promotional/P03 Articuno.png',
    '../../images/gbc/promotional/P04 Pikachu.png',
    '../../images/gbc/promotional/P05 Pikachu.png',
    '../../images/gbc/promotional/P06 Flying Pikachu.png',
    '../../images/gbc/promotional/P07 Surfing Pikachu.png',
    '../../images/gbc/promotional/P08 Surfing Pikachu.png',
    '../../images/gbc/promotional/P09 Electabuzz.png',
    '../../images/gbc/promotional/P10 Zapdos.png',
    '../../images/gbc/promotional/P11 Slowpoke.png',
    '../../images/gbc/promotional/P12 Mewtwo.png',
    '../../images/gbc/promotional/P13 Mewtwo.png',
    '../../images/gbc/promotional/P14 Mew.png',
    '../../images/gbc/promotional/P15 Jigglypuff.png',
    '../../images/gbc/promotional/P16 Dragonite.png',
    '../../images/gbc/promotional/P17 Imakuni.png',
    '../../images/gbc/promotional/P18 Super Energy Retrieval.png',
    '../../images/gbc/promotional/PXX Venusaur.png',
    '../../images/gbc/promotional/PXX Mew.png'
    
]