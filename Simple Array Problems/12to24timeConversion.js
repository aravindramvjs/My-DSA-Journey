// function to convert 12 hrs time to 24 hrs time

// let s = "03:59:00PM"
let s = '12:45:00PM'

function timeConversion(s) {
if (s.charAt(8) == 'A'){ 

    let hr = Number(s[0] + s[1]) // taking hrs as a num

    if(hr != 12){ // In am if it is not 12 just remove am after time
        let noam =  s.replace('AM','') 
        return(noam);
    }
    else{ // In am if it is 12 change hr to 00
        hr = '00';
        let newtime = hr + s.slice(s.indexOf(':')) // changing hr to 00
        let noam =  newtime.replace('AM','') //removing am after time
        return(noam);
    } 
   
}
else if(s.charAt(8) == 'P'){

    let hr = Number(s[0] + s[1])

    if(hr < 12 ){ // hr is less than 12; add 12 if hr is 2 and 12 => 14hrs
        hr += 12;
    }
    else if(hr == 12){ //if the hr is equal 12 it is mid noon just remove 12
        let nopm =  s.replace('PM','') 
        return(nopm);
    }

    let newtime = hr + s.slice(s.indexOf(':'))
    let nopm =  newtime.replace('PM','') 
    return(nopm);
}
}


// let s = "03:59:00PM"
console.log(timeConversion(s))

