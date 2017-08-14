/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//VARIABLE TYPES
var variable = "<b>" + " variable " + "</b>";
var aString = " A string is a " + variable + "and the name of a variable is the identifiers";
var aNumber = 30;
var aBoolean = false;
var anArray = [0,1,2,3,4,5,6,7,8,9];
var anObject = {name:'Heinrich', age:33};
var aDate = new Date();
var aFunction;

//String
document.getElementById("aString").innerHTML = aString;

//Number
document.getElementById("aNumber").innerHTML = "A number is a" + variable + "and this one is set to: " + "<b>" + aNumber + "</b>";

//Boolean
document.getElementById("aBoolean").innerHTML = "This boolean is setted to: " + "<b>" + aBoolean + "<b>";

//3 types of Objects
document.getElementById("anArray").innerHTML = "An Array: " + anArray + " is returned as an Object";
document.getElementById("anObject").innerHTML = "An Object could be a person: " + anObject;
document.getElementById("aDate").innerHTML = "Date is also an object: " + aDate;

//Function
document.getElementById("aFunction").innerHTML = "A function";


/*
 * This will be printet out, even if it doesn't have a reference ID on the HTML page
 * It will be placed in the bottom of the page
 */
document.write("'document.write' is used to print this sentence, it has no ID-reference at the HTML page");