// function discount(totalamount) {
//   var disc;
//   if (totalamount > 100) {
//     disc = totalamount * 0.1;
//   } else {
//     disc = totalamount * 0.05;
//   }
//   return disc;
// }
// ​

function discount(totalAmount) {
  const rate = totalAmount > 100 ? 0.1 : 0.05;
  return totalAmount * rate;
}
