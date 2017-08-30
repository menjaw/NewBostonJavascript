/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*DIFFERENT WAYS TO DECLARE AN ARRAY*/

//Way1
var people = ["Fredy", "Simon", "Shean", "Betty", "Sheala"];
document.write(people);

//Way2
var animals = new Array("Horse", "Cow", "Duck", "Cat", "Dog");
document.write(animals);

//Way3
var things = new Array(3);
things[0] = "Table";
things[1] = "Chair";
things[2] = "Car";
document.write(things);
document.write(things[2]);

//Way 4 - don't know the size of the array from start and have to use it later
var foodStuff = new Array();

var amount = 10;
var food = "Chicken";

foodStuff[0] = "Coffee";
foodStuff[1] = "Milk";
foodStuff[2] = "Cafe Latte";
foodStuff[3] = amount;
foodStuff[4] = food;

document.write(foodStuff);