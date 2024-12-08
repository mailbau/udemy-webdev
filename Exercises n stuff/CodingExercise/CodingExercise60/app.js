// Select the buttons
const helloButton = document.getElementById('hello');
const goodbyeButton = document.getElementById('goodbye');

// Add event listeners
helloButton.addEventListener('click', () => {
    console.log('hello');
});

goodbyeButton.addEventListener('click', () => {
    console.log('goodbye');
});