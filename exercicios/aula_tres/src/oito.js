i = prompt("Entre com a sua senha:");
if ((i == "abc")) {
  console.log("Acesso liberado");
}
while (i != "abc") {
  console.log("Senha incorreta");
}

i = "abc";
entrada = "";
while (i != entrada) {
    entrada = prompt("Entre com a senha:");
    if (i == entrada) {
        console.log("Acesso liberado");
    } else {
        console.log("Senha incorreta");
    }
}