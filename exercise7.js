// function mult(x,y){
//   return x*y;
// }

function mult(x, y) {
  return typeof x !== "number" || typeof y !== "number" ? 0 : x * y;
}

console.log(mult(2, "0"));
