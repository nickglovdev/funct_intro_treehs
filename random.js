// Random Number Generator
function getRandomNumber(upper) {
  var randomNumber = Math.floor( Math.random() * upper ) + 1;
  return randomNumber;
}
console.log(getRandomNumber(10));
console.log(getRandomNumber(100));


// Get the area
function getArea(width, length) {
  var area = width * length;
  return area;
}

console.log(getArea(10, 300))
