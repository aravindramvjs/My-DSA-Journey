let string = "there is iron man";
let find = "is";
let replace = "was";

let string_array = string.split(" ");

let find_array = find.split(" ")
let replace_array = replace.split(" ");

if(replace_array.length >= 1){
    for(let i = 0; i < replace_array.length; i++){
        for(let j = 0; j < string_array.length; j++){
            if(string_array[j] == find_array[i]){//string_array[0 1 2 3] ==  find_array[0 1]
                string_array[j] = replace_array[i];//string_array[2] = replace_array[0]
            }
           
        }
        replaced_string = string_array.join(" ");
}
}
console.log(string);
console.log(replaced_string);

// for(let i = 0; i < string_array.length; i++){
//     if(string_array[i] == find){
//         string_array[i] = replace;
//     }
//     replaced_string = string_array.join(" ");
// }

//split()

