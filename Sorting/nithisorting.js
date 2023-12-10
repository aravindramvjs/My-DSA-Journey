let s = [3,7,2,1,8]

for(let i = 0; i < s.length; i++){
    for(let j = 0; j < s.length; j++){
        if(s[i] < s[j]){
            let temp = s[i]
            s[i] = s[j]
            s[j] = temp
            break;
        }
    }
}

console.log(s);