// exemplo 1
class Data {
    // são publicos por padrão
    public dia: number
    mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(3, 11, 1991)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data // posso omitir os ()
casamento.ano = 2017
console.log(casamento)

// exemplo 2
class DataEsperta {
    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) {
    }
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991)
aniversarioEsperto.dia = 4
console.log(aniversarioEsperto.dia)
console.log(aniversarioEsperto)

const casamentoEsperto = new DataEsperta // posso omitir os ()
casamentoEsperto.ano = 2017
console.log(casamentoEsperto)

// Desafio Produto
// criar método precoComDesconto
// quais são os param e o retorno?
// alterar método resumo p mostrar o preço com desconto
class Produto {
    constructor(public nome: string, public preco: number, public desconto: number = 0) {}

    // aqui podemos ter vários métodos que alteram o comportamento do produto
    public precoComDesconto(): number {
        return this.preco - (this.preco * this.desconto)
    }

    public resumo(): string {
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% OFF)`
    }

}

const produto1 = new Produto('agua', 5, 0.1)
const produto2 = new Produto('bola de futebol', 20)
console.log(produto1.resumo(), produto2.resumo())
console.log(produto1.precoComDesconto())

// modificadores de acesso
class Carro {
    private velocidadeAtual: number = 0;

    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200) {

    }

    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

        if(velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }

        return this.velocidadeAtual;
    }

    public acelerar(): number {
        return this.alterarVelocidade(5);
    }

    public frear(): number {
        return this.alterarVelocidade(-5);
    }
}

const carro1 = new Carro('ford', 'ka', 180);

Array(50).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar())

Array(20).fill(0).forEach(() => carro1.frear())
console.log(carro1.acelerar())


// herança

class Ferrari extends Carro {
    // aqui alterei quantidade de paramtros, criando outro construtor, basta chamar o super
    constructor(modelo: string, velocidadeMaxima: number) {
        super('Ferrari', modelo, velocidadeMaxima);
    }

    // parar usar esses métodos, tive que alterar o acesso do método 'alterarVelocidade' que estava como private para protect
    // e aqui posso sobrescrever esse método colocando na realidade de uma ferrari.
    public acelerar(): number {
        return this.alterarVelocidade(40);
    }

    public frear(): number {
        return this.alterarVelocidade(-20);
    }
}

const f40 = new Ferrari('f40', 380);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());
console.log(f40.acelerar());
console.log(f40.frear());


// getters and setters
class Pessoa {
    private _idade: number = 0;

    get idade(): number {
        return this._idade
    }

    set idade(valor: number) {
        if(valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}

const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1.idade);

pessoa1.idade = -3;
console.log(pessoa1.idade);

// atributo e métods estáticos -> significa que os membros estão num nível da classe e não disponivel para as instâncias
class Matematica {
    static PI: number = 3.1416

    static areaCirc(raio: number): number {
        return this.PI * raio * raio;
    }
}

// const m1 = new Matematica();
// m1.PI = 4.2;

console.log(Matematica.areaCirc(4));

// classe abstrata
abstract class Calculo {
    protected resultado: number = 0;

    abstract executar(...numeros: number[]): void

    getResultado(): number {
        return this.resultado;
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t,a) => t + a);
    }
}

class Multiplicacao extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}

let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());

c1 = new Multiplicacao();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());


class Unico {
    private static instance: Unico = new Unico;
    private constructor() {}

    static getInstance(): Unico {
        return Unico.instance;
    }

    agora() {
        return new Date;
    }
}

// const errado = new Unico()
console.log(Unico.getInstance().agora());

// somente leitura -> uma vez que o objeto foi incializado ele passa a ser somente leitura
class Aviao {
    public readonly modelo: string;

    constructor(modelo: string, 
        public readonly prefixo: string) {
            this.modelo = modelo;
        }
}

const turboHelice = new Aviao('turbo', 'aviao bom');

// turboHelice.modelo = 'erradooo'; // não consegue mais alterar, dá erro, pois é somente leitura

