// diamond 
let n=5;
let col;
let result=""
for(let i=1;i<=2*n-1;i++){ 
    if (i>n){
        col=2*n-i 
    }
    else{
        col=i
    }
    for(let j=1;j<=col;j++){ 
        result=result+"  "+j
    }
    result=result+"\n"
}
console.log(result)