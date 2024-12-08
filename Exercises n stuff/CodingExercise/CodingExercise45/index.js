const square = {
    area: function (side) {
        return side * side; // returns the area (side squared)
    },
    perimeter: function (side) {
        return side * 4; // returns the perimeter (side multiplied by 4)
    }
};

console.log(square.area(10)); // 100
console.log(square.perimeter(10)); // 40
