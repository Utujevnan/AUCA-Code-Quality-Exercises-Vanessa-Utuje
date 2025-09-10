// function greet(name) {
//   if (name) {
//     return "Hello, " + name + "!";
//   } else {
//     return "Hello!";
//   }
// }

function greet(name = "Guest") {
  !!name ? `Hello, ${name}!` : "Hello!";
}
console.log(greet("Alice"));
