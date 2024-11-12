/**
 * Author:    Nam Hoabg
 * Created:   11.11.2024
 * 
 * My Website
 **/

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
    
  }

  $("#submit").click(function(){
    // get value of input field
    const userName = $("#user-name").val();
    // now let's sort it
    var userNameSorted = sortString(userName);

    // append a new div to our output div
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});

