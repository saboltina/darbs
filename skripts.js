// Get the button, message element, and table body
const button = document.getElementById("myButton");
const message = document.getElementById("message");

// Add an event listener for the button click
button.addEventListener("click", function() {
  // Display a message on button click
  message.textContent = "Vēlu jauku dienu!";
});
