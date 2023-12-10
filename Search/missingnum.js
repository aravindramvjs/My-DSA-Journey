function missingNumbers(arr, brr) {
    let resultarr = [];
    
    let originalarr =  [...new Set(brr)];
    console.log(originalarr);

    for(let i = 0; i < originalarr.length; i++){
        let num = originalarr[i];
        let arrnumcount = 0;
        let brrnumcount = 0;
        
        for(let a = 0; a < arr.length; a++){
            
            if(num == arr[a]){
                arrnumcount++
            }
        }
        for(let b = 0; b < brr.length; b++){
            
            if(num == brr[b]){
                brrnumcount++
            }
        }    
        
        console.log(num, arrnumcount, brrnumcount);
        console.log();
        if(arrnumcount != brrnumcount){
            // let loopcount = Math.abs(arrnumcount - brrnumcount)
                resultarr.push(num)
        }
    }


    function compareNumbers(a, b) {
        return a - b;
      }
    console.log(resultarr.sort(compareNumbers));
    // console.log(resultarr);
}

let arr = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206]
let brr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]
missingNumbers(arr, brr)