// Mini-Max Sum return the minimum and maximum sum of array

function miniMaxSum(arr) {
    let newarr = []
    for(let i = 0; i < arr.length; i++){
        let total = 0;
        for(let j = 0; j < arr.length; j++){
            total +=arr[j]
        }
        total -= arr[i]
        newarr.push(total)
    }
    let minmax = [Math.min(...newarr), Math.max(...newarr)]
    console.log(...minmax);
}