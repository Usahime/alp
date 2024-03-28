matriz = [
  [9, 2, 4],
  [6, 5, 7],
  [2, 1, 3],
];
sum = 0;
line = 0;
while (line < matriz.length) {
  column = 0;
  while (column < matriz[line].length) {
    sum += matriz[line][column];
    column++;
  }
  line++;
}
console.log("Somatório: ",sum);
