//can customize errors

try{
    const result = riskyOperation();
    console.log(result);
}catch(error){
    console.log("Error Occured", error);
    if(error instanceof ReferenceError){
        throw new Error("Not defined");
    }
}finally{
    console.log('I always run')
}