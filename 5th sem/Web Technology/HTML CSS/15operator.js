let a = 1;
let b = "1";

console.log(a !=b);
console.log (a !== b);

const isTrue = true || false;
console.log(isTrue);

const type = typeof a;
console.log(type)
console.log(typeof type)

const type1 = typeof b;
console.log(type1)

// //spread operator
// const originalArray = [1, 2, 3];
// const copyarr1 = originalArray; //copyarray has address of oringinal array soo changes in copyarr will change original
// copyarr1[1] = 5;
// console.log(originalArray, copyarr1) 

const originalArray = [1, 2, 3];
const copyarr1 = [...originalArray]; 
copyarr1[1] = 5;
console.log(originalArray, copyarr1) 

//merge and adding
const arr1 = [1, 2, 3];
const arr2 = [5, 4, 7];
const merged = [12, ...arr1, 13, ...arr2, 55];
console.log(merged);

const person1 = {
    name: "Ram",
    age: 24,
};

// const person2 = person1;
// person2.address = "Lalitpur";
// console.log(person1);
// console.log(person2); // both have same value


const person2 = {...person1, age:26, address: "Lalitpur"};
console.log(person1);
console.log(person2); // after using spread they have different values {spread = ...}
