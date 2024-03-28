function somatório(array) {
  pos = 0;
  sum = 0;
  while (pos < array.length) {
    sum += array[pos];
    pos++;
  }
  return sum;
}

v = somatório([5, 7, 8, 12]);
console.log(v);

v = somatório([99, 137, 69, 88]);
console.log(v);