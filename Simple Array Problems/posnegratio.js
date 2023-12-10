//  return positive num ratio, zero ratio, negative num ratio of an array

let myarr =[-1,-2,-2,0,3,4]

function plusMinus(arr) {
    let poscount =  0; 
    let negcount = 0;
    let zerocount = 0;
    for(let n = 0; n < arr.length; n++){
        if(arr[n]> 0){
            poscount++;
        }
        else if(arr[n]< 0){
            negcount++;
        }
        else if(arr[n]== 0){
            zerocount++;
        }
    }
    let posratio = poscount/arr.length
    let negratio = negcount/arr.length
    let zeroratio = zerocount/arr.length
    
    console.log(posratio);
    console.log(negratio);
    console.log(zeroratio);

}
plusMinus(myarr)
