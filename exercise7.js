// function mult(x,y){
//   return x*y;
// }

function mult(x, y) {
  return typeof x !== "number" || typeof y !== "number" ? 0 : x * y;
}
// option.
function multiply(x, y) {
  try {
    return x * y
  } catch {
    return 'The operation failed!'
  }
}

// option.

function useEarlyReturns(x, y) {
  if(typeof x !== "number" || typeof y !== "number") return 0

  return x * y
}

console.log(mult(2, "0"));
