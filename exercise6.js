// function maxNumber(a, b, c) {
//   if (a > b && a > c) {
//     return a;
//   } else {
//     if (b > a && b > c) {
//       return b;
//     } else {
//       return c;
//     }
//   }
// }

function maxNumbers(a, b, c) {
  return Math.max(a, b, c);
}

console.log(maxNumbers(1, 3, 4));
