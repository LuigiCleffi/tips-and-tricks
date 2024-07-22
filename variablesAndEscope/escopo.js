// Escopo Global
var global = "Eu sou global!";

function exemplo() {
  // Escopo de Função
  var funcVar = "Eu sou uma variável de função!";

  if (true) {
    // Escopo de Bloco
    let blocoVar = "Eu sou uma variável de bloco!";
    const blocoConst = "Eu também sou uma variável de bloco!";
    console.log(blocoVar); // Acessível
    console.log(blocoConst); // Acessível
  }

  console.log(funcVar); // Acessível
  // console.log(blocoVar); // Erro: blocoVar is not defined
}

console.log(global); // Acessível
// console.log(funcVar); // Erro: funcVar is not defined

exemplo();
