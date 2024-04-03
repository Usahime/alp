y = prompt("Entre com o seu peso (Kg):");
y = parseFloat(y);
z = prompt("Entre com a sua altura (m):");
z = parseFloat(z);
w = y / (z * z);
console.log(w);
if (w <= 18.5) {
  console.log("abaixo do peso");
} else {
  if (w <= 24.9) {
    console.log("Peso ideal (parabéns)");
  } else {
    if (w <= 29.9) {
      console.log("Levemente acima do peso");
    } else {
      if (w <= 34.9) {
        console.log("Obesidade grau I");
      } else {
        if (w <= 39.9) {
          console.log("Obesidade grau II (severa");
        } else {
          console.log("Obesidade III (mórbida)");
        }
      }
    }
  }
}
console.log("Fim do programa");
