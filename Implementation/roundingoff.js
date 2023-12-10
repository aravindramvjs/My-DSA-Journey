// num = 79;

// num2 = (num - (num%5)) + 5

// console.log(num2);

let grades = [73,67,38,33]

function gradingStudents(grades) {

let output = []

for(let grade of grades){
    if(grade % 5 == 0 || grade < 40){
        output.push(grade)
    }
    else{
        roundoff = (grade - (grade%5)) + 5
        if(roundoff - grade < 3){
            output.push(roundoff)
        }
        else{
            output.push(grade)
        }
    }
}
    return output;
}

console.log(gradingStudents(grades));