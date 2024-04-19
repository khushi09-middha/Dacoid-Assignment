document.addEventListener("DOMContentLoaded", function() {
    // Get the button elements
    var redirectButtons = document.querySelectorAll("#redirectButton");

    // Loop through each button and attach event listener
    redirectButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            window.location.href = "your_goals.html";
        });
    });

    // Get the button element for redirecting to home.html
    var redirectToHomeButton = document.getElementById("redirectToHomeButton");
  
    // Add click event listener to the button
    redirectToHomeButton.addEventListener("click", function() {
        // Redirect to home.html
        window.location.href = "home.html";
    });
});
