document.querySelector(".roll-btn").addEventListener("click", function () {
    //Random Rolls
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var totalNumber = randomNumber1 + randomNumber2;

    if (totalNumber === 7 || totalNumber === 11) {
        document.querySelector("h1").innerText = "You Win";
    }

    //Else If first Roll 2, 3, or 12, You Lose
    else if (totalNumber === 2 || totalNumber === 3 || totalNumber === 12) {
        document.querySelector("h1").innerText = "You Crapped Out!"
    }

    //Else First Roll Makes Points
    else {
        document.querySelector("h1").innerText = "Your Point Number is " + totalNumber;
        var pointNumber = totalNumber;
    }

    //Code for Dye 1

    if (randomNumber1 === 1) {
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    } else if (randomNumber1 === 2) {
        document.querySelector(".img1").setAttribute("src", "images/dice2.png");
    } else if (randomNumber1 === 3) {
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");
    } else if (randomNumber1 === 4) {
        document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    } else if (randomNumber1 === 5) {
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");
    } else {
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    }

    //Code for Dye2
    if (randomNumber2 === 1) {
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    } else if (randomNumber2 === 2) {
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
    } else if (randomNumber2 === 3) {
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");
    } else if (randomNumber2 === 4) {
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    } else if (randomNumber2 === 5) {
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    } else {
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    }
})

var result = document.querySelector("h1").innerText;
