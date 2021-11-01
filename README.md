# Mr. Roboger Translator

#### By Jeff Terrell

#### A webpage that has a user input a number and generates a robot "like" translation

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScipt
* jQuery

## Description

Users can input any number of their choosing and hit the submit button to receive a robot translation from 0 all the to the inputted number. Get ready for "beep", "bloop", and more "beep".

## Specs

### Describe: arrayFromInput()

* Test: "It should return the user inputted number into an array containing a sequence of numbers from 0 to the inputted number"
* Code:
* const userInput = "5";
* arrayFromInput(userInput);
* Expected Output: "0,1,2,3,4,5"

### Describe: numberIdentifierLoop()
* Test: "It should return an error if the user input value is not a number"
* Code:
* const userInput = "hello";
* numberIdentifierLoop(arrayUserInput);
* Expected Output: "error"
***
* Test: "It should return "beep" in a different array if the user inputted number contains the digit 1."
* Code:
* const userInput = "11";
* numberIdentifierLoop(arrayUserInput);
* Expected Output: "0, beep, 2, 3, 4, 5, 6, 7, 8, 9, beep, beep"
***
* Test: "It should return "boop" if the inputted number contains the digit 2 and "beep" if inputted number contains the digit 1."
* Code:
* const userInput = "12";
* numberIdentifierLoop(arrayUserInput);
* Expected Output: "0, beep, boop, 3, 4, 5, 6, 7, 8, 9, beep, beep, boop"
***
* Test: "It should return "Won't you be my neighbor?" if inputted number contains the digit 3, "boop" if inputted number contains the digit 2, and "beep" if inputted number contains the digit 1."
* Code:
* const userInput = "13";
* numberIdentifierLoop(arrayUserInput);
* Expected Output: "0, beep, boop, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, beep, beep, boop, Won't you be my neighbor?"
***
* Test: "It should return "Won't you be my neighbor?" for the number 31 within the output array"
* Code:
* const userInput = "31";
* numberIdentifierLoop(arrayUserInput);
* Expected Output: "0, beep, boop, Won't you be my neighbor?, 4, .........(29)boop, (30)Won't you be my neighbor?, (31)Won't you be my neighbor?)"
***
* Test: "It should return "boop?" for the number 21 within the output array"
* Code:
* const userInput = "21";
* numberIdentifierLoop(arrayUserInput);
* Expected Output: "0, beep, boop, Won't you be my neighbor?, 4, .........(19)beep, (20)boop, (21)boop"
***
* Test: "It should return "Won't you be my neighbor?" for the number 13 within the output array"
* Code:
* const userInput = "13";
* numberIdentifierLoop(arrayUserInput);
* Expected Output: "0, beep, boop, Won't you be my neighbor?, 4, .........(11)beep, (12)boop, (13)Won't you be my neighbor?"


## Setup/Installation Requirements

* Create a new directory on your local machine.
* From a terminal, navigate to the newly created directory and use the "Git clone" command to copy the repository from this address (https://github.com/JeffTerrell/mr-roboger-s-neighborhood).
* Navigate to the main level of the cloned directory.
* Click to open index.html in a web browser.


## Known Bugs

* None at this time.

## License

[MIT](https://opensource.org/licenses/MIT)

Please contact Jeff Terrell via email with any issues, questions, or ideas.

Copyright (c) 2021 Jeff Terrell