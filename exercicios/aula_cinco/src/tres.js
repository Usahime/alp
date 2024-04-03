vector = ["um", "dois", "três", "quatro"];
pos = vector.length-1
while (pos < vector.length && pos >= 0) {
    console.log(pos,':',vector[pos]);
    pos--;
}