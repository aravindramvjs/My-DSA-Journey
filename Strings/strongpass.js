// function strongPassword(n, password) {
//     let numbers = "0123456789"
//     let lower_case = "abcdefghijklmnopqrstuvwxyz"
//     let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     let special_characters = "!@#$%^&*()-+";
//     let numcount = 0;
//     let lowerstrcount = 0;
//     let upperstrcount = 0;
//     let specialcharcount = 0;

//     for (let pass of password) {
//         for (let num of numbers) {
//             if (pass == num) {
//                 numcount += 1;
//             }
//         }
//         for (let lowerlet of lower_case) {
//             if (pass == lowerlet) {
//                 lowerstrcount += 1;
//             }
//         }
//         for (let upperlet of upper_case) {
//             if (pass == upperlet) {
//                 upperstrcount += 1;
//             }
//         }
//         for (let speciallet of special_characters) {
//             if (pass == speciallet) {
//                 specialcharcount += 1;
//             }
//         }
//     }

//     if(n >= 4){
//         let invalid = 0 ;
//             if(numcount < 1){
//                 invalid +=1;
//                 console.log("Strong Password consists atleat 1 number");
//             }
//             if(lowerstrcount < 1){
//                 invalid +=1;
//                 console.log("Strong Password consists atleat 1 lower character");
//             }
//             if(upperstrcount < 1){
//                 invalid +=1;
//                 console.log("Strong Password consists atleat 1 upper character");
//             }
//             if(specialcharcount < 1){
//                 invalid +=1;
//                 console.log("Strong Password consists atleat 1 special character");
//             }

//             if(invalid == 0 && n < 6){
//                 invalid += Math.abs(6-n);
//                 console.log("Strong password atlest contain 6 character");
//             }
//             else if(invalid == 1 && n <= 5){     
//                 invalid += Math.abs(6-n)-1;
//                 console.log("Strong password atlest contain 6 character");
//             }

//             if(invalid){
//                 console.log(`There ${invalid} requirement are missing in your password`);
//             }
//             else{
//                 console.log("Successfully Strong Password Created");
//             }
//             return(invalid);
           
//     }
//     else{
//         console.log(Math.abs(6-n));
//     }

// }

// password = "0#)+g!";
// n = password.length;
// strongPassword(n, password)



function minimumNumber(n, password){
    // password = password.split("");
    let count = 0;
    let lower = password.match(/[a-z]/g);
    let upper = password.match(/[A-Z]/g);
    let numbers = password.match(/[0-9]/g);
    let special = password.match(/[!@#\$%\^&\*\(\)\-\+]/g);
    if (!lower) count++;
    if (!upper) count++;
    if (!numbers) count++;
    if (!special) count++;
    if (6 - n > 0 && count <= 6 - n) return 6 - n;
    return count;
  };
  
//   console.log(minimumNumber(6, "0#)+g!"));
  console.log(minimumNumber(4, "4700"));
//   console.log(minimumNumber(4, "goxg"));
//   console.log(minimumNumber(4, "790"));
//   console.log(minimumNumber(7, "AUzs-nV"));
//   console.log(minimumNumber(11, "#HackerRank")); 