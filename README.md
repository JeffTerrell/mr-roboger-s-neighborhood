# _{Application Name}_

#### By _**{List of contributors}**_

#### _{Brief description of application}_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Tests

### Describe: arrayFromInput()

* Test: "It should return the user inputted number into an array containing a sequence of numbers from 0 to the inputted number"
* Code:
* const userInput = "5";
* arrayFromInput(userInput);
* Expected Output: "0,1,2,3,4,5"

### Describe: numberIdentifierLoop()
* Test: "It should return "beep" in a different array if the user inputted number contains the digit 1."
* Code:
* const userInput = "11";
* numberIdentifierLoop(arrayUserInput);
* Expected Output: "0, beep, 2, 3, 4, 5, 6, 7, 8, 9, beep, beep"

* Test: "It should return "boop" if the inputted number contains the digit 2 and "beep" if inputted number contains the digit 1."
* Code:
* const userInput = "12";
* numberIdentifierLoop(arrayUserInput);
* Expected Output: "0, beep, boop, 3, 4, 5, 6, 7, 8, 9, beep, beep, boop"

* Test: "It should return "Won't you be my neighbor?" if inputted number contains the digit 3, "boop" if inputted number contains the digit 2, and "beep" if inputted number contains the digit 1."
* Code:
* const userInput = "13";
* numberIdentifierLoop(arrayUserInput);
* Expected Output: "0, beep, boop, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, beep, beep, boop, Won't you be my neighbor?"

* Test: "It should return "Won't you be my neighbor?" for the number 31 within the output array"
* Code:
* const userInput = "31";
* numberIdentifierLoop(arrayUserInput);
* Expected Output: "0, beep, boop, Won't you be my neighbor?, 4, .........(29)boop, (30)Won't you be my neighbor?, (31)Won't you be my neighbor?)"

* Test: "It should return "boop?" for the number 21 within the output array"
* Code:
* const userInput = "21";
* numberIdentifierLoop(arrayUserInput);
* Expected Output: "0, beep, boop, Won't you be my neighbor?, 4, .........(19)beep, (20)boop, (21)boop"

* Test: "It should return "Won't you be my neighbor?" for the number 13 within the output array"
* Code:
* const userInput = "13";
* numberIdentifierLoop(arrayUserInput);
* Expected Output: "0, beep, boop, Won't you be my neighbor?, 4, .........(11)beep, (12)boop, (13)Won't you be my neighbor?"


## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

Copyright (c) _date_ _author name(s)_