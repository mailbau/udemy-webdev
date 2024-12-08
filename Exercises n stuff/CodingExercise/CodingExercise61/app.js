// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent the default form submission behavior

    // Grab the values from the input fields
    const product = document.getElementById('product').value;
    const qty = document.getElementById('qty').value;

    // Create a new <li> element and set its text
    const li = document.createElement('li');
    li.textContent = `${qty} ${product}`;

    // Append the new <li> to the <ul>
    document.getElementById('list').appendChild(li);

    // Reset the input fields
    document.getElementById('product').value = '';
    document.getElementById('qty').value = '';
});