function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;

    for(let num of apples){
        if(a+num >= s && a+num <= t){
            appleCount++
        }
    }
    for(let num of oranges){
        if(b+num >= s && b+num <= t){
            orangeCount++
        }
    }  

    console.log(appleCount)
    console.log(orangeCount)
}

s = 7
t = 11
a = 5
apples = [-2, 2, 1]
b = 15
oranges = [5, -6]

countApplesAndOranges(s, t, a, b, apples, oranges) 