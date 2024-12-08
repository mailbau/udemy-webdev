// Select the <h1> and <input> elements
const h1 = document.querySelector('h1');
const input = document.getElementById('username');

// Add an event listener for the 'input' event
input.addEventListener('input', function () {
    // If the input field is empty, reset the h1 text
    if (input.value === '') {
        h1.textContent = 'Enter Your Username';
    } else {
        // Update the h1 text to say "Welcome, " followed by the input value
        h1.textContent = `Welcome, ${input.value}`;
    }
});
