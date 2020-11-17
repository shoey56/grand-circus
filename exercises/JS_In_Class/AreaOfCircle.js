function getAreaOfCircle(radius){
    const area = 3.14 * Math.pow(radius, 2);
    return area;
}

let radius = 5;

let area = getAreaOfCircle(radius);
console.log(area);