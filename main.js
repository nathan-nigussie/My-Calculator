var display_box=document.getElementById("display");
function userClickButton(input){
    //console.log(input);
    var oldInput=display_box.value; // the first Input from the user
    var newInput=oldInput + "" + input;
    display_box.value=newInput;
}
function evaluateInputs() {
    var userInput=display_box.value;
    var result=eval(userInput)
    display_box.value=result;
}

function clearDisplay() {
    display_box.value="";
}


var display_box=document.getElementById("display");
