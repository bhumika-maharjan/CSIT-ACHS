// let someVar = null;
// console.log(someVar);


let person = {
    name: "Bhumika",
    age: 24,
};

console.log(person)

const myarr = [1, 23, 3, "s", true];
console.log(myarr) 

function add(a, b) {
    console.log(a+b);
}

add(2,3)
add.name = "Add function"
add.concat = function (a,b) {
    console.log(`${a}${b}`)
}

console.log(add.name)
add.concat(2,"3")

const firstname = 'Bhumika'
const surname = 'Maharjan'

const fullName = firstname + ' ' + surname ;
const fullName2 = `My name is ${firstname} ${surname}`
console.log(fullName);
console.log(fullName2)