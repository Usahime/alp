i = 0;
x = Infinity;
while (i < 5) {
  j = prompt("Entre com um número:");
  j = parseInt(j);
  if (j < x) {
    x = j;
  }
  i = i + 1;
}
console.log("Este é o menor número:", x);
