/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Function 1
function addition(x, y) {
    var result = x + y;
    document.write("This is the function with addition, and the result is: " + result);
}

//function 2
function subtraction(x, y){
    var result = x - y;
    document.write("This is the function with subtraction, and the result is: " + result);
}

//Function who call the two other functions above
function callFunctions(){
    addition(10, 20);
    subtraction(30, 10);
}

//Calling the callFunction()
callFunctions();