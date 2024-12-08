// DEFINE YOUR FUNCTION BELOW:
function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true;
    } else {
        return false;
    }
}

// Example calls
console.log(isShortsWeather(80)); // true
console.log(isShortsWeather(48)); // false
console.log(isShortsWeather(75)); // true