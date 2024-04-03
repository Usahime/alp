vector = [8, 3, 4, 7, 5, 6, 4];
pos = 0;
while (pos < vector.length) {
  if ((pos % 2 != 0)) {
    console.log(pos,':',vector[pos]);
  }
  pos++;
}