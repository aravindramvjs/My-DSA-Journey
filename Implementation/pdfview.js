function designerPdfViewer(h, word) {
    let alphabet = "abcdefghijklmnopqrstwuvxyz";
    let index= [];
    let outputar = []

    for(let letter of word){
        index.push(alphabet.indexOf(letter))
    }
    
    for(let indexvalue of index){
        outputar.push(h[indexvalue])
    }

    // console.log(Math.max(...outputar) * word.length);
    return (Math.max(...outputar) * word.length)
}
let word = "hello"
let h = ['1', '3', '1', '3', '1', '4','1', '3', '2', '5', '5', '5','5', '5', '5', '5', '5', '5','5', '5', '5', '5', '5', '5','5', '7']
designerPdfViewer(h, word)