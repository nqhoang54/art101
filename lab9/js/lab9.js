/**
 * Author:    Nam Hoang 
 * Created:   11.04.2024
 * 
 * 
 **/
// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("#problems").append("<button id='button-challenge'>Make Special</button>");
$("#reflections").append("<button id='button-challenge'>Make Special</button>");

// add a click listener to the challenge button
$("button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass(".special");
});