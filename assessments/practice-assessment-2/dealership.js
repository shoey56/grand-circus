/**Declare a function named printTens
○ Parameter(s): n/a
○ Functionality: uses a loop to log, one by one, the tens from 10 to 100. (i.e. 10, 20,
30 … 100)*/
function printTens(){
    let tens = 0;
    while (tens < 100){
        tens += 10;
        console.log(tens);
    }
}
printTens()

/**Declare a function named countUntilTens
○ Parameter(s): step
○ Functionality: uses a while loop to log, one by one, the numbers starting at
step and adding step each time. It stops when the number is divisible by ten.
For example, if step is 4, it will print 4, 8, 12, 16, 20. It will stop at 20 because 20
is divisible by 10. */
function countUntilTens(step){
    let divTen = false;
    let baseStep = step
    while(divTen === false){
        let mod = step % 10;
        if (mod === 0){
            console.log(step);
            divTen = true;
        }else{
            console.log(step);
            step = step + baseStep;
        }
    }
}
countUntilTens(4);


/**Declare a function named hasVowels
○ Parameter(s): word
○ Functionality: returns true if the provided word contains one or more vowels and
false if it contains no vowels. */
function hasVowels(word){
    const vowels = ["a", "e", "i", "o", "u"];
    for (vowel of vowels){
        console.log(vowel);
        if (word.includes(vowel)){
            return true;
        }
    }
    return false
}
console.log(hasVowels("blue"));


/** Declare a function named testTemperature
○ Parameter(s): desiredTemp, actualTemp
○ Functionality: Given a desiredTemp and an actualTemp, tell the heating &
cooling system what to do. Log one of these three things:
■ “Run A/C”
■ “Run heat”
■ “Stand by”*/
function testTemperature(desiredTemp, actualTemp){
    if (actualTemp < desiredTemp){
        console.log("Run heat");
    }else if (actualTemp > desiredTemp){
        console.log("Run A/C");
    }else{
        console.log("Stand by");
    }
}
testTemperature(65, 70);


/**Declare a variable named dealership that is initialized to an array with the following
objects: */
var dealership = [
    {make: "Toyota", model: "Prius", year: 2020, hybrid: true},
    {make: "Toyota", model: "Prius", year: 2021, hybrid: true},
    {make: "Ford", model: "F-150", year: 2015, hybrid: false},
    {make: "Ferrari", model: "Enzo", year: 2004, hybrid: false}
];

/** Declare a function named findCars
○ Parameter(s): arrayOfCars, model
○ Functionality: When called, this function will return an array of all the cars from
the arrayOfCars argument that have the specified model argument. If there are
no cars that have that model, return an empty array. */
function findCars(arrayOfCars, model){
    let modelArray = arrayOfCars.filter(selected => selected.model === model);
    return modelArray; 

}
console.log(findCars(dealership, "Prius"));


/**Declare a function named addCar
○ Parameter(s): arrayOfCars, make, model, hybrid
○ Functionality: construct an object and add it to the beginning of the
arrayOfCars. Use the parameters for the values, but always set the year to
2021. The object should have the same property names as the objects already
in the array.
 */
function addCar(arrayOfCars, make, model, hybrid){
    let newCar = {make: make, model: model, year: 2021, hybrid: hybrid}
    arrayOfCars.unshift(newCar);
    console.log(arrayOfCars);
}
addCar(dealership, "Ford", "Bronco", false);


/**Declare a function named areThereAnyHybridsForSale
○ Parameter(s): arrayOfCars
○ Functionality: when called, this function will return true if there is a hybrid car in
the arrayOfCars argument and false otherwise. */
function areThereAnyHybridsForSale(arrayOfCars){
    for (vehicle of arrayOfCars){
        if (vehicle.hybrid === true){
            return true;
        }
    }
    return false;
}
console.log(areThereAnyHybridsForSale(dealership));