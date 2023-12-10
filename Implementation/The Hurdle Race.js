// The Hurdle Race
// initially he can jump 1 height how much dose he needs to take to jump 3 unit height 
// 3 - 1 = 2 
let height = [2, 5, 4, 5, 2];
let k = 4;

function hurdleRace(k, height) {
    let maxNum = height[0]
    for(let unit of height){
        if(unit > maxNum){
            maxNum = unit
        }
    }

    let dose = maxNum-k;

    if(maxNum >= k){
    console.log(dose);
    return (dose);
    }
    else{
        console.log(0);
        return 0; 
    }
}

hurdleRace(k, height) 