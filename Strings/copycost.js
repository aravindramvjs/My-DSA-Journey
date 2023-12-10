function stringConstruction(s) {
    let maps = new Map();
    for (let i of s) {
      maps.set(i, true);
    }
    console.log(maps.size);
  }
  
  // let response = stringConstruction("abcd");//expected 4
  // let response = stringConstruction("abab"); //expected 2
  
//   let response = stringConstruction("scfg"); //expected 4
  let response = stringConstruction("hello"); //expected 2