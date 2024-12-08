// DEFINE YOUR FUNCTION BELOW:
function lastElement(arr) {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    } else {
        return arr[arr.length - 1]; // Return the last element
    }
}

// Example calls
console.log(lastElement([3, 5, 7])); // 7
console.log(lastElement([1])); // 1
console.log(lastElement([])); // null