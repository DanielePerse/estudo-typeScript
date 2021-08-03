// string
let nome: string = 'João'
console.log(nome)

// numbers
let idade: number = 27
idade = 27.5
console.log(idade)

// boolean
let possuiHobbies: boolean = false
console.log(possuiHobbies)
// possuiHobbies = 1 -> isso gera erro, poiso tipo e diferente, mas mesmo assim compila e gera o arq. js automaticamente;

// tipos explícitos -> iniciei a variável sem tipo explícito, daí ele vai assumindo o tipo, conforme eu atribuir
// para resolver? sempre explicite o tipo!
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
// minhaIdade = "Idade 27"

// array
let hobbies: any[] = ["Cozinhar", "Praticar esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)
hobbies = [100]
console.log(hobbies)

// tuplas
let endereco: [string, number] = ["Av. principal", 99]
console.log(endereco)

endereco = ["r. felicidade", 1000]
console.log(endereco)

let endereco2: [string, number, string] = ["Av. principal", 99, "referencia: mercadinho"]
console.log(endereco2)

// Enums
enum Cor {
    verde, // 0
    rosa, // 1
    azul = 100, // 100
    amarelo, // 101
    branco = 4 // 4
}

let minhaCor: Cor = Cor.azul
console.log(minhaCor)
console.log(Cor.branco)
console.log(Cor.amarelo)

// Any -> Se a intenção é reforçar os tipos, a solução any não é a melhor
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2000}
console.log(carro)

// funcoes
function retornaNome(): string {
    return nome
}

console.log(retornaNome())

// funcao não retorna nada
function digaOi(): void {
    console.log('oi')
}

digaOi()

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}

console.log(multiplicar(9, 5))

// tipo função
let calculo: (x: number, y: number) => number

calculo = multiplicar
console.log(calculo(3, 5))


// objetos -> tanto faz a ordem
let usuario: { name: string, age: number } = {
    name: 'Dany',
    age: 20
}

console.log(usuario)

usuario = {
    age: 20,
    name: 'maria'
}

console.log(usuario)

// Desafio:
// 1. criar objeto funcionário com 2 atributos, o primeiro array de supervisores
// 2. criar função bater ponto q recebe hora e retorna string

let funcionario: {
    nameSupervisores: string[],
    baterPonto: (hora: number) => string 
} = {
    nameSupervisores: ['Arnaldo', 'Miranda', 'Josefa'],
    baterPonto(hora: number): string {
        if (hora <=8) {
            return 'Ponto normal'
        } else {
            return 'Fora do horário'
        }
    }
}

console.log(funcionario.nameSupervisores)
console.log(funcionario.baterPonto(8))


//exemplo tipagem - usando/compartilhando o mesmo parametro

type Funcionarios = {
    nameSupervisores: string[],
    baterPonto: (hora: number) => string 
}

let funcionario2: Funcionarios = {
    nameSupervisores: ['Ana', 'Mel', 'Jose'],
    baterPonto(hora: number): string {
        if (hora <=8) {
            return 'Ponto normal'
        } else {
            return 'Fora do horário'
        }
    }
}
console.log(funcionario2.nameSupervisores)

// union types
let nota: number | string = 10
console.log(nota)

// tipo never -> nunca vai retornar ou termina com erro
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'sabão',
    preco: -1,
    validarProduto() {
        if(!this.nome || this.nome.trim().length == 0) {
            falha('precisa de nome!')
        }
        if(this.preco <= 0) {
            falha('preço invalido!')
        }
    }
}

// produto.validarProduto()

// tipo null
let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: number,
    tel2: number | null
}

const contato1: Contato = {
    nome: 'daniele',
    tel1: 123456,
    tel2: null
}

console.log(contato1.nome, contato1.tel1, contato1.tel2)

// Desafio: aplicar tipos
type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    }
}

let correntista: Correntista = {
    nome: 'Ana silva',
    contaBancaria: contaBancaria,
    contatos: ['123456789', '987654321']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)