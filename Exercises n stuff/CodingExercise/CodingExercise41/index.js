// DEFINE YOUR FUNCTION BELOW:
function capitalize(str) {
    if (str.length === 0) {
        return str; // If the string is empty, return it as is
    }
    return str[0].toUpperCase() + str.slice(1); // Capitalize the first letter and concatenate with the rest of the string
}

// Example calls
console.log(capitalize('eggplant')); // "Eggplant"
console.log(capitalize('pamplemousse')); // "Pamplemousse"
console.log(capitalize('squid')); // "Squid"