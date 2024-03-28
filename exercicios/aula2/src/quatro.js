y = prompt("Entre com um número inteiro:");
y = parseInt(y);
z = prompt("Entre com um número inteiro:");
z = parseInt(z);
x = y % z;
if (x == 0) {
  console.log(y, "é múltiplo de", z);
} else {
  console.log(y, "não é múltiplo de", z);
}
console.log("Fim do programa");