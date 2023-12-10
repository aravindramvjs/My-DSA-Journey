let scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42]

function breakingRecords(scores) {
    
let highscore = scores[0]
let lowscore = scores[0]
let above = 0;
let below = 0; 
let bestworst = []

for(let score of scores){
    if(highscore < score){
        above += 1;
        highscore = score
    }
    else if(lowscore > score){
        below += 1; 
        lowscore = score
    }
}
bestworst.push(above, below)

return bestworst
}

console.log(breakingRecords(scores));