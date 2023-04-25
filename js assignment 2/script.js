// const markMass = 95;
// const markHeight = 1.88;

// const johnMass = 85;
// const johnHeight = 1.76;


let markMass =prompt("enter body weight of mark in Kg");
let markHeight =prompt("enter the heigh of mark in meter");

let johnMass =prompt("enter body weight of john in Kg");
let johnHeight =prompt("enter the height of john in meter");


markBMI = markMass/(markHeight**2);

johnBMI = johnMass/(johnHeight**2);

console.log("markBMI",markBMI)

console.log("johnBMI",johnBMI)

console.log(markBMI>johnBMI)

if(markBMI>johnBMI){
    //  true;
     console.log(`if markBMI is higher than john, which ${johnBMI}`,true)
     alert("if markBMI is higher than john",true)
}else{
    console.log(`if markBMI is lower than john,which is ${markBMI}`,true)
    alert("if markBMI is lower than john",true)

}



// EMI calc.....preson loan......(amount,interest Rate,Loan Tenure).......

// E= P.r.(1+r)^n/

// https://emicalculator.net/