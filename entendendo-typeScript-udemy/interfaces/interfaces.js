"use strict";
function saudarComOla(pessoa) {
    console.log("Olá, " + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = "João";
}
const pessoa = {
    nome: "Fabio",
    idade: 40,
    saudar(sobrenome) {
        console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
    },
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({ nome: "Joana", idade: 50, xyz: true });
pessoa.saudar("Sky");
// interface -> é como se fosse um cntrato e obriga quem a usa aplicar os atributos e métodos dela
// Usando classes -> implementando uma interface (colocar os atributos obrigatórios e posso add outros)
class Cliente {
    constructor() {
        this.nome = "";
        this.ultimaCompra = new Date();
    }
    saudar(sobrenome) {
        console.log("Olá, meu nome é " + this.nome + " " + sobrenome + " " + this.ultimaCompra);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = "Dany";
meuCliente.saudar("Perse");
let potencia;
potencia = function (base, exp) {
    return Math.pow(base, exp);
};
console.log(potencia(3, 10));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class abstractaABC {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 2;
const z = 2;
x.log();
y.log();
z.log();
//# sourceMappingURL=interfaces.js.map