// candles = [4,4,1,3]
// The maximum height candles are 4 units high. There are 2 of them, so return 2.


candles = [2,45,2346,23,57,234,2346,346,2,1,2346,753,3,57,]
function birthdayCakeCandles(candles) {
    let max = 0;
    for(let i =0; i < candles.length; i++){
        if(max <= candles[i]){
            max = candles[i] 
        }
    }

    let a = 0;
    for(let j = 0; j < candles.length; j++){
        if(candles[j] == max){
            a +=1; 
        }
    }
    
    return a;
}

console.log(birthdayCakeCandles(candles));