function getAreaOfSquare(side){
    const area = Math.pow(side, 2);
    return area;
}

let side = 5;

let area = getAreaOfSquare(side);
console.log(area);