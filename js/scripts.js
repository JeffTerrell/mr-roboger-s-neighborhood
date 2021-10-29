// Business Logic

const userInput = 5;

function arrayFromInput (number) {
  arrayUserInput = Array.from({length: number+1}, (v, i) => i);
  return arrayUserInput;
}

arrayFromInput(userInput);