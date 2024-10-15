let gameseq = [];
let userseq = [];

let btns = ["yellow","pink","voilet","orange"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        console.log("geme started");
        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // randowm button choose
    let random = Math.floor(Math.random()*3);
    let randomcolor = btns[random];
    gameseq.push(randomcolor);
    let randbtn  = document.querySelector(`.${randomcolor}`);
    btnFlash(randbtn);
}
//function check answer

function checkAns(idx){
    if(userseq[idx]==gameseq[idx]){
    if(userseq.length==gameseq.length){
    setTimeout(levelUp(),1000);
    }
    }
    else{
        h2.innerHTML = `Game over!! <br> Your Score was ${level}<br>Press any key to Start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "aqua";
        },150);
        reset();

    }
}

function btnPress(){
  let btn = this;
  btnFlash(btn);
 usercolor  = btn.getAttribute("id");
 userseq.push(usercolor);
 checkAns(userseq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
btn.addEventListener("click",btnPress);
}

function reset(){
    gameseq = [];
    userseq = [];
    started = false;
    level = 0;
}