/**
 * Author:    Nam
 * Created:   11.14.2024
 * 
 * (c) Copyright by Blub Corp.
 **/

//Create a function sortingHat()
//that takes a string as an argument: function sortingHat(str)
function sortingHat (str){
    //counts the letters in str and assigns it to a variable length
    var length = str.length;
    //uses modulus (% operator) to get the remainder with 4: mod = length % 4;
    var mod = length % 4;
    //mod will now be a value between 0 and 3
    //create a conditional that will return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff depending on whether the value of mod is 0, 1, 2, or 3
        if (mod==0){
            return "Gryffindor";
        }else if (mod==1){
            return "Ravenclaw";
        }else if (mod==2){
            return "Slytherin";
        }else{
            return "Hufflepuff";
        }
}

//Create an click listener attached to #button
//that gets the value of #input and assigns it to a variable name
//runs sortingHat(name) and stores the result in a variable house
//appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
$('#button').click(function(){
    var name = $('#input').val();
    var house = sortingHat(name);
        $('#output').append('<p>The Sorting Hat has sorted you into ' + house + '</p>');
});