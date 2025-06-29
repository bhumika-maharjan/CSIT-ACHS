const nums = [1, 2, 3];

function add(a, b, c) {
    return a + b + c;
}
function adds(...numbers) {
    return numbers[0] + numbers[1] + numbers[2];
}
function addss() {
    return arguments[0] + arguments[1] + arguments[2];
}

console.log(add(1,2,3));
console.log(add(1,2,"3"));
console.log(add(...nums));
console.log(adds(...nums));
console.log(addss(nums));