function rollDice() {
    var pointRollNumber1 = Math.floor(Math.random() * 6) + 1;
    var pointRollNumber2 = Math.floor(Math.random() * 6) + 1;
    var totalPointNumber = pointRollNumber1 + pointRollNumber2;
}


document.querySelector(".roll-btn").addEventListener("click", function () {

    function rollDice() {
        var pointRollNumber1 = Math.floor(Math.random() * 6) + 1;
        var pointRollNumber2 = Math.floor(Math.random() * 6) + 1;
        var totalPointNumber = pointRollNumber1 + pointRollNumber2;
    }



    //Random Rolls
    var playButton = document.querySelector(".roll-btn");
    playButton.innerText = "Roll Dice";
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var totalNumber = randomNumber1 + randomNumber2;

    if (totalNumber === 7 || totalNumber === 11) {
        document.querySelector("h1").innerText = "You Win";
        playButton.innerText = "Play Again!";
        playButton.addEventListener("click", location.reload());
    }

    //Else If first Roll 2, 3, or 12, You Lose
    else if (totalNumber === 2 || totalNumber === 3 || totalNumber === 12) {
        document.querySelector("h1").innerText = "You Crapped Out!"
        playButton.innerText = "Play Again!";

    }

    //Else First Roll Makes Points
    else {
        document.querySelector("h1").innerText = "Point Number is " + totalNumber;
        // var pointNumber = totalNumber;
        playButton.innerText = "Roll Again";
        playButton.addEventListener("click", function () {
            var pointRollNumber1 = Math.floor(Math.random() * 6) + 1;
            var pointRollNumber2 = Math.floor(Math.random() * 6) + 1;
            var totalPointNumber = pointRollNumber1 + pointRollNumber2;
            if (totalPointNumber !== totalNumber) {
                document.querySelector("h1").innerText = "Point is " + totalNumber + " Keep Shooting!!!!";
                document.querySelector(playButton).addEventListener("click", rollDice());
                if (totalPointNumber === totalNumber) {
                    document.querySelector("h1").innerText = "Congrats, you're a rolling stone!";
                    playButton.innerText = "Play Again!";
                } else if (totalPointNumber === 7 || totalPointNumber === 11) {
                    document.querySelector("h1").innerText = "You crapped out!";
                    playButton.innerText = "Play Again!";
                }
            }
        })
    }


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


//Create a next roll function after the point number!

// function nextRoll() {
//     var pointCheck =
// }