// WRITE YOUR CODE IN HERE:
// Select the container div where the buttons will be added
const container = document.getElementById('container');

// Loop 100 times to create 100 buttons
for (let i = 0; i < 100; i++) {
    // Create a new button element
    const button = document.createElement('button');

    // Set the button's inner text
    button.innerText = `Button ${i + 1}`;

    // Append the button inside the container div
    container.appendChild(button);
}
