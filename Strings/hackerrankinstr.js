function hackerrankInString(s) {
    let hackerrank = "hackerrank"
    let count = 0;

    for(let i = 0; i < hackerrank.length; i++){
        for(let j = 0; j < s.length; j++){
            if(hackerrank[i] == s[j]){
                count++;
                break;
            }
        }
    }

    if(count == hackerrank.length){
        // console.log("YES");
        return "YES"
    }
    else{
        // console.log("NO");
        return "NO"
    }
}

let s = "hhhhhaaackerrrrrraaaaannkkkkk"
hackerrankInString(s)