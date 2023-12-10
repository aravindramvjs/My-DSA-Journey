function isValid(s) {

    let countArr = [];
    let originalarr =  [...new Set(s)];
    s = s.split("");


    for(let i = 0; i < originalarr.length; i++){
        let count = 0;
        let letter = originalarr[i];
        for(let j = 0; j < s.length; j++){
            if(letter == s[j]){
                count++  
            }
        }
        countArr.push(count)
    }


    let unmatchedcount = 0;
    for(let i = 0; i < countArr.length; i++){
        if(countArr[0] != countArr[i]){
            unmatchedcount++
        }
    }
    if(unmatchedcount <= 1 || unmatchedcount == s.length-1){
        return "YES"
    }
    else{
        return "NO"
    }
}

let s = "abcdefghhgfedecba";
console.log(isValid(s))