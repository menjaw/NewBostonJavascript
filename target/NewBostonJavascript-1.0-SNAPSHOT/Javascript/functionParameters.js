/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//parameters in function
function foodProduct(incomingParameter) {//When we give information to the parameters, it is called passing information into the parameters 
    alert("I love " + incomingParameter);
}

foodProduct("bacon");
foodProduct("oranges");
foodProduct("brunch");


//Multiplied parameters in functions
function persons(one, two) {
    document.write("<b>" + one + "</b>" + " is better than " + "<b>" + two + "</b>" + "<br/>");
}

persons(2, 3);
persons("Menja", "she think");
persons("Sun", "cold rain");
persons("Money", "No money");

