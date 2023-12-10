// let n = 15;
// let m = 5;

// // Write code to print 
// if n is a multiple of m 
// or n is not a multiple of m

// For the sample input put it should print

//  15 is a multiple of 5
 
//  hint: 12%3 gives 0.

// let n = 78;
// let m = 3;

// n%m==0 ? console.log(`${n} is multiple of ${m}`): console.log(`${n} is not multiple of ${m}`)

// Write code to print if n is a prime Number

// for example if n = 11, then its divisible only by 1 and 11 
// (Hint: only n%1 == 0 and n%11==0,  ) no other number can divide 11

// but if n = 12 then n%1 ==0 and n%2==0, n%3 == 0, n%4 == 0, n%6==0 hence its not a prime number

// Your code should work for any value of n

// let number = 4;
// let prime = true;

// if (number == 1){
//     console.log(`${number} is neither prime not composite`);
// }
// else if (number > 1){ // 4 > 1
//     for (let i = 2; i < number; i++) { // 2 to 3
//         if (number % i == 0) { // 4 % 2
//             prime = false;
//             break;
//         }
//     }
    
// if (prime) {
//     console.log(`${number} is a prime number`);
// } else {
//     console.log(`${number} is a not prime number`);
// }
// }

// check the how many times the num is in array
// let a = [13, 11, 13,4, 10, 9, 1];
// let n= [11, 13, 4, 17];
// let x;


// for(let i = 0; i < n.length; i++){
//     x = n[i] //x=17
//     for(let j = 0; j < a.length; j++){
//         let c = 0;
//         if(a[j] == x){
//             c+=1;
//             console.log(a[j]+"found" +c);
//             // return a[j]
//         } //false
//     }
// }


// if(c>0){
//     console.log(`${x} is not found`); // run
// }
// else{
//     console.log(`${x} is found ${c} times`);// not run
// }

// let a = [13, 11, 13,4, 10, 9, 1];
// let b=[11,13,4,17]

// for(let i=0;i<b.length;i++){
//     let x=a[i];
//     let cnt=0;
//     for(let j=0;j<a.length;j++){
//         if(b[j]==a[i]){
//                 cnt++;
//             console.log(b[j]+"found" + cnt)
//         }

//     }
// }




