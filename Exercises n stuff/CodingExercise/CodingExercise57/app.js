// WRITE YOUR CODE IN HERE:
// Select all the <li> elements
const listItems = document.querySelectorAll('li');

// Iterate over each <li> and toggle the 'highlight' class
listItems.forEach(item => {
    item.classList.toggle('highlight');
});
