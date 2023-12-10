function beautifulBinaryString(binaryString) {
    let count = 0;

    for (let i = 1; i < binaryString.length-1; i++) {
        if (binaryString[i-1] === "0" && binaryString[i] === "1" && binaryString[i +1] === "0") {
            count++;
            i += 2;
        }
    }
    console.log(count);
}
let b = "010101020100010";
beautifulBinaryString(b) 

