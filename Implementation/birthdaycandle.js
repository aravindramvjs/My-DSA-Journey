function birthdayCakeCandles(candles) {
    const max = Math.max(...candles)
    
    const count = candles.reduce((acc, val) => val === max ? acc + 1 : acc, 0);
    
    return count

}