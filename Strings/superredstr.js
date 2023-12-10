//  If two letters comes together(aa) delete them.

function superReducedString(s) {
    console.log(s);
    s = s.split("")
    let result = []
    for(let i = 0; i < s.length; i++){
        for(let j = 0; j <= 0; j++){
            if(s[j] == s[j+1]){
                s.splice(j, 2)
            }
            else{
                result.push(s.splice(j, 2));
            }
            console.log(s.join(""));
        }
    }
    console.log(result.join(""));
    
}

// let s = "aaabccddd"
let s = "baab"
superReducedString(s)

