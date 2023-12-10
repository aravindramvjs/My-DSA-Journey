function kangaroo(x1, v1, x2, v2) {
    let kangarooone = x1+v1;
    let kangarootwo = x2+v2;
    let output = "";
    let i = 0; 
    while(output == "YES"){
        kangarooone += v1
        kangarootwo += v2
        if(kangarooone == kangarootwo){
            output+="YES"
            console.log(i);
        }
        else{
            output+="NO"
            console.log(i);
        }
        i++
    }

    console.log(output);
}

x1 = 0;
v1 = 3;
x2 = 4;
v2 = 2;

kangaroo(x1, v1, x2, v2)