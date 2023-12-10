function rotateLeft(d, arr) {
    for(let i = 0; i < d; i++){
        let curElem = arr.shift();
        arr.push(curElem)
        
    }
    return arr

}
let myarr = [1,2,3,4,5]
console.log(rotateLeft(4, myarr))