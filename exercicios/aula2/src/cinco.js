y = prompt("Entre com um número inteiro:");
y = parseInt(y);
z = prompt("Entre com um número inteiro:");
z = parseInt(z);
if (y > z) {
  console.log(y, "é maior que", z);
} else {
  if (y == z) {
    console.log(y, "é igual a", z);
  } else {
    console.log(y, "é menor que", z);
  }
}
