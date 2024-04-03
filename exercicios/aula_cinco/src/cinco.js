vector = [8, 3, 4, 7, 5, 6, 4];
pos = 0;
while (pos < vector.length) {
  if ((vector[pos] % 2 != 0)) {
    console.log("Ímpar: ",vector[pos]);
  }
  pos++;
}
