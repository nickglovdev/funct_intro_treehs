// Random Number Generator
function getRandomNumber(upper, lower) {
  if (isNaN(upper) || isNaN(lower)){
    throw new Error('Both arguements must be numbers');
  }
  var randomNumber = Math.floor( Math.random() * (upper - lower) ) + 1;
  return randomNumber;
}


console.log(getRandomNumber(4, 5));
console.log(getRandomNumber(3,5));
console.log(getRandomNumber('five', 2));
console.log(getRandomNumber(1, 5));




// Get the area
function getArea(width, length, unit) {
  var area = width * length;
  return area + " " + unit;
}

console.log(getArea(10, 300, 'sq ft'))
