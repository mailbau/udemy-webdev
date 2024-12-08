// DEFINE YOUR FUNCTION BELOW:
function returnDay(num) {
    const daysOfWeek = [
        "Monday",    // 1
        "Tuesday",   // 2
        "Wednesday", // 3
        "Thursday",  // 4
        "Friday",    // 5
        "Saturday",  // 6
        "Sunday"     // 7
    ];

    // Check if the input number is valid (between 1 and 7)
    if (num >= 1 && num <= 7) {
        return daysOfWeek[num - 1];  // Access the day by adjusting for 0-based index
    } else {
        return null;  // Return null if the number is not valid
    }
}

// Example calls
console.log(returnDay(1)); // "Monday"
console.log(returnDay(7)); // "Sunday"
console.log(returnDay(4)); // "Thursday"
console.log(returnDay(0)); // null