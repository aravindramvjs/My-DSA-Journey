// let arr = [1,2,3,4,5];
// let newarr = []

// arr.forEach((value)=>{
//     value += 2
//     newarr.push(value)
// })

// // console.log(newarr);


// let names = ["denny", "dinesh", "joel", "dharun", "saran", "kingston"]

// // console.log(name[1].charAt(0).toUpperCase())


// names.forEach((value, index) =>{
//     names[index] = value.slice(0,1) + value.charAt(1).toUpperCase() + value.slice(2);
// });

// console.log(names);



let names = ["denny", "dinesh", "joel", "dharun", "saran", "kingston"]

names.pop()

for(let i = 0; i < names.length; i++){
    names.pop()
}
console.log(names);

// remove last three names

// i = 1 => 5


const numbers = [-2, -1, 0, 1, 2, 3];

const positiveNumbers = numbers.filter((number) =>{
  return number > 0;
});

console.log(positiveNumbers);

// numbers.splice(3,1,1,8,9)
// console.log(numbers);