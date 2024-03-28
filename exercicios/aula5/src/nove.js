entradas = [9, 2, 4, 5, 8];
saídas = [3, 5, 2, 7, 4];
pos = 0;
while (pos < entradas.length) {
  if (entradas[pos] < saídas[pos]) {
    console.log(pos, ":", saídas[pos]);
  } else {
    console.log(pos, ":", entradas[pos]);
  }
  pos++;
}
