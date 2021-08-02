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