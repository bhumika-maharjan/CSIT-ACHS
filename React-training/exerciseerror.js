function addTwoNums(a,b){
    
    if (typeof (a)!=='number'){
        throw new
        ReferenceError('the first argument is not a number');
    }
    
    else if(typeof (b)!=='number'){
        throw new
        ReferenceError('the second argument is not a number'); 
    }
    else{
        console.log(a+b);
    }
    console.log("It still works")
    try{
        console.log(a,b);
        addTwoNums(5,"5");
    }
    catch(err){
        console.log("Error!", err);
    }

}

