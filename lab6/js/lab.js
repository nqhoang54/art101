// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
/**
 * Author:    Nam Hoang
 * Created:   10.24.2024
 * 
 * Public Domain 
 **/

//Define Variables 
const myTransport =['bus','walking','ride with friends'];

//Create an object for my main ride
var myMainRide ={
    make: "Honda",
    model: "Civic",
    color: "blue",
    year: 2004,
    ownIt: true,
    age : function(){
      return 2022-this.year;
    }};

//Output for mytransport
document.writeln("Getting around: " + myTransport + "<br>");

//Output for my main ride
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");


    
