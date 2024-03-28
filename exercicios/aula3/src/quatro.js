i = 10; // prompt("Entre com o menor número:");
j = 20; // prompt("Entre com o maior número:");
i = parseInt(i);
j = parseInt(j);
if (i > j) {
  w = i;
  i = j;
  j = w;
}
x = 0;
while (i <= j) {
  x = x + i;
  i = i + 1;
}
console.log("Somatório:", x);
