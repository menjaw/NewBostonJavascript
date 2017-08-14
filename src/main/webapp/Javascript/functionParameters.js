/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//parameters in function
function foodProduct(incomingParameter) {//When we give information to the parameters, it is called passing information into the parameters 
    alert("I love " + incomingParameter);
}

//Call the function and use the information down under (parsing the information)
foodProduct("bacon");
foodProduct("oranges");
foodProduct("brunch");


/*MULTIPLIED PARAMETERS IN FUNCTIONS*/
//Function 1
function persons(one, two) {
    document.write("<b>" + one + "</b>" + " is better than " + "<b>" + two + "</b>" + "<br/>");
}
//Call the function and parse the information to the function above
persons(2, 7);
persons("Menja", "she think");
persons("Sun", "cold rain");
persons("Money", "No money");


////Function 2
//function animals(one, two, three) {
//document.write(one + " is greater than " + two + " than is greater then " + three);
//}
//
////Call the function ans parse the information
//animals("Elefants", "horses", "pigs");