let addTwoNumbers = (a, b) => {
    try {
        if (typeof (a) == "number" ) {
            throw new ReferenceError();
        }
        else if (typeof (b) != "number"){  
            throw new ReferenceError();
        }
        else {
            console.log(a + b);
        }
    } catch (err) {
        console.log("Error!", err);
    }
};
addTwoNumbers(5, "5");