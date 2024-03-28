string = prompt("Entre com números separados por vírgula:");
list = string.split(",");
for (let i = 0; i < list.length; i++) {
  number = parseInt(list[i]);
  if (i % 2 == 0) {
    console.log(number);
  }
}
