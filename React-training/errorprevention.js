try{
    console.log(a,b);
    throw new ReferenceError('define variable a,b');
}
catch(err){
    console.log('error occured');
    console.log(err);
}

console.log('this line ')