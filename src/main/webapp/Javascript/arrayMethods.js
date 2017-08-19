/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Arrays declared and printet out 
var boys = ["Torben", " Gert", " Klaus", " Henning", " Alfred"];
var girls = ["Tine", " Helga", " Karen", " Greta", " Anna"];
document.getElementById("boys").innerHTML = "First array: " + boys;
document.getElementById("girls").innerHTML = "Second array: " + girls;


//Merge the 2 arrays with concat() and print out
var all = boys.concat(girls);
document.getElementById("concatArray").innerHTML = "This is the 2 array concated: " + all;

//Reduce array into a single String with join() and seperated withhyphen (-)
document.getElementById("reduceArray").innerHTML = all.join("-");



