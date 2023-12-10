// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.

let aliceRating = [17, 28, 30]
let bobRating   = [99, 16, 8]

function compareTriplets(a,b){

    let alicepoints = 0;
    let bobpoints = 0;
    let totalRating = [];

    for(let i = 0; i < a.length; i++){
        if(a[i] > b[i]){ // if alice rating is higher alice gets 1 point
            alicepoints += 1;
        }
        else if(a[i] < b[i]){ // instead of else I used else if coz both rating are equal else addes points to bob
            bobpoints += 1;
        }
    }

    totalRating.push(alicepoints); // pushing alice points to total rating
    totalRating.push(bobpoints);  //  pushing bob points to total rating
    return(totalRating)

}

console.log(compareTriplets(aliceRating,bobRating));

