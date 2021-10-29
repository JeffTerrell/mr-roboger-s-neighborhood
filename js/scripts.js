// Business Logic

const userInput = 5;
let userOutput =[];

function arrayFromInput (number) {
  arrayUserInput = Array.from({length: number+1}, (v, i) => i);
  return arrayUserInput;
}
arrayFromInput(userInput);
console.log

function numberIdentifierLoop (number) {
  for (let i = 0; i < number.length; i++) {
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
}
numberIdentifierLoop(arrayUserInput);  
console.log(userOutput);

