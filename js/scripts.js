// Business Logic

function arrayFromInput (number) {
  arrayUserInput = [...Array(number+1).keys()];
  return arrayUserInput;
}


function numberIdentifierLoop (number) {
  const number1 = parseInt(number);
  arrayFromInput(number1);
  const userOutput =[];
  for (let i = 0; i < arrayUserInput.length; i++) {
    if ((i+'').indexOf('3') > -1) {
      userOutput.push("Won't you be my neighbor?");
    } else if ((i+'').indexOf('2') > -1) {
      userOutput.push("boop");
    } else if ((i+'').indexOf('1') > -1) {
      userOutput.push("beep");  
    } else {
      userOutput.push(i);  
    }
  }
  return userOutput.join(", ");
}


// User Interface Logic
$(document).ready(function() {
  $("#robogerform").submit(function(event) {
    event.preventDefault();
    $("#error").hide();
    // $("#robogeroutput").hide()
    
    $("#robogeroutput").html(numberIdentifierLoop($("#userinput").val()));
    console.log("userinput");
    // reset submit box to empty after clicking submit button
  });
});