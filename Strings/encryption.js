function caesarCipher(s, k) {
    let upperalphabet = [];
    let loweralphabet = [];
    let encrytedmsg = [];
    let specialChar = [" ", "-"]
    for (i = 65; i <= 90; i++) {
        upperalphabet.push(String.fromCharCode(i));
    }
    for (i = 97; i <= 122; i++) {
        loweralphabet.push(String.fromCharCode(i));
    }

    
    for(let i = 0; i < s.length; i++){
        for(let j = 0; j < loweralphabet.length; j++){
            if(s[i] == loweralphabet[j]){
                encrytedmsg.push(loweralphabet[j+k])

                if((j+k) > (loweralphabet.length - 1)){
                    let r = (j+k) - (loweralphabet.length - 1)
                    encrytedmsg.push(loweralphabet[r - 1])
                }
            }
        }
        for(let j = 0; j < upperalphabet.length; j++){
            if(s[i] == upperalphabet[j]){
                encrytedmsg.push(upperalphabet[j+k])

                if((j+k) > (upperalphabet.length - 1)){
                    let r = (j+k) - (upperalphabet.length - 1)
                    encrytedmsg.push(upperalphabet[r - 1])
                }
            }
            else if(s[i] == specialChar[j]){
                encrytedmsg.push(s[i])
            }
        }
    }

    console.log(encrytedmsg.join("")); 
}


s = "middle-Outz";
k = 2;
caesarCipher(s,k);

