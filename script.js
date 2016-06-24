//Create a new HTML5 document and save it as assignment1.html. Add all of the necessary HTML5 code and titled your document “Assignment 1”. Next, create an external JavaScript file titled script.js and link it into the HTML document. You will be performing all of the tasks below within script.js. Every problem should be commented out. So, you’ll do step 1, make sure you have it the way you want it to look or function, and then comment it out. Then move to step 2, etc. Make sure you identify each step by adding a heading such as 
// STEP 1, // STEP 2, // STEP 3, etc. before each step.


/*====================================================================
//STEP 1.   Convert the following identifiers to Camel Case notation:

var some_month;
function theMonth 		// function to return current month
current-month 		// a constant
var summer_month; 		// an array of summer months
MyLibrary-afunction 	// a function
*//*


CURRENT-MONTH;   // a constant - not camelCase per class discussion
someMonth
theMonth   // function to return current month
summerMonth   // an array of summer months
myLibraryAFunction  // a function 
====================================================================*/


/*====================================================================
//STEP 2.   Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression    

14 / 2 * 6 + 3 //numeric literal expression
"this is a string expression" //string literal expression
isValid = false; //a Boolean literal expression
v3 = null; //null literal expression.
====================================================================*/


/*====================================================================
//STEP 3.   Give me two examples of complex/variable expressions.    

var anExpression = Math.PI * radius * radius;
var anotherExpression = "(" + aSecondExpression + ") % (" + anExpression + ")";
====================================================================*/


/*====================================================================
//STEP 4.   Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation to accomplish this task.    

var firstName, lastName, address, city, state, zipCode, yourAge, referralSource, mayWeContactYou;
====================================================================*/


/*====================================================================
//STEP 5 Take the 9 variables that you created above and demonstrate 3 , methods for declaring and assigning values to those variables    

var firstName = "Jennie";  //assigns string value to firstName variable
var mayWeContactYou = true; // boolean value is true
var zipCode = 92133; //sets numeric value
*/

/*====================================================================
//STEP 6.   Create 3 variables. For the first variable, add a number and a string and use console.log to display the coerced result. For the second variable, add a Boolean and a string and display the coerced result. For the third variable, add a number and a Boolean and display the coerced result.  

var yourAge = window.console.log(23 + ' years'); //add a number and a string and use console.log to display the coerced result

var youAreOld = true;
window.console.log(youAreOld + ' as dirt'); //add a Boolean and a string and display the coerced result

window.console.log(7 + youAreOld); //add a number and a Boolean and display the coerced result
====================================================================*/


/*====================================================================
//STEP 7.	Demonstrate your knowledge of hoisting. Write a program that returns undefined within the console window because of hoisting.

var favorite = "cake";

window.console.log("My favorite dessert is " + favorite + " of the " + type + " variety.");

var type = "German Chocolate"; // this comes back undefined due to it not being  assigned before use.  should be called out at top of code.
*/

/*====================================================================
//STEP 8.	Is the following string literal valid? If not, how would you fix it?

var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."';
console.log(someString);
*//*

It is not valid. Corrected below.

var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
window.console.log(someString);
====================================================================*/


/*====================================================================
//STEP 9.	Create a variable that produces a null value in the console window. Also, create a variable that produces an undefined value in the console window.

window.console.log('type:' + typeof v1); //undefined

var v2 = null;
window.console.log('type:' + typeof v2); //type: object
window.console.log('value: ' + v2); // value null
====================================================================*/


/*====================================================================
//STEP 10.	Use the typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.

typeof "Jennie"   // Returns string
typeof NaN // Returns number
typeof true    // Returns Boolean
typeof new Date()   // Returns object
typeof myBook    // Returns undefined
====================================================================*/


/*====================================================================
//STEP 11.	Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows: 

Hello Zak Ruvalcaba, welcome to the JavaScript class!

Substitute my name for your name. Although not necessary, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma
*//*

alert('Hello ' + 'Jennie Ryan' + ', welcome to the JavaScript class!');
====================================================================*/


/*====================================================================
//STEP 12.	Declare a variable called name and set it equal to your name. Then, substitute your name in the previous alert string with the variable instead.

var name = 'Jennie Ryan';
window.alert('Hello ' + name + ', welcome to the JavaScript class!');
*/

/*====================================================================
//STEP 13.	Declare a variable called course and set it equal to “JavaScript”. Then, rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.

var name = 'Jennie Ryan';
var course = 'JavaScript';
window.alert('Hello ' + name + ', welcome to the ' + course + 'class!');
====================================================================*/


/*====================================================================
//STEP 14.	Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:

Hello Zak Ruvalcaba.
Welcome to the JavaScript class!
*//*


var name = 'Jennie Ryan';
var course = 'JavaScript';
window.alert('Hello ' + name + '.' + '\nWelcome to the ' + course + ' class!');
====================================================================*/


/*====================================================================
//STEP 15.	Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable. 

var name = window.prompt("Please enter your name:");
var course = 'JavaScript';
window.alert('Hello ' + name + '.' + '\nWelcome to the ' + course + ' class!');
====================================================================*/


/*====================================================================
//STEP 16.	Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.

var name = window.prompt("Please enter your name:");
var course = window.prompt("Please enter what class you're taking:");
window.alert('Hello ' + name + '.' + '\nWelcome to the ' + course + ' class!');
====================================================================*/


/*====================================================================
//STEP 17.	Assign the value 10 to x on a new line. Assign the value 20 to y on a new line. Display the sum of those two numbers in the console window. 

var x = 10;
var y = 20;
window.console.log(x + y);
====================================================================*/


/*====================================================================
//STEP 18.	Declare a variable called x and assign it a value of 20. Next, add and assign 20 to that variable and display the result in the console window. The result should be 40.

var x = 20;
window.console.log(x += 20);
====================================================================*/


/*====================================================================
//STEP 19.	Declare a variable called x and assign it a value of 20. Next, multiply and assign 5 to that variable and display the result in the console window. The result should be 100.

var x = 20;
window.console.log(x *= 5);
====================================================================*/

/*====================================================================
//20.	Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3. Next, divide and assign 1 to that variable and display the result in the console window. The result should be 2. If you got 6.66 try again.

var x;
x = 20 % 3;
window.console.log(x /= 1);
====================================================================*/

/*====================================================================
//STEP 21.	Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.

var x = 10;
var y = 20;
window.console.log(x >= y !== true);
====================================================================*/


/*====================================================================
//STEP 22.	Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.

var x = 10;
var y = 20;
window.console.log(x === 5 && x === y);
====================================================================*/


/*====================================================================
//STEP 23.	Use the new operator to create a new Object called “widget”. Within the console window, use the typeof operator to display the type of variable widget is

var widget = {};
window.console.log(typeof widget);
====================================================================*/

/*====================================================================
//STEP 24.	Using the instanceof operator, write an application that returns true within the console window if the widget variable is an instance of an object.

var widget = {};
if (widget instanceof Object) {
    window.console.log("true");
}
====================================================================*/


/*====================================================================
//STEP 25.	Without modifying the variable declaration and assignment, rewrite the previous application so that it returns false.

var widget = "widget";
window.console.log(widget instanceof String); //
====================================================================*/
