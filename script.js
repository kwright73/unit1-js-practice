document.write("Javascript Works!");
console.log("Hello console!");
console.warn("This is only a test!");

let myName = "kaycee";
let WorkFromHome = true;
let side = 15;
let radius = 10;

console.log(myName);
console.log(WorkFromHome);
console.log(side);
console.log(radius);

console.log(`My name is ${myName}.`)
let area = side + radius;
console.log(`The radius of the circle is ${radius}.`)
console.log(`I work from home: ${WorkFromHome}`)

let squareArea = side * side;
let squarePerimeter = 4 * side;
let circleArea = Math.PI * radius * radius;
let circlePerimeter = 2 * Math.PI * radius;

console.log(`The sqaure area is ${squareArea} and the perimeter is ${squarePerimeter}.`)
console.log(`The circle area is ${circleArea} and the circle perimeter is ${circlePerimeter}.`)

let travelOptions = [ "foot", "bike", "car", "airplane" ];
console.log(`1) ${travelOptions[0]}`);
console.log(`2) ${travelOptions[1]}`);
console.log(`3) ${travelOptions[2]}`);
console.log(`4) ${travelOptions[3]}`);

var travelType = prompt ("How would you like to travel?");
let distance = 100;
let time = 0;
let cost = 0;
console.log(`travel Type: ${travelType}`);
if (travelType === "foot") {
    console.log("Walking is free! Speed is 3mph.");
    cost = 0;
    time = distance / 3;
}
  else if (travelType === "bike") {
    let rentBike = prompt("Do you need to rent the bike? (yes or no)");
    if (rentBike === "yes") {
console.log("Bike rental is $45! Speed is 10mph.");
cost = 45;
    }else {
    console.log("Biking is free! Speed is 10mph.");
    cost = 0;
}
    time = distance / 10;
  }
  else if (travelType === "car") {
    console.log("Driving is $0.25/mi. Speed is 60mph.");
    cost = 0.25 * distance;
    time = distance / 60;
  }
  else if (travelType === "airplane") {
    let passengerCount = prompt("how many passengers? ");
    console.log("Flying is $0.10/mi. Speed is 400mph.");
    cost = 0.10 * distance * passengerCount;
    time = distance / 400;
  } else {
    console.log(`Sorry. ${travelType} is an invaild option`);
  }
  console.log(`Traveling ${distance} miles by ${travelType} took ${time} hours and cost $${cost}!`);

  let costBar = "Cost: $$$";
  for (let i = 2; i < costBar; i++) {
    costBar += "$";
  }
  console.log(costBar);
  
  let costTime = "time: /";
  for (let n = 1; n < costTime; n++) {
    costTime += "/";
  }
  console.log(costTime);
