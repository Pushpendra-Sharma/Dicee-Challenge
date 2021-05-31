let globalRandom1 = 0,
    globalRandom2 = 0;

    const date= new Date();
    const year=date.getFullYear();

document.getElementsByClassName("img1")[0].addEventListener("click", roll1);
document.querySelector(".img2").addEventListener("click", roll2);

function roll1() {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    globalRandom1 = randomNumber1;
    let elements = document.getElementsByClassName("img1");
    let src1 = "images/dice" + randomNumber1 + ".png";
    elements[0].src = src1;
    result();
}

function roll2() {
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    globalRandom2 = randomNumber2;
    let elements = document.getElementsByClassName("img2");
    let src2 = "images/dice" + randomNumber2 + ".png";
    elements[0].src = src2;
    result();
}

function result() {
    if (globalRandom1 !== 0 && globalRandom2 !== 0) {
        if (globalRandom1 > globalRandom2) {
            document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
        }
        else if (globalRandom2 > globalRandom1) {
            document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
        }
        else {
            document.querySelector("h1").innerHTML = "Draw!";
        }
    }
}






