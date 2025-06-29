const myarr = [1, 2, 3, 4, 5]
const person = {
    myname: "Bhumika",
    myaddr: "Bagbazar",
};

// const first = myarr[0]
// const second = myarr[1]

const [first, second, ...remaining] = myarr;
console.log(first,second);
console.log(remaining);

// const myname = person.myname;
// const key = "myaddr"
// const myaddr = person["myaddr"];
const { myname, myaddr } = person;


console.log(myname);
console.log(myaddr);