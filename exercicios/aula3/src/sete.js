i = 0;
x = null;
while (i < 5) {
  j = prompt("Entre com um número:");
  j = parseInt(j);
  if (j > x) {
    x = j;
  }
  i = i + 1;
}
console.log("Este é o maior número:", x);
