function inverter(array) {
  output = [];
  pos = array.length - 1;
  while (pos < array.length && pos >= 0) {
    output.push(array[pos]);
    pos--;
  }
  return output;
}

v = inverter([5,6,7,8]);
console.log(v);

v = inverter([38123781, 319239, 999, 8]);
console.log(v);
