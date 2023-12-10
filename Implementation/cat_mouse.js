function catAndMouse(x, y, z) {

    if (Math.abs(x-z) == Math.abs(y-z)){
        return "Mouse C"
    }
    if(Math.abs(x-z) < Math.abs(y-z)){
        return "Cat A"
    }
    else if(Math.abs(x-z) > Math.abs(y-z)){
        return "Cat B"
    }
}

console.log(catAndMouse(1,3,2))