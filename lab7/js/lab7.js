/**
 * Author:    Nam
 * Created:   10/28/2024
 * 
 * My website
 **/
//Create a new function in your file, call it what you like, but choose wisely.

// make a window prompt to get the input
let person = prompt("Please enter your name", "Harry Potter");

function userName(strs){
	//use user input and split, sort, and lasty join 
  return strs.split('').sort().join('');
}
//next this allows me to print it 
document.writeln(userName(person));
