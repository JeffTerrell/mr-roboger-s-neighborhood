// Business Logic

const userInput = 5;
let userOutput =[];

function arrayFromInput (number) {
  arrayUserInput = Array.from({length: number+1}, (v, i) => i);
  return arrayUserInput;
}

arrayFromInput(userInput);


const numberOne = [1, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 31, 41, 51];

function numberIdentifierLoop (number) {
  for (let i = 0; i < number.length; i++) {
    if (numberOne.includes(i)) {
      userOutput.push("beep");
    } else {
      userOutput.push(i);
    }
  }
}

numberIdentifierLoop(arrayUserInput);  
console.log(userOutput);