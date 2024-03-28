/*matriz = [
    [9, 2, 4],
    [6, 5, 7],
    [2, 1, 3]
]
pos1 = 0
pos2 = 0
while (pos1 <= matriz.length) {
    while (pos2 <= matriz[pos1].length) {
        if (pos1 = pos2) {
            console.log(matriz[pos1][pos2]);
        }
    pos1++;
    pos2++;
    }
}*/

matriz = [
  [9, 2, 4],
  [6, 5, 7],
  [2, 1, 3],
];
line = 0;
while (line < matriz.length) {
  column = 0;
  while (column < matriz[line].length) {
    if (line == column) {
      console.log(matriz[line][column]);
    }
    column++;
  }
  line++;
}
