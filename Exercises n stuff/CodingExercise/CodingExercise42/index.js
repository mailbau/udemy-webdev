// DEFINE YOUR FUNCTION BELOW:
function sumArray(arr) {
    let total = 0;  // Initialize the total to 0

    // Loop over the array and add each element to total
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];  // Add the current element to total
    }

    return total;  // Return the total sum
}

// Example calls
console.log(sumArray([1, 2, 3])); // 6
console.log(sumArray([2, 2, 2, 2])); // 8
console.log(sumArray([50, 50, 1])); // 101