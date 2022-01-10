$(document).ready(function () {

    $('.btn,btn-primary,btn-block,btn_font').click(function() {
      var currentTextOnDisplay=$("#display").text();
      
      var newPressedInput=$(this).val();
      
    if(newPressedInput == "C" )
    {
        $("#display").text("");
    }
    else if (newPressedInput != "=")
    {
        var appendInput=true;
        if(newPressedInput == "+" || newPressedInput =="*" || newPressedInput=="-" || newPressedInput=="/" || newPressedInput=="." )
        
         {
           var len=currentTextOnDisplay.length
           var lastCharacter=currentTextOnDisplay.substring(len-1);
           if(lastCharacter == "+" || lastCharacter == "-" ||lastCharacter == "*" || lastCharacter == "/" || lastCharacter == "." )
           {
               appendInput= false;
           }
         }
    }

    if (appendInput == true)
    {
       var  newDisplayText= currentTextOnDisplay + newPressedInput;
       $("#display").text(newDisplayText);
    }
    if (newPressedInput == "=" ) 
    {
      //console.log($("#display").text());
     var result= Math.round(eval($("#display").text())*100)/100;
     //console.log(result);
     $("#display").text(result);
                       
    }
   });
   



});

