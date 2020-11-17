/**Heating/Cooling exercise:
Define two variables: actualTemp and a desiredTemp. Write conditionals to tell the heating &
cooling system what to do. Log one of these three things: Run A/C, Run heat, or Standby.
*/

let actualTemp = 70;
const desiredTemp = 70;

if (actualTemp > desiredTemp){
    console.log("Run A/C");
}else if (actualTemp < desiredTemp){
    console.log("Run heat");
}else{
    console.log("Standby");
}



/**Extended Challenges second exercise:
Start with two variables: tempCelsius (a number) and targetUnit (a string, either “C”, “F”, or
“K”). Write a switch statement that checks the targetUnit and logs the temperature converted
to that unit. Notes: K stands for Kelvin. C requires no conversion, print out the original temp. */

const tempCelsius = 14;
const targetUnit = "K";

switch(targetUnit){
    case "C":
        console.log("The temperature is " + tempCelsius + " degrees Celsius");
        break;
    case "F":
        let conversionF = tempCelsius * 1.8 + 32;
        console.log("The temperature is " + conversionF + " degrees Fahrenheit");
        break;
    case "K":
        let conversionK = tempCelsius + 273.15;
        console.log("The temperature is " + conversionK + " degrees Kelvin");
        break;
}
