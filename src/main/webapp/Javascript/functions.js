/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function confirm() {
    alert("Are you sure you want to see the form");
}

function showForm(){
    document.getElementById("showForm").innerHTML = "<form>" + 
                                                    "<p>Name:</p>" +
                                                    "<input type=\"text\">" +
                                                    "<p> Address:</p>" +
                                                    "<input type=\"text\">" +
                                                    "<p>City:</p>" +
                                                    "<input type=\"text\">" +
                                                    "<p>Country:</p>" +
                                                    "<input type=\"text\">" +
                                                    "<br></br>" +
                                                    "<input type=\"button\" value=\"Submit\">" +
                                                    "</form>";
}


