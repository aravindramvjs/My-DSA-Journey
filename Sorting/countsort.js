function countSort(arr) {
    let sortedarr = [];
    let reusltarr = []
    
    function compareNumbers(a, b) {
        return a[0] - b[0];
     }
    
    sortedarr.push(arr.sort(compareNumbers));
    
    for(let i = 0; i < sortedarr.length; i++){
        for(let j = 0; j < sortedarr.length; j++){
            if(sortedarr[i][1] == sortedarr[j][1]){
                reusltarr.push("-")
                
            }
            else{
                reusltarr.push(sortedarr[i][1])
            }
        }
    }
    return reusltarr
}

let arr = [['0', 'ab'],['0', 'ab'],['0', 'ab'],['0', 'ab'],['0', 'ab'],['0', 'ab'],['0', 'ab'],['0', 'ab'],['0', 'ab'],['0', 'ab'],['0', 'ab'],['0', 'ab'],['0', 'ab'],['0', 'ab'],['0', 'ab'],['0', 'ab'],['0', 'ab'],['0', 'ab'],['0', 'ab'],['0', 'ab']]
// 6 cd
// 0 ef
// 6 gh
// 4 ij
// 0 ab
// 6 cd
// 0 ef
// 6 gh
// 0 ij
// 4 that
// 3 be
// 0 to
// 1 be
// 5 question
// 1 or
// 2 not
// 4 is
// 2 to
// 4 the]