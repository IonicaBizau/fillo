const fillo = require("../lib");

// Fill with with zeros (default behavior)
console.log(fillo(7));
// => "07"

console.log(fillo(142));
// => "142"

console.log(fillo(42, 5));
// => "00042"

console.log(fillo(42, 4, "#"));
// => "##42"
