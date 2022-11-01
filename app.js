const livesScore = document.querySelector("#liveScore")
const p1Display = document.querySelector("#p1Score")
const p2Display = document.querySelector("#p2Score")
const p1 = document.querySelector("#p1")
const p2 = document.querySelector("#p2")
let scoreP1 = 0
let scoreP2 = 0
let scoreWinner = 11

p1.addEventListener("click", function(e){
    if( scoreP1 !== scoreWinner) {
        scoreP1 += 1;
        p1Display.textContent = scoreP1;
    }
})


p2.addEventListener("click", function(e){
    if( scoreP2 !== scoreWinner) {
        scoreP2 += 1;
        p2Display.textContent = scoreP2;
    }
})