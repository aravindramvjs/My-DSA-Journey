
function reversestr(string) {
    string = string.split("");
    for(let i = 0; i < string.length/2; i++ ){
        let temp = string[i]
        string[i] = string[string.length - (i+1)] 
        string[string.length - (i+1)] = temp
    }
    string = string.join("")
    console.log(string);
}


let string = "hello";
reversestr(string)
