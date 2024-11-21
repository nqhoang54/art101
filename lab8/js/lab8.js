/**
 * Author:    Nam Hoang
 * Created:   10/31/2024
 * 
 * My website
 **/

//Create an array of numbers and assign it to a variable.
var array = [1, 2, 3, 4, 5];
//Create a named function that will take a single parameter, do a calculation on it (sqrt, sqr, addition, etc), and return the result.
function addTwo(num){
  return num + 2;
}

var res2=array.map(function(element){
  var results = element*2
  return results;
})

var mapResults = array.map(addTwo);
console.log("My array: ", array)
console.log("Results adding 2", mapResults)
console.log('Results multiplying by 2',res2)

//attempted to do lab X but failed
mapResults2 = "Results adding 2: "+ mapResults;
console.log(mapResults2);
// $("#output").html(array);
// $("#output").append(mapResults2);
mapOutput = "Original Array: " +array+ "<br> Results Multiplying by Two: "+res2+"<br>"+"Results Multiplying by Two: "+mapResults;
$("#output").html(mapOutput);