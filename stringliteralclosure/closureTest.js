//testing closure
var external_variable = 10;
var closed = (function(){ //closure starts
  internal_variable = 20;
  
  console.log("testing external variable inside closure :"+external_variable);
  
  function inetrnalFunction(){
    console.log("internal_variable ="+internal_variable);
    //modifying internal_variable
    internal_variable = "Internal to String";
    return internal_variable;
  
  }
  
  
  return {
    internal_variable:internal_variable,
    inetrnalFunction:inetrnalFunction
    
  }
  
}());

console.log("internal_variable outside closure is "+internal_variable);
console.log("internal_variable using . outside closure is "+ closed.internal_variable);
