const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOUR CODE GOES HERE:
// Select all the span elements inside the <h1>
const spans = document.querySelectorAll('h1 span');

// Iterate over each span and apply the corresponding color from the colors array
spans.forEach((span, index) => {
    span.style.color = colors[index];  // Set the color based on the index
});
