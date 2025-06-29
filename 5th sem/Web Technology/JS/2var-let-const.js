// you can redeclare variable with same name with var
// weird
var myname = "Bhumika";
myname;
myname = "Bhumi";
myname;
var myname = "Vumika";
myname;

// you cannot redeclare variable with same name with let
let mysurname = "Maharjan";
mysurname;
mysurname = "Mhrjn";
mysurname;
// let mysurname = "aarko aalu";   //  <------------------- error

// var is not scoped within block
// block means within curly braces like of for loops

var gods = ["ram", "laxman", "krishna"];
var weapons = ["bow", "arrow", "sudarsan"];

for (var item of gods) {
  // make it let
  console.log(item);
  for (var item of weapons) {
    // make it let
    //
  }
  console.log(item);
}

const mymiddlename = "aalu";
mymiddlename;
// mymiddlename = "pidalu";     //  <----------------- error

const myarray = ["apple", "ball"];
myarray;
myarray.push("cat");
myarray;
myarray.pop();
myarray;

const myarray2 = Array(5);
myarray2;
myarray2[0] = "apple";
myarray2;
