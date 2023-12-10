// 

let a = [1,2,3,4,4,5,5,2,4,34,34,34,43,]
function countingSort(arr) {

let c = []

for(let i = 0 ; i < a.length; i++){
    let repeat = 0;
    for(let j = 0; j < a.length; j++){
        if(a[i] == a[j]){
            repeat++
        }
    }
    c.push(repeat-1)
}
return c;
}

console.log(countingSort(a));