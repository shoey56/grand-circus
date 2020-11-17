
let bill=120;
let taxRate=1.06;

function CalculateBill(bill, taxRate){

    const plusTax = bill * taxRate;
    console.log(plusTax);
    console.log(`Your total is ${plusTax}`);
}


const total = CalculateBill(bill, taxRate);