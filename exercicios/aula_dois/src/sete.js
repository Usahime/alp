y = prompt("Entre com um número:");
y = parseFloat(y);
z = prompt("Entre com um número:");
z = parseFloat(z);
x = prompt("Entre com um número:");
x = parseFloat(x);
if (y > z && y > x) {
  console.log("Maior:", y);
} else {
  if (z > y && z > x) {
    console.log("Maior:", z);
  } else {
    console.log("Maior:", x);
  }
}
