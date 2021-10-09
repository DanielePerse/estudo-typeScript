interface Humano {
  nome: string;
  idade?: number; // ? -> atributo opcional
  [prop: string]: any; // propriedades com nomes dinâmicos
  saudar(sobrenome: string): void;
}

function saudarComOla(pessoa: Humano) {
  console.log("Olá, " + pessoa.nome);
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = "João";
}

const pessoa: Humano = {
  nome: "Fabio",
  idade: 40,
  saudar(sobrenome: string) {
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
class Cliente implements Humano {
  nome: string = "";
  ultimaCompra: Date = new Date();
  saudar(sobrenome: string) {
    console.log(
      "Olá, meu nome é " + this.nome + " " + sobrenome + " " + this.ultimaCompra
    );
  }
}

const meuCliente = new Cliente();
meuCliente.nome = "Dany";
meuCliente.saudar("Perse");

// Interface função
interface FuncaoCalculo {
  (a: number, b: number): number;
}

let potencia: FuncaoCalculo;

potencia = function (base: number, exp: number): number {
  return Math.pow(base, exp);
};

console.log(potencia(3, 10));

// Herança
// implements -> usado na relação classe e interface
// extends -> usado na relação classe e classe
// extends -> usado na relação interface e interface
interface A {
  a(): void;
}

interface B {
  b(): void;
}

interface ABC extends A, B {
  c(): void;
}

class RealA implements A {
  a(): void {}
}

class RealAB implements A, B {
  a(): void {}
  b(): void {}
}

class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}

abstract class abstractaABC implements A, B {
  a(): void {}
  b(): void {}
  abstract d(): void;
}

// acertando erro TS com implementação de interface
interface Object {
  log(): void;
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
