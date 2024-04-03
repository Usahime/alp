disciplina = {
  nome: "Algoritmos",
  carga: 80,
  pesos: [
    {
      peso: 0.25,
      nota: 8.2,
    },
    {
      peso: 0.35,
      nota: 7.5,
    },
    {
      peso: 0.4,
      nota: 9,
    },
  ],
};
nf =
  disciplina.pesos[0].peso * disciplina.pesos[0].nota +
  disciplina.pesos[1].peso * disciplina.pesos[1].nota +
  disciplina.pesos[2].peso * disciplina.pesos[2].nota;
console.log("Nota Final:",nf);
