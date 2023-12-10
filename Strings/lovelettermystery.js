function theLoveLetterMystery(s) {
    if(pallindrome(s)){
        let len = Math.floor(str.length/2);
        let leftarr = str.slice(0, len).split("")
        let rightarr = str.slice(str.length - len).split("");
        for(let i = 0; i < leftarr.length; i++){
            // for(let j = )
        }
    }
}


function pallindrome(str) {
    let len = Math.floor(str.length/2);
    let leftstr = str.slice(0, len)
    let rightstr = str.slice(str.length - len).split("").reverse().join("");
    if(leftstr == rightstr){
        // console.log("palindrome");
        return true;
    }
    else{
        // console.log("not palindrome")
        return false;
    }
}