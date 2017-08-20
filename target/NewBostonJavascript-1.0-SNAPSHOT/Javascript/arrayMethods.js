/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Arrays declared and printet out 
var boys = ["Torben", " Gert", " Klaus", " Henning", " Alfred "];
var girls = ["Tine", " Helga", " Karen", " Greta", " Anna"];
document.getElementById("boys").innerHTML = "First array: " + boys;
document.getElementById("girls").innerHTML = "Second array: " + girls;


//Merge the 2 arrays with concat() and print out
var all = boys.concat(girls);
document.getElementById("concatArray").innerHTML = "This is the 2 array concated: " + all;



//Reduce array into a single String with join() and seperated with hyphen (-) and then comma (,)
document.getElementById("reduceArrayHyphen").innerHTML = "Array as hyphen seperated String: " + all.join("-");
document.getElementById("reduceArrayComma").innerHTML = "Array as comma seperated String: " + all.join(",");



//Add item at the start of the array with the unshift() method
document.getElementById("addItemStart1").innerHTML = "There are now: " + "<b>" + girls.unshift(" Frida", " Daja ") + "</b>" + " girl names in the array";
document.getElementById("addItemStart2").innerHTML = "There are now: " + "<b>" + boys.unshift(" Simon", " Lucke ") + "</b>" + " boy names in the array";
document.getElementById("addItemStart3").innerHTML = "There are now: " + "<b>" + all.unshift(" Sherry", " Heninrich", " Albert", " Eva ") + "</b>" + " names in the array";

//Add item in the end at the array with the push() method
document.getElementById("addItemEnd1").innerHTML = "There are now: " + "<b>" + girls.push(" Anne-lise", " Vera") + "</b>" + " girl names in the array";
document.getElementById("addItemEnd2").innerHTML = "There are now: " + "<b>" + boys.push(" Anders", " Brian", "Frede") + "</b>" + " boy names in the array";
document.getElementById("addItemEnd3").innerHTML = "There are now: " + "<b>" + all.push(" Ann", " Kasper", " Viggo") + "</b>" + " girl names in the array";

//Print out all 3 arrays with the new names added
document.getElementById("printAddItem").innerHTML = "Girl array with new names: " + girls + "<br>" +
        "Boy array with new names: " + boys + "<br>" +
        "The All array with the new added names: " + all;



//Remove the first item of the array with the shift() method
document.getElementById("removeItemStart1").innerHTML = "Girls: " + "<b>" + girls.shift() + "</b>" + " is removed from the list";
document.getElementById("removeItemStart2").innerHTML = "Boys: " + "<b>" + boys.shift() + "</b>" + " is removed from the list";
document.getElementById("removeItemStart3").innerHTML = "All: " + "<b>" + all.shift() + "</b>" + " is removed from the list";


//Remove item at the end of the array with the pop() method
document.getElementById("removeItemEnd1").innerHTML = "Girls: " + "<b>" + girls.pop() + "</b>" + " is removed from the list";
document.getElementById("removeItemEnd2").innerHTML = "Boys: " + "<b>" + boys.pop() + "</b>" + " is removed from the list";
document.getElementById("removeItemEnd3").innerHTML = "All: " + "<b>" + all.pop() + "</b>" + " is removed from the list";

//Print out all 3 arrays with the new names added
document.getElementById("printRemoveItem").innerHTML = "Girl array without the removed names: " + girls + "<br>" +
        "Boy array without the removed names: " + boys + "<br>" +
        "The All array without the removed names: " + all;

