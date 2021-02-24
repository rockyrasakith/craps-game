document.querySelector(".roll-btn").style.visibility ="hidden";

//random numbers
randomNumber1 = Math.floor(Math.random() * 6) + 1;
randomNumber2 = Math.floor(Math.random() * 6) + 1;
point = randomNumber1 + randomNumber2;
    
    
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


    //check point 
    if (point === 7 || point === 11) {
        document.querySelector("#game-message").innerText = "Win!";
    } else if (point === 2 | point === 3 | point === 12) {
        document.querySelector("#game-message").innerText = "Crap Out!";
    } else {
        document.querySelector(".roll-btn").style.visibility = "visible";
    }