i = 0;
soma = 0;
while (i < 5) {
  j = prompt("Entre com um número:");
  j = parseInt(j);
  soma = soma + j;
  i = i + 1;
}
console.log("Somatório:", soma);