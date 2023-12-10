function combinationletter(input){
    let numpad = [' ', "", "abc", "def", "ghi", "jkl", "mno", "pars", "tuv", "wxyz"];
     input = input.toString().split("");

    let clicked = [];

    for(let num of input){
        clicked.push(numpad[num])
    }

    let output = [];
    // let output = ""
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            output.push(clicked[1][i] + clicked[2][j]);
        }
    }
    

    return JSON.stringify(output);
}

console.log(combinationletter(01));