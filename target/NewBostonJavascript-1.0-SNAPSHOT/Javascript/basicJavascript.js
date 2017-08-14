/* 
 * The code in this file is placed by the hierarchy it is being printed out.
 * 
 * When write-method is used it will be printed out after the methods that use innerHTML
 */

//This is a single-line comment in javascript
/*This is a multiplied comment in javascript*/



//Statements that refers to div-id 'statement' in the HTML page
document.getElementById("statements").innerHTML = "<h3>I love Hummus</h3> <h3>and Hummus love me</h3>";



//Variable types
var product = "Milk";
var price = 20;
var discount = 9.54;
var newPrice = price - discount;

//En anden måde at skrive DISCOUNT OG NEW PRICE på (præcis det samme)
//var discount = -9.54;
//var newPrice = price + (discount);

document.getElementById("variableTypes").innerHTML = "You have to pay: " + "<b>" + price + " kr. " + "</b>" + "for " + "<b>" + product + "</b>";
document.write("You got a discount on: " + "<b>" + discount + " kr." + "</b>" + "<br>");
document.write("Your new price is: " + "<b>" + newPrice + " kr." + "</b>" + " for the " + "<b>" + product + "</b>" + "<hr>");



//Statements that are printed out on the HTML page
document.write("<h1>Hey brown cow!</h1> <h2>What is the date now?</h2>" + Date() + "<hr>");



//Variable that use write-method to print out result
var myVariable = 30;
document.write("<h4> This is my variable: " + myVariable + "</h4>" + "<hr>");
