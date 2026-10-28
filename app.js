let gameseq=[];
let userseq=[];
let started = false;
let level = 0;
let highlevel = 0;
let h2 = document.querySelector("h2");
//let btn = document.querySelector(".btn");
let buttonArray = ["yellow" ,"red","purple","green"];
document.addEventListener("keypress",function(){
   // console.log("Started!");
   if(started==false){
    console.log("Started!");
    started = true;
  
    levelUp();

    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelUp(){
    userseq=[];
    level++;
    h2.innerText =`Level ${level}`;

    let randInd = Math.floor(Math.random()*3);
    let randColor = buttonArray[randInd];
    let randBtn = document.querySelector(`.${randColor}`);
   // console.log(`btn : ${randBtn} , color : ${randColor} , index: ${randInd}`);
   gameseq.push(randColor) ;
   console.log(gameseq);
   gameFlash(randBtn);
}
function checkseq(idx){
   // console.log("current level is : ",level);

   if(userseq[idx]==gameseq[idx]){
    if(userseq.length==gameseq.length){
       setTimeout( levelUp(),1000);
    }
    
   }
   else{
      highlevel = Math.max(level,highlevel);
    h2.innerHTML =`GAME OVER! YOUR SCORE WAS <b>${level}</b><br> and your highscore is <b>${highlevel}</b><br> press any key to start.`
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
         document.querySelector("body").style.backgroundColor = "white";
    },800);
    reset();
}
}

function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    checkseq(userseq.length-1);
}
let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameseq=[];
    userseq = [];
  
    level = 0;
}
