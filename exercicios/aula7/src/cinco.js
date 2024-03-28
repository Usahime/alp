string = prompt("Entre com números separados por vírgula:");
list = string.split(',');
sum = 0
for (let i = 0; i < list.length; i++) {
    number = parseInt(list[i]);
    sum += number;
}
console.log("Somatório: ", sum);