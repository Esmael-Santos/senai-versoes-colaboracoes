var ListaDePecas = ["AB", "Peça 2", "Peça 3", "Peça 4", "Peça 5", "Peça 6", "Peça 7", "Peça 8", "Peça 9", "Peça 10", "Peça 11"];

console.log("Quantidade de Peças");


if (ListaDePecas.length > 10){
    console.log("Capacidade insuficiente");
} 
else {
    console.log ("Capacidade Suficiente!");
}

console.log("Quantidade de Caracteres");

for (contador = 0; contador < ListaDePecas.length; contador++){

var PecaAtual = ListaDePecas[contador];


if (PecaAtual.length < 3){
    console.log(PecaAtual + ": a peça possui nome inferior a 3 caracteres e não pode ser cadastrado!");
}
else{
    console.log(PecaAtual + ": a peça pode ser cadastrada!" );
}
}

console.log("Peso da Peça");

var PesoDaPecaEmGramas = 400;

if (PesoDaPecaEmGramas >= 100){
    console.log("Peso suficiente");

}
else{
    console.log("Peso Insuficiente");
}
