// function greet(name) {
//   if (name) {
//     return "Hello, " + name + "!";
//   } else {
//     return "Hello!";
//   }
// }

function greet(name = "Guest") {
  // 👇 do some research and find how this is called !!
  !!name ? `Hello, ${name}!` : "Hello!";
}

// option.

function greet2(name = "Guest") {
  return name ? `Hello, ${name}!` : "Hello!";
}
console.log(greet("Alice"));
