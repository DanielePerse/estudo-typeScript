"use strict";
// string
let nome = 'João';
console.log(nome);
// numbers
let idade = 27;
idade = 27.5;
console.log(idade);
// boolean
let possuiHobbies = false;
console.log(possuiHobbies);
// possuiHobbies = 1 -> isso gera erro, poiso tipo e diferente, mas mesmo assim compila e gera o arq. js automaticamente;
// tipos explícitos -> iniciei a variável sem tipo explícito, daí ele vai assumindo o tipo, conforme eu atribuir
// para resolver? sempre explicite o tipo!
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = "Idade 27"
// array
let hobbies = ["Cozinhar", "Praticar esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
console.log(hobbies);
// tuplas
let endereco = ["Av. principal", 99];
console.log(endereco);
endereco = ["r. felicidade", 1000];
console.log(endereco);
let endereco2 = ["Av. principal", 99, "referencia: mercadinho"];
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
let minhaCor = Cor.azul;
console.log(minhaCor);
console.log(Cor.branco);
console.log(Cor.amarelo);
// Any -> Se a intenção é reforçar os tipos, a solução any não é a melhor
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2000 };
console.log(carro);
// funcoes
function retornaNome() {
    return nome;
}
console.log(retornaNome());
// funcao não retorna nada
function digaOi() {
    console.log('oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(9, 5));
// tipo função
let calculo;
calculo = multiplicar;
console.log(calculo(3, 5));
// objetos -> tanto faz a ordem
let usuario = {
    name: 'Dany',
    age: 20
};
console.log(usuario);
usuario = {
    age: 20,
    name: 'maria'
};
console.log(usuario);
// Desafio:
// 1. criar objeto funcionário com 2 atributos, o primeiro array de supervisores
// 2. criar função bater ponto q recebe hora e retorna string
let funcionario = {
    nameSupervisores: ['Arnaldo', 'Miranda', 'Josefa'],
    baterPonto(hora) {
        if (hora <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
console.log(funcionario.nameSupervisores);
console.log(funcionario.baterPonto(8));
let funcionario2 = {
    nameSupervisores: ['Ana', 'Mel', 'Jose'],
    baterPonto(hora) {
        if (hora <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
console.log(funcionario2.nameSupervisores);
// union types
let nota = 10;
console.log(nota);
// tipo never -> nunca vai retornar ou termina com erro
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'sabão',
    preco: -1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('precisa de nome!');
        }
        if (this.preco <= 0) {
            falha('preço invalido!');
        }
    }
};
// produto.validarProduto()
// tipo null
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'daniele',
    tel1: 123456,
    tel2: null
};
console.log(contato1.nome, contato1.tel1, contato1.tel2);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana silva',
    contaBancaria: contaBancaria,
    contatos: ['123456789', '987654321']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map