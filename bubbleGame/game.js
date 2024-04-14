function makeBubble(){
  var clutter= "";

for(var i=0;i<=107;i++){
    var rn = Math.floor(Math.random()*10);
  clutter += `<div class="bubble">${rn}</div>`;

}
document.querySelector("#pbtm").innerHTML = clutter;
}

var timer=60;
function runTimer(){
  var timerint = setInterval(function(){
    if(timer > 0){
      timer--;
      document.querySelector("#timerval").textContent =timer;
    }
    else{
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    }''
  },1000);
}

var hitrn =0;
function getNewHit(){
  hitrn = Math.floor(Math.random()*10);
  document.querySelector("#hitval").textContent=hitrn;
}

var score=0;
function increaseScore(){
  score=score+10;
  document.querySelector("#scoreval").textContent = score;

}

document.querySelector("#pbtm").addEventListener("click" , function(dets){
  var clickedNumber = Number(dets.target.textContent);

  if(clickedNumber == hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

getNewHit();
runTimer();
makeBubble();
