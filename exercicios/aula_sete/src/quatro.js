string = prompt("Entre com números separados por vírgula:");
list = string.split(',');
for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}