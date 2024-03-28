i = "abc";
j = 0;
entrada = "";
while (i != entrada && j < 3) {
  entrada = prompt("Entre com a senha:");
  if (i == entrada) {
    console.log("Acesso liberado");
  } else {
    console.log("Senha incorreta");
    j = j + 1;
  }
}
if (j == 3) {
    console.log("Excedeu o número de tentativas");
}