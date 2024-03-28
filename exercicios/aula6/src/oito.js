function matriz(matrice) {
  sum = 0;
  line = 0;
  while (line < matrice.length) {
    column = 0;
    while (column < matrice[line].length) {
      sum += matrice[line][column];
      column++;
    }
    line++;
  }
  return sum;
}

x = matriz([[7, 8, 9], [(9, 10, 11)]]);
console.log(x);

x = matriz([[12391, 3192, 9], [30, 0, 0], [99, 9, 18]]);
console.log(x);