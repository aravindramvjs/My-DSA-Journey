// Bubble sort algorithm for Ascending  sort
let a = [5,3,2,7,1]

for(let i = 0; i < a.length; i++){
    for(let j = 0; j < a.length-1; j++){
        if(a[j] > a[j+1]){
            let temp = a[j];
            a[j] = a[j+1];
            a[j+1] = temp;
        }
    }
}
console.log(`Ascending  of a = ${a}`);

// Bubble sort algorithm for descending sort

let b = [5,3,2,7,1]

for(let i = 0; i < b.length; i++){
    for(let j = 0; j < b.length-1; j++){
        if(b[j] < b[j+1]){
            let temp = b[j];
            b[j] = b[j+1];
            b[j+1] = temp;
        }
    }
}
console.log(`Descending of b = ${b}`);