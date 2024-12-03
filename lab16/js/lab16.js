/*
   Author: Nam Hoang
   Date: 2 December 2024

 (c) Copyright by Baymax54 Corporation
 */

 // Global variables to track the current and latest comic numbers
 let currentComicNum = null;
 let latestComicNum = null;
 
 // Function to fetch and display the comic based on the comic number
 function getAndPutData(comicNumber = null) {
     // Determine the URL based on whether a specific comic number is provided
     const url = comicNumber 
         ? `https://api.allorigins.win/raw?url=https://xkcd.com/${comicNumber}/info.0.json`
         : `https://api.allorigins.win/raw?url=https://xkcd.com/info.0.json`;
 
     // AJAX request to fetch comic data
     $.ajax({
         url: url,
         type: "GET",
         dataType: "json",
         success: function(comicObj) {
             // Update current comic number
             currentComicNum = comicObj.num;
             
             // Set the latest comic number if it's not already set
             if (latestComicNum === null) {
                 latestComicNum = comicObj.num;
             }
 
             console.log(`Displaying Comic #${currentComicNum}, Latest Comic: #${latestComicNum}`);
 
             // Select the output div
             let outputDiv = $("#output");
             
             // Clear previous content from the output div
             outputDiv.empty();
 
             // Create and append the comic title
             let comicTitle = $("<h3>")
                 .text(`${comicObj.title} (Comic #${comicObj.num})`)
                 .addClass("comic-title");
             
             // Create and append the comic image
             let comicImage = $("<img>")
                 .attr("src", comicObj.img)
                 .attr("alt", comicObj.alt)
                 .attr("title", comicObj.alt)
                 .addClass("comic-image");
             
             // Create Previous button
             let prevButton = $("<button>")
                 .text("Previous Comic")
                 .addClass("nav-button")
                 .prop("disabled", currentComicNum <= 1) // Disable if it's the first comic
                 .on("click", function() {
                     if (currentComicNum > 1) {
                         getAndPutData(currentComicNum - 1); // Load the previous comic
                     }
                 });
             
             // Create Next button
             let nextButton = $("<button>")
                 .text("Next Comic")
                 .addClass("nav-button")
                 .prop("disabled", currentComicNum >= latestComicNum) // Disable if it's the latest comic
                 .on("click", function() {
                     if (currentComicNum < latestComicNum) {
                         getAndPutData(currentComicNum + 1); // Load the next comic
                     }
                 });
             
             // Create and append the navigation container for buttons
             let navDiv = $("<div>")
                 .addClass("comic-navigation")
                 .append(prevButton)
                 .append(nextButton);
             
             // Append all elements to the output div
             outputDiv
                 .append(comicTitle)
                 .append(comicImage)
                 .append(navDiv);
         },
         error: function(jqXHR, textStatus, errorThrown) {
             // Log error and display a message if the request fails
             console.log("Error:", textStatus, errorThrown);
             $("#output").text("Sorry, we couldn't retrieve the comic.");
         }
     });
 }
 
 // When the document is ready, fetch and display the latest comic
 $(document).ready(function() {
     getAndPutData(); // Load the latest comic on page load
 });