y = prompt("Entre com a temperatura corporal:");
y = parseFloat(y);
if (y <= 35) {
  console.log("Hipotermia");
} else {
  if (y <= 37.7) {
    console.log("Normal");
  } else {
    if (y <= 39.5) {
      console.log("Febre");
    } else {
      if (y <= 41) {
        console.log("Febre Alta");
      } else {
        console.log("Hipertermia");
      }
    }
  }
}
console.log("Fim do programa");
