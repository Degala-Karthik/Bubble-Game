
var timer = 60;
var score = 0;
var ran = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#ScoreCal").textContent = score;
}
function makeHit(){
    ran = Math.floor(Math.random() * 10)
    document.querySelector("#HitVal").innerHTML = ran;
}

function makeBubble(){
    var clutter = "";

for(var i = 0; i <= 101 ; i++) {
    var val = Math.floor(Math.random() * 10);
    clutter += `<div class = 'bubble'> ${val} </div>`;
}

document.querySelector("#bdown").innerHTML = clutter;
}

// += will add the that bubble to the existing bubbles.
// clutter = `<div class = 'bubble'> 5 </div>`; --> it will just replace the clutter with a new value but the same. so we use +=


function runtimer(){
    var timInt = setInterval(function(){
        if(timer > 0){ 
            timer --;
            document.querySelector("#TimerBox").textContent = timer;
        }else{
            clearInterval(timInt); // to stop the timer once it stops at 0
            document.querySelector("#bdown").innerHTML = `<h1> GAME OVER </h1>`;
        }
    }, 1000)
    
}

document.querySelector("#bdown").addEventListener("click", function(details){
    var bub = Number(details.target.textContent);
    if(ran == bub) {
        increaseScore();
        makeBubble();
        makeHit();
    }
})

makeHit();
makeBubble();
runtimer();

