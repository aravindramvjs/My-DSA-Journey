// Given a square matrix, calculate the absolute difference between the sums of its diagonals. 
// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = 1 + 5 + 9 = 15. 
// The right to left diagonal = 3 + 5 + 9 = 17. 
// Their absolute difference is |15 - 17 | = 2.


// let a = [1,2,3]
// let b = [4,5,6]
// let c = [7,8,9]
// let mat = [a,b,c]
// let d = [3]
let e = [11, 2, 4]
let f = [4, 5, 6]
let g = [10, 8, -12]
let matrix = [e,f,g]

function diagonalDifference(arr) {
let left_diagonal = 0;
let right_diagonal = 0;

// left diagonal

for(let i = 0; i < arr.length; i++){  
    left_diagonal += arr[i][i] ; // it goes like arr[0][0] = 11 , arr[1][1] = 5 and arr[3][3] = -12
}

// Right Diagonal
let a=0;  
let b= arr.length-1; // a[0]b[2]

for(let j = 0 ; j < arr.length ;j++){
    right_diagonal += arr[a][b] ;
    a+=1;
    b-=1; //a[1]b[1] and a[2]b[0]
    }

let diagonal_difference = left_diagonal - right_diagonal 
return Math.abs(diagonal_difference);
}

console.log(diagonalDifference(matrix));
// console.log(Math.abs(4-19));

// for(let j = 2; j >= 0; j--){
//     for(let k = 0; k <= j-2; k++){
//         console.log( matrix[j][k]);
//     }
    
// }
// matrix[0][2]
// matrix[1][1]
// matrix[2][0]

// let a=0; 
// let b=2;
// for(let i = 0 ; i <= 2 ;i++){
//     console.log(matrix[a][b]);
//     a+=1;
//     b-=1;
    
// }
