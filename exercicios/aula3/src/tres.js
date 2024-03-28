i = prompt("Entre com o menor número:");
j = prompt("Entre com o maior número:");
i = parseInt(i);
j = parseInt(j);
if (i > j) {
  w = i;
  i = j;
  j = w;
}
while (i <= j) {
  console.log(i);
  i = i + 1;
}
