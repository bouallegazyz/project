document.addEventListener("DOMContentLoaded", function() {
    // Get the text element
    const textElement = document.querySelector(".text-animation");

    // Function to animate the text
    function animateText() {
        // Show the text by changing opacity and translateY
        textElement.style.opacity = "1";
        textElement.style.transform = "translateY(0)";
    }

    // Call the animation function after a short delay
    setTimeout(animateText, 500); // Adjust the delay (in milliseconds) as needed
});