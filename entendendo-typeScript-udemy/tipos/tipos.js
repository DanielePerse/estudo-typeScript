"use strict";
// string
var nome = 'João';
console.log(nome);
// numbers
var idade = 27;
idade = 27.5;
console.log(idade);
// boolean
var possuiHobbies = false;
console.log(possuiHobbies);
// possuiHobbies = 1 -> isso gera erro, poiso tipo e diferente, mas mesmo assim compila e gera o arq. js automaticamente;
// tipos explícitos -> iniciei a variável sem tipo explícito, daí ele vai assumindo o tipo, conforme eu atribuir
// para resolver? sempre explicite o tipo!
var minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = "Idade 27"
// array
var hobbies = ["Cozinhar", "Praticar esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
console.log(hobbies);
// tuplas
var endereco = ["Av. principal", 99];
console.log(endereco);
endereco = ["r. felicidade", 1000];
console.log(endereco);
var endereco2 = ["Av. principal", 99, "referencia: mercadinho"];
console.log(endereco2);
// Enums
var Cor;
(function (Cor) {
    Cor[Cor["verde"] = 0] = "verde";
    Cor[Cor["rosa"] = 1] = "rosa";
    Cor[Cor["azul"] = 100] = "azul";
    Cor[Cor["amarelo"] = 101] = "amarelo";
    Cor[Cor["branco"] = 4] = "branco"; // 4
})(Cor || (Cor = {}));
var minhaCor = Cor.azul;
console.log(minhaCor);
console.log(Cor.branco);
console.log(Cor.amarelo);
// Any -> Se a intenção é reforçar os tipos, a solução any não é a melhor
var carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2000 };
console.log(carro);
