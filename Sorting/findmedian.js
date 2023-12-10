//  function to find median 

let arr = [0,3,2,5,9,4,1,6,7,8]; 

function findmedian(arr) {
    arr.sort((x,y) => x-y); //[0,1,2,3,4,5,6,7,8,9]
    let n = arr.length
    if(n%2 == 1){ 
        let median = Math.round((n+1)/2)
        return arr[median-1]
    }
    else{
        let median = Math.round((n/2 + (n/2) + 1 ) / 2) ;
        return arr[median-1]
    }
}

// arr.forEach(element => console.log(element));
console.log(findmedian(arr));