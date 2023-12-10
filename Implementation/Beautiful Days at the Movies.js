// fromdate = 23 
// reversedate = 32
// absdiff = 9
// divvalue = 9 / noofdays => 9/4 = 2.2 it is not beatuiful day at movie coz it returns decimal point
// todate = 26


function beautifulDays(i, j,k) {
    let count = 0;
    for(let a = i; a <= j; a++){
        reversedNum = Number(String(a).split('').reverse().join(''));
        if(Math.abs(a - reversedNum)%k == 0){
            count++
        }
    }
    console.log(count);
    return count;
}
beautifulDays(20, 23, 6)