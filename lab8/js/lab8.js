/**
 * Author:    Nam Hoang
 * Created:   10/31/2024
 * 
 * My website
 **/

//Create an array of numbers and assign it to a variable.
var array = [1, 2, 3, 4, 5];
//Create a named function that will take a single parameter, do a calculation on it (sqrt, sqr, addition, etc), and return the result.
function addTwo(array){
  return array + 2;
}

//This whole comments of code are not working
  //call function 
  //document.writeln(addTwo(5));
  //console.log(array.map(addTwo));
  //document.writeln(array.map(addtwo));

let res2=array.map(function(array){
  var results = array*2
  return results;
})

var mapResults = array.map(addTwo);
console.log("My array: ", array)
console.log("Results adding 2", mapResults)
console.log('Results multiplying by 2',res2)

//attempted to do lab X but failed
  //var mapResults = "Your map results here",mapResults;
  //$("#output").html(mapResults); 