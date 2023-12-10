// // pallindrome

// function pallindrome(string) {
//     if(string.length > 1){
//     let initial_string = string;
//     string = string.split("");
//     for(let i = 0; i < string.length/2; i++ ){
//         let temp = string[i]
//         string[i] = string[string.length - (i+1)] 
//         string[string.length - (i+1)] = temp
//     }
//    let  reverse_string = string.join("")
//     if(initial_string == reverse_string){
//         console.log(`${initial_string} = ${reverse_string} is a pallindrome`);
//     }
//     else{
//         console.log(`${initial_string} != ${reverse_string} is not a pallindrome`);
//     }
// }
// else{
//     console.log("Single letter can be pallindrome but it doesn't make sense");
// }
// }

// let string = "a";
// pallindrome(string)


function pallindrome(str) {
    let len = Math.floor(str.length/2);
    let leftstr = str.slice(0, len)
    let rightstr = str.slice(str.length - len).split("").reverse().join("");
    if(leftstr == rightstr){
        console.log("palindrome");
    }
    else{
        console.log("not palindrome")
    }
}
let str ="amma"
pallindrome(str)