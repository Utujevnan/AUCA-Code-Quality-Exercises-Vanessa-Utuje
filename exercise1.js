/*function calculateAverage(numbers) {
  var sum = 0;
  var count = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    count++;
  }
  var average = sum / count;
  return average;
}*/

function calculateAverage(numbers) {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
}
console.log(calculateAverage([10, 20, 30, 40, 50]));
