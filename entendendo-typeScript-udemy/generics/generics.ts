function echo(objeto: any) {
  return objeto;
}

console.log(echo("joão").length);
console.log(echo(27).length); // vai dar erro (sem criticar) pq não posso usar length para numero, mas como resolver esse problema e deixar esse campo genérico?

// Usando generics <?>
function echoMelhorado<T>(objeto: T): T {
  return objeto;
}

console.log(echoMelhorado("joão").length); // aqui ele infere q é uma string
console.log(echoMelhorado<number>(27)); // aqui posso colocar o tipo que preciso

// generics disponiveis na API - array
const avaliacaoes: Array<number> = [10, 9.3, 7.7];
avaliacaoes.push(8.4);
console.log(avaliacaoes);

function imprimir<T>(args: T[]) {
  args.forEach((elemento) => console.log(elemento));
}

imprimir([1, 2, 3]);
imprimir<number>([1, 2, 3]);
imprimir<string>(["eu", "tu"]);
imprimir<{ nome: string; idade: number }>([
  { nome: "eu", idade: 1 },
  { nome: "tu", idade: 20 },
]);

type Aluno = { nome: string; idade: number };
imprimir<Aluno>([
  { nome: "eu", idade: 1 },
  { nome: "tu", idade: 20 },
]);

// tipo generico
type Echo = <T>(data: T) => T;
const chamarEcho: Echo = echoMelhorado;
console.log(chamarEcho<string>("alguma coisa"));

// criando classes com generics
abstract class OperacaoBinaria<T, R> {
  constructor(public operando1: T, public operando2: T) {}

  abstract executar(): R;
}

class SomaBinaria extends OperacaoBinaria<number, number> {
  executar(): number {
    return this.operando1 + this.operando2;
  }
}

console.log(new SomaBinaria(2, 5).executar());

// class DiferencaDatas extends OperacaoBinaria<Data, string> {
//   getTime(data: Data): number {
//     let { dia, mes, ano } = data;
//     return new Date(`${mes}/${dia}/${ano}`).getTime();
//   }

//   executar(): string {
//     const t1 = this.getTime(this.operando1);
//     const t2 = this.getTime(this.operando2);
//     const diferenca = Math.abs(t1 - t2);
//     const dia = 1000 * 60 * 60 * 24;
//     return `${Math.ceil(diferenca / dia)} dia(s)`;
//   }
// }

// const d1 = new Data(10, 10, 2020);
// const d2 = new Data(15, 10, 2020);

// console.log(new DiferencaDatas(d1, d2).executar());

// desafio classe fila
// atributo: fila (array)
// metodos: entrar, proximo, imprimir

class Fila<T> {
  private fila: Array<T>;

  constructor(...args: T[]) {
    this.fila = args;
  }

  entrar(elemento: T) {
    this.fila.push(elemento);
  }

  proximo(): T {
    const primeiro = this.fila[0];
    this.fila.splice(0, 1);
    return primeiro;
  }

  imprimir() {
    console.log(this.fila);
  }
}

const fila = new Fila<string>("jo", "lua", "sol", "agua");

fila.imprimir();
fila.entrar("Rafa");
fila.imprimir();
console.log(fila.proximo());
fila.imprimir();

// restrições (constrains)
class Fila2<T extends number | string> {
  private fila2: Array<T>;

  constructor(...args: T[]) {
    this.fila2 = args;
  }

  entrar(elemento: T) {
    this.fila2.push(elemento);
  }

  proximo(): T {
    const primeiro = this.fila2[0];
    this.fila2.splice(0, 1);
    return primeiro;
  }

  imprimir() {
    console.log(this.fila2);
  }
}

const fila2 = new Fila2<string>("jo", "lua", "sol", "agua");

fila2.imprimir();
fila2.entrar("Rafa");
fila2.imprimir();
console.log(fila2.proximo());
fila2.imprimir();

const novaFila = new Fila<number>(1, 2, 3);
novaFila.imprimir();

//Desafio módulo
// array de objetos (chave/valor) -> itens
// métodos: obter(Chave), colocar({ C, V})
// limpar(), imprimir()

type Par<C, V> = { chave: C; valor: V };
class Mapa<C, V> {
  itens: Array<Par<C, V>> = new Array<Par<C, V>>();

  obter(chave: C): Par<C, V> | null {
    const resultado = this.itens.filter((i) => i.chave === chave);
    return resultado ? resultado[0] : null;
  }

  colocar(par: Par<C, V>) {
    const encontrado = this.obter(par.chave);
    if (encontrado) {
      encontrado.valor = par.valor;
    } else {
      this.itens.push(par);
    }
  }

  limpar() {
    this.itens = new Array<Par<C, V>>();
  }

  imprimir() {
    console.log(this.itens);
  }
}

const mapa = new Mapa<number, string>();
mapa.colocar({ chave: 1, valor: "pedro" });
mapa.colocar({ chave: 2, valor: "peDRA" });
mapa.colocar({ chave: 1, valor: "meias" });
mapa.colocar({ chave: 4, valor: "pomodoro" });

console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
