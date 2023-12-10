let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstwuvxyz0123456789!@#$%^&*_-"
let password = " "

function generatePassword(length) {
    for(let i = 0; i < length; i++){
        password += upper.charAt(Math.floor(Math.random() * upper.length))
    }

    console.log(password);
}

generatePassword(10)


// if(upper.checked){
//     upper.slice(26)
// }
// if(lower.checked){
//     upper.slice(26,52)
// }
// if(num.checked){
//     upper.slice(52,62)
// }
// if(symbols.checked){
//     upper.slice(62,72)
// }

// console.log(upper.slice(0,26));
// console.log(upper.slice(26,52));
// console.log(upper.slice(52,62));
// console.log(upper.slice(62,72));