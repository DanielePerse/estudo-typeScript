// decorators -> é um padrão de projeto, no TS é um recurso.
// como recurso é uma função - e chamo com @

@logarClasse
class Eletrodomestico {
  constructor() {
    console.log("novo0...");
  }
}

function logarClasse(construtor: Function) {
  console.log(construtor);
}

// Decorator Factory - função que retorna um decorator
@logarClasseSe(true)
class Eletrodomestico2 {
  constructor() {
    console.log("novo2...");
  }
}

function decoratorVazio(_: Function) {}

function logarClasseSe(valor: boolean) {
  return valor ? logarClasse : decoratorVazio;
}

// alterar construtor com decorator de classe
// o decorator é chamado sempre que a classe é carregada, dessa forma não tem possibilidade de criar um decorator
// que é chamado sempre que uma nova instancia é chamada

type Construtor = { new (...args: any[]): {} };

@logarObjeto
class Eletrodomestico3 {
  constructor() {
    console.log("novo3...");
  }
}

function logarObjeto(construtor: Construtor) {
  console.log("carregado 1 única vez!");
  return class extends construtor {
    constructor(...args: any[]) {
      console.log("Antes...");
      super(...args);
      console.log("Depois...");
    }
  };
}

new Eletrodomestico3();

// add método com decorator de classe
interface Eletrodomestico4 {
  imprimir?(): void;
}

@imprimivel
class Eletrodomestico4 {
  constructor() {
    console.log("novo4...");
  }
}

function imprimivel(construtor: Function) {
  construtor.prototype.imprimir = function () {
    console.log(this);
  };
}

// está dando erro nessa chamada, então uma das soluções é colocar um cash (não mt bom)
(<any>new Eletrodomestico4()).imprimir();

// posso criar uma interface e validar.. só deixa chamar se tiver algo (essa estratégia é melhor)
const eletro = new Eletrodomestico4();
eletro.imprimir && eletro.imprimir();

// Desafio decorator perfilAdmin
const usuarioLogado = {
  nome: "Guilherme Filho",
  email: "guigui@gmail.com",
  admin: true,
};

@perfilAdmin
class MudancaAdministrativa {
  critico() {
    console.log("Algo crítico foi alterado!");
  }
}

new MudancaAdministrativa().critico();

function perfilAdmin<T extends Construtor>(construtor: T) {
  return class extends construtor {
    constructor(...args: any[]) {
      super(...args);
      if (!usuarioLogado || !usuarioLogado.admin) {
        throw new Error("Sem permissão!");
      }
    }
  };
}

// decorator associado a método
class ContaCorrente {
  @naoNegativo
  private saldo: number;

  constructor(saldo: number) {
    this.saldo = saldo;
  }

  @congelar
  sacar(valor: number) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      return true;
    } else {
      return false;
    }
  }

  @congelar
  getSaldo() {
    return this.saldo;
  }
}

const cc = new ContaCorrente(9500);
cc.sacar(5000);
cc.sacar(5000);
console.log(cc.getSaldo());

// inspiração Object.freeze()
function congelar(
  alvo: any,
  nomePropriedade: string,
  descritor: PropertyDecorator
) {
  console.log(alvo);
  console.log(nomePropriedade);
  descritor.writable = false;
}

function naoNegativo(alvo: any, nomePropriedade: string) {
  delete alvo[nomePropriedade];

  Object.defineProperty(alvo, nomePropriedade, {
    get: function (): any {
      return alvo["_" + nomePropriedade];
    },
    set: function (valor: any): void {
      if (valor < 0) {
        throw new Error("Saldo inválido");
      } else {
        alvo["_" + nomePropriedade] = valor;
      }
    },
  });
}
