/**
 * Author:    Nam Hoang 
 * Created:   11.18.2024
 * 
 * (c) Copyright by Blub Corp.
 **/
//Create a "FizzBuzz" function similar to how we did in class.
function fizzBuzz(){
    //Loop through numbers 1 to 200, listing them as you go
    for (let i=1; i<=200; i++) {
        //If the number is a multiple of more than one 3, 5 or 7, it should combine Fizz, Buzz, and Boom. For example, if the number is a multiple of 3 AND 5, it should print "FizzBuzz!" and so on.
        if (i% 105 == 0) {
            console.log("FizzBuzzBoom");
            oneLongString += i + " FizzBuzzBoom!<br>";
            $("#output").html(oneLongString);

        }else if (i %15==0){
            console.log("FizzBuzz");
            oneLongString += i + " FizzBuzz!<br>";
            $("#output").html(oneLongString);

        } else if(i%21==0){
            console.log("FizzBoom")
            oneLongString += i + " FizzBoom!<br>";
            $("#output").html(oneLongString);
        }else if(i%35==0){
              console.log("BuzzBoom")
              oneLongString += i + " BuzzBoom!<br>";
            $("#output").html(oneLongString);
        }
        //If the number is a multiple of 3, if should print "Fizz!"
        else if (i%3 == 0) {
            console.log("Fizz");
            oneLongString += i + " Fizz!<br>";
            $("#output").html(oneLongString);
        //If the number is a multiple of 5, it should print "Buzz!"
        } else if (i%5 == 0) { 
            console.log("Buzz");
            oneLongString += i + " Buzz!<br>";
            $("#output").html(oneLongString);
        //If the number is a multiple of 7, it should print "Boom!"
        } else if (i%7 == 0) {
            console.log("Boom");
            oneLongString += i + " Boom!<br>";
            $("#output").html(oneLongString);
        
        } else {
            console.log(i);
            oneLongString += i + "<br>";
            $("#output").html(oneLongString);
        }
        
        
    }}
      
//Make it so the output of your program appears in your output div
var oneLongString = "";
fizzBuzz()
//oneLongString += i + " Fizz!<br>";  
//$("#output").html(oneLongString);




