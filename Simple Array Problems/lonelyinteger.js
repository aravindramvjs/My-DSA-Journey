// function to return a lonely or unique element which doesn't repeats

let a = [1,2,3,4,3,2,1]

function lonelyinteger(a){
for(let i = 0; i < a.length; i++){
    let repeat = 0;
    for(let j = 0 ; j < a.length; j++){ 
        if(a[i] === a[j]){
            repeat ++;
        }
    }
    if(repeat < 2){
        return a[i];
    }
}
}