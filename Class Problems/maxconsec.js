// -----------------------------------------------------------------LEVEL 1---------------------------------------------------------------------
// Area of rectangle 
// let area = 10;
// let breadth = 5;
// console.log("The Area of Rectangle is" ,area*breadth);


// -----------------------------------------------------------------LEVEL 2---------------------------------------------------------------------
// find two numbers are equal or not equal
// let a = 10;
// let b = 20;
// if( a == b){
//     console.log(a,"and",b,"are equal" );
// }
// else{
//     console.log(a,"and",b,"are not equal" );
// }


// -----------------------------------------------------------------LEVEL 3---------------------------------------------------------------------
// print everything expect x
// let arr = [1,2,3,4,5,6,7,8,9,10]
// let x = 5;
// for(num of arr){ // for(let i = 0; i < array.lenght; i++)
//     if(num == x){
//         continue;
//     }
//     else{
//         console.log(num);
//     }
// }


// -----------------------------------------------------------------LEVEL 4---------------------------------------------------------------------
// print all the even num in the array
// let myarr = [7,11,2,15,16]
// let sum = 0;
// for(let n of myarr){
//     if(n % 2 == 0){
//         sum += n;
//     }
// }
// console.log(sum);


// -----------------------------------------------------------------LEVEL 5---------------------------------------------------------------------
// find the maximum sum of the k consequent terms

let a = [1,2,3,4,5,6,7,8]
let k = 3;
// let c = [];
let max = 0;

for(let i = 0; i < a.length - (k-1); i++){  // a.len = 8, k =3, a.len - (k-1) => 6; it iterates 0 to 5
    let b = 0;
    for(let j = i; j < i+k; j++){          //j =0; j < 0+3 => 3 
        b += a[j];                        // b = 1 + 2 + 3 => 6
    }
    if(b > max){
        max = b;
    }
}

console.log(`${max} is the maximum sum of the ${k} consecutive element`);
// console.log(`${Math.max(...c)} is the maximum sum of the ${k} consecutive element`);

// let max = c[0];
// for(let index = 0; index < c.length; index++){

//     if(max < c[index]){
//         max = c[index];
//     }
// }
// console.log(max);