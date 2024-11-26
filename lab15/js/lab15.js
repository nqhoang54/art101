/*
   Author: Nam Hoang
   Date: 25 November 2024

 (c) Copyright by Blackarmor Corporation
 */

 $(document).ready(function() {
    
    // Add a click event listener to the "Activate" button
    $('#activate').on('click', function() {

        // Perform an jQuery AJAX call to fetch output from Star Wars API
        $.ajax({
            url: "https://swapi.dev/api/people/4/",
            
            // Whether this is a POST or GET request
            type: "GET",

            // Type of data we expect back
            dataType: "json",
            success: function (data) {
            console.log(data);

                // Create a formatted output
                let outputHtml = `
                    <h3>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h3>
                     <p><strong>Skin_Color:</strong> ${data.skin_color}</p>
                    <p><strong>Eye_Color:</strong> ${data.eye_color}</p>
                    <p><strong>Birth_Year:</strong> ${data.birth_year}</p> 
                <ul>
                `;

                $('#output').html(outputHtml);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // Handle errors from the API call
                console.error("Error:", textStatus, errorThrown);
                $('#output').html("<p>Failed to fetch Star Wars API data. Please try again.</p>");
            }
        });
    });
});