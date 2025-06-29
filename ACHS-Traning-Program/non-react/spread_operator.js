const fruits = ["Apple", "Banana", "Mango"];
const car = ["R-35", "Miata", "911"];
var fruitsAndCar = [...fruits, ...car];
console.log(fruitsAndCar);

console.log( "=============================================");

const car_1 = {
    model: "911",
    color: "red"
}

console.log( "=============================================");

console.log("var car_2 = car_1","\n");
var car_2 = car_1;
console.log("car 1", car_1);
console.log("car 2", car_2);

console.log( "=============================================");

car_2.color = "black";
console.log("car 1", car_1);
console.log("car 2", car_2);

console.log("var car_3 = {...car_1};", "\n");
var car_3 = {...car_1};

console.log("car 1", car_1);
console.log("car 2", car_3);

console.log( "=============================================");

car_3.color = "purple";
console.log("car 1", car_1);
console.log("car 2", car_3);
