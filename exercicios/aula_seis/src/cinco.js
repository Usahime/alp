/*string = "Autumn";
pos = 0
saída = "";
while (pos < string.length) {
    saída = string[pos] + saída;
    pos++;
}
console.log(saída);*/

function inverte(string) {
    pos = 0;
    output = "";
    while (pos < string.length) {
        output = string[pos] + output;
        pos++;
    }
    return output;
}
y = inverte("Autumn");
console.log(y);

y = inverte("Mephistopheles");
console.log(y);