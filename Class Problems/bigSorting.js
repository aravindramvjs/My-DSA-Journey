// num = "1"

// console.log(typeof(num));

// num = Number(num)

// console.log(typeof(num));

// myarr = ['1','2','3','5']
// arr = []

// for(let i of myarr){
//     i = Number(i)
//     arr.push(i)
// }
// console.log(myarr);
// console.log(arr);



// 
// 31415926535897932384626433832795
// 1
// 3
// 10
// 3
// 5
// let unsorted = ["6", "31415926535897932384626433832795", "1", "3", "10", "3", "5"]
// function bigSorting(unsorted) {

//     let unsortedNum = [];

//     for(let str of unsorted){
//         let num = parseInt(str)
//         unsortedNum.push(num)
//     }

//     for(let i = 0; i < unsortedNum.length; i++){
//         for(let j = 0; j < unsortedNum.length-1; j++){
//             if(unsortedNum[j] > unsortedNum[j+1]){
//                 let temp = unsortedNum[j];
//                 unsortedNum[j] = unsortedNum[j+1];
//                 unsortedNum[j+1] = temp;
//             }
//         }
//     }

//     let sortedStr = []
//     for(let num of unsortedNum){
//         let str = String(num)
//         sortedStr.push(str)
//     }

//     console.log(sortedStr);
//     // return sortedStr
// }
// // bigSorting(unsorted)


// function bigSorted(arr) {
//     return arr.sort((a, b) => {
//       if (a.length !== b.length) {
//         return a.length - b.length;
//       }
//       for (let i = 0; i < a.length; i++) {
//         if (a[i] !== b[i]) {
//           return a[i].charCodeAt(0) - b[i].charCodeAt(0);
//         }
//       }
//       return 0;
//     });
//   }

// // console.log(bigSorted(unsorted));


// let arr = ["6", "31415926535897932384626433832795", "1", "3", "10", "3", "5"]
// console.log(arr[3].charCodeAt(0));

// function bigSorting(unsorted) {
// unsorted.sort( function(a, b){ 
//   return BigNumber(a).comparedTo(new BigNumber(b)) 
// });
  
// return unsorted;
// }

// function bigSorting(unsorted) {
//   return unsorted.sort((a, b) => a - b);

// }


function bigSorting(unsorted) {
    var newList = unsorted.map(i=>parseInt(i)); //Convert the strings in the list into integers
    newList.sort((a, b) => a-b); 

    console.log(newList)
}


let unsorted = ["6", "31415926535897932384626433832795", "1", "3", "10", "3", "5"]

console.log(bigSorting(unsorted));