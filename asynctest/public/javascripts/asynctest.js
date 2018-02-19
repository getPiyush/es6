/////////// CALLBACK FUNCTIONS ///////////////////
//SET OUTPUT
var display = document.getElementById("resultDiv");
var button = document.getElementById("testButton");
var asyncsyncTest = document.getElementById("asyncsyncTest");


document.getElementById("clearButton").onclick = ()=>clearLogs();
display.innerHTML = "Loaded...";
function log(str){
	display.innerHTML = display.innerHTML+"<br>"+str;
}
function clearLogs(){
		display.innerHTML = "";

}



function asyncCall(){
//When settimeout is set to 0 it becomes async function
setTimeout(function(){
	log("Async call will wait for callstack to be empty to execute. hence its being called now");
}, 0);

};

asyncCall();

function syncCall(){
    let str = "My name is piyush plaban praharaj";
    log(modifyString(str, trimLast5FromEnd));
    log(modifyString(str, removeSpacesInStyle));
    log(modifyString(str, tagify));

    chainCaller(10, "Piyush", function(var1, var2) {
        let tmp = var1 * var2.length;
        let tmp2 = var2 + tmp + " ";
        chainCaller(tmp, tmp2, function(var1, var2) {
          let tmp = var1 + var2.length;
          let tmp2 = var2 + tmp + " ";
          chainCaller(tmp, tmp2, function(var1, var2) {
            let tmp = var1 - var2.length;
            let tmp2 = var2 + tmp + " ";
      
            log(tmp2);
          })
        })
      
      });
}


asyncCall();




//CALLBACK EXAMPLE 1, SIMPLE
////////////////////////////////
//callee 1
function trimLast5FromEnd(str){
	return str.slice(0, str.length-5);
}
//callee 2
function removeSpacesInStyle(str){
	return str.replace(/ /g, "::");
}
//callee 3
function tagify(str){
	return  "&lt;"+str+"&gt;";
}

//caller
function modifyString(string, fun){
	return fun(str);
};




let str = "My name is piyush plaban praharaj";
log(modifyString(str, trimLast5FromEnd));
log(modifyString(str, removeSpacesInStyle));
log(modifyString(str, tagify));


//////////////////////////////////////////////////











//CALLBACK EXAMPLE 2 CHAINED
//////////////////////////////////
function chainCaller(var1, var2, callerfun) {
  callerfun(var1, var2);

}

chainCaller(10, "Piyush", function(var1, var2) {
  let tmp = var1 * var2.length;
  let tmp2 = var2 + tmp + " ";
  chainCaller(tmp, tmp2, function(var1, var2) {
    let tmp = var1 + var2.length;
    let tmp2 = var2 + tmp + " ";
    chainCaller(tmp, tmp2, function(var1, var2) {
      let tmp = var1 - var2.length;
      let tmp2 = var2 + tmp + " ";

      log(tmp2);
    })
  })

});

log("//////////////////// <br>hopefully now the callstack is empty!")


///////////////////////






//Events
function buttonClicked(e){
	log("button click "+e.target.formAction);
 // console.log(e);
};

button.addEventListener("click",buttonClicked);

button.onclick = function (){
	log("button onclick ");
}


//keypress
document.onkeypress = (e)=>{
	log(e.key);
};

asyncsyncTest.onclick = (e) => {
    asyncCall();
    syncCall();
};
