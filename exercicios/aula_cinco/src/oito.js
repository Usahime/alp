pesos = [0.4, 0.2, 0.1, 0.3];
notas = [8.2, 5.0, 10.0, 9.1];
pos = 0;
sum = 0
while (pos < pesos.length) {
    sum += pesos[pos]*notas[pos]
    pos++;
}
console.log("Nota final: ", sum);