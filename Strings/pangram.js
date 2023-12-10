let string = "We promptly judged antique ivory buckles for te next prize" // pangram
// let string = "We promptly judged antique ivory buckles for the prize" // not pangram

// string = string.toLowerCase();
// let alphabet = "abcdefghijklmnopqrstwuvxyz";

// let pangramCheck = 0; 

// for(let alpha of alphabet){
//     let count = 0;
//     for(let letter of string){
//         if(alpha == letter){
//             count ++;
//         }
//     }
//         if(count > 0){
//             pangramCheck ++;
//         }
//         else{
//             console.log(alpha);
//         }
    
// }

// if(pangramCheck == 26 ){
//     console.log("pangram");
// }
// else{
//     console.log("not pangram");
// }



function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
        let pangram = strArr.indexOf(alphabet[i]) ;
        console.log(pangram);
        if(pangram < 0){
            return (false);
        }
    }
    return (true);
  }

console.log(isPangram(string)); 
