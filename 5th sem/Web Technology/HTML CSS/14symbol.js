const key1 = Symbol("key");
const key2 = Symbol("key");

console.log(key1 == key2);

const email = Symbol("email");

const person = {
    name: 'Bhumika',
    age: 20,
    [email]: "bhumika2060@gmai.com",
}

for (key in person) {
    console.log(person[key]);
}

console.log(person[email])