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
document.getElementById("addItemStart1").innerHTML ="There are now: " + girls.unshift(" Frida", " Daja ") + " girl names in the array"; 
document.getElementById("addItemStart2").innerHTML = "There are now: " + boys.unshift(" Simon", " Lucke ") + " boy names in the array"; 
document.getElementById("addItemStart3").innerHTML = "There are now: " + all.unshift(" Sherry", " Heninrich", " Albert", " Eva ") + " names in the array"; 

//Add item in the end at the array with the push() method
document.getElementById("addItemEnd1"). innerHTML = "There are now: " + girls.push(" Anne-lise", " Vera") + " girl names in the array";
document.getElementById("addItemEnd2"). innerHTML = "There are now: " + boys.push(" Anders", " Brian") + " boy names in the array";
document.getElementById("addItemEnd3"). innerHTML = "There are now: " + all.push(" Ann", " Kasper", " Viggo") + " girl names in the array";

//Print out all 3 arrays with the new names added
document.getElementById("printAddArrays").innerHTML = "Girl array with new names: " + girls + "<br>" + 
                                                  "Boy array with new names: " + boys + "<br>" +
                                                  "The All array with new names: " + all;                                               



//Remove the first item of the array with the shift() method
document.getElementById("removeItemStart").innerHTML = girls.shift();
document.getElementById("removeItemStart").innerHTML = boys.shift();


//Remove item at the end of the array with the pop() method
document.getElementById("removeItemEnd").innerHTML = girls.pop();
//document.getElementById("removeItemEnd").innerHTML = boys;
