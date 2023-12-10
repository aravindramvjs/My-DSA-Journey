function timeInWords(h, m) {
    let timewordobj = {
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "thirteen",
        "14": "fourteen",
        "15": "fifteen",
        "16": "sixteen",
        "17": "seventeen",
        "18": "eighteen",
        "19": "ninteen",
        "20": "twenty",
        "21": "twenty one",
        "22": "twenty two",
        "23": "twenty three",
        "24": "twenty four",
        "25": "twenty five",
        "26": "twenty six",
        "27": "twenty seven",
        "28": "twenty eight",
        "29": "twenty nine",
        "30": "thirty"
        
    }
    if(m == 0){
        return (timewordobj[String(h)]+" o' clock")
    }
    else if(m == 1){
        return (timewordobj[String(m)]+" minute past "+timewordobj[String(h)])
    }
    else if(m == 59){
        return ("one minute to "+timewordobj[String(h+1)])
    }
    else if(m == 45){
        return ("quarter to "+timewordobj[String(h+1)])
    }
    else if(m == 15){
        return ("quarter past "+timewordobj[String(h)])
    }
    else if(m == 30){
        return ("half past "+timewordobj[String(h)])
    }
    else if(m < 30){
        return (timewordobj[String(m)]+" minutes past "+timewordobj[String(h)])
    }
    else if(m > 30){
        m = Math.abs(m - 60)
        return (timewordobj[String(m)]+" minutes to "+timewordobj[String(h+1)])
    }
   
    

}

// for(let i =0; i <= 59; i++){
    console.log(timeInWords(5, 45) )
// }
