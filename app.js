let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "purple", "red", "green"]; 

let started = false;
let level = 0;
let h2 = document.querySelector("h2"); 

document.addEventListener("keypress", function () {  
    if (!started) {
        console.log("game started");
        started = true;
        levelup();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () { 
        btn.classList.remove("flash"); 
    }, 500);
}

function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;  
    
    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`#${randomColor}`);
    btnFlash(randomBtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelup, 1000); 
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key to start`;
        document.querySelector("body").style.color = "red";
        setTimeout(function () {
            document.querySelector("body").style.color = "black";
        }, 150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length - 1); 
}

let allbtn = document.querySelectorAll(".btn");
for (let btn of allbtn) {
    btn.addEventListener("click", btnPress); 
}

function reset() {
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
}
;
//npm init -y
//npm install express
//////////////////////node index.js///////////////////////