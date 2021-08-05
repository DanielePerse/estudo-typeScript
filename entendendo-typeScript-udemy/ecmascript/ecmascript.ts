// arrow function
const subtrair = (a: number, b: number): number => a - b;
console.log(subtrair(2, 3));

// this
// function normalComThis() {
//     console.log(this)
// }
// normalComThis() // undefined

// const normalComThisEspecial = normalComThis.bind({ nome: 'dany' })
// normalComThisEspecial() // ana

// const arrowComThis = () => console.log(this)
// arrowComThis() // window

// parâmetro padrão
function contagemRegressiva(
    inicio: number = 3,
    fim: number = inicio - 3
): void {
    console.log(inicio)

    while (inicio >= fim) {
        inicio--
        console.log(inicio)
    }
    console.log('Fim!')
}

contagemRegressiva()
contagemRegressiva(5) // mesmo com o padrão, posso chamar outro num.

// spread operator e rest (espalhar e juntar ...)
const numbers = [1, 10, 99, -5]
console.log(Math.max(...numbers))

const turmaA: string[] = ['joão', 'maria', 'dani']
const turmaB: string[] = ['fernando', ...turmaA]
console.log(turmaB)

// rest
function retornaArray(arg1: number, arg2: number): number[] {
    return [arg1, arg2]
}
const numeros = retornaArray(1, 2)
console.log(numeros)

function retornaArrayUsaRest(...args: number[]): number[] {
    return args
}
const numeros2 = retornaArrayUsaRest(1, 2, 3, 5)
console.log(numeros2)
const numeros3 = retornaArrayUsaRest(1, 2, 3, 5, 9, 5)
console.log(numeros3)
const numeros4 = retornaArrayUsaRest(...numbers) // spread e rest
console.log(numeros4)

// tupla
const tupla: [number, string, boolean] = [1, 'dani', true]

function tuplaParam(a: number, b: string, c: boolean): void {
    console.log(`1) ${a} ${b} ${c}`)
}
tuplaParam(...tupla)

function tuplaParam2(...params: [number, string, boolean]): void {
    console.log(`1) ${params[0]} ${params[1]} ${params[2]}`)
}
tuplaParam2(...tupla)

// Destructuring (array)
const caracteristicasCarro = ['Motor 1.0', 2000]
const [motor, ano] = caracteristicasCarro
console.log(motor, ano)

// Destructuring (objeto)
const item = {
    nome: 'sabao',
    preco: 10,
    caract: {
        w: 'importado'
    }
}

const { nome: n, preco: p, caract: { w }} = item
console.log(n, p, w)

// DESAFIOS

// Abaixo temos um código em JavaScript. "Traduza-o" para TypeScript!
const dobro = (valor: number): number => valor * 2;
console.log(dobro(10))

// Verifique se há espaço para melhorias nesse trecho de código!
const dizerOla = function (nome?: string ): void {
if (nome === undefined) { nome = "Pessoa" }
console.log("Ola, " + nome)
}
dizerOla()
dizerOla("Anna")

// Dado esse array, imprima o menor valor!
const nums = [-3, 33, 38, 5]
console.log(Math.min(...nums))

// Adicione os elementos de nums em array !
const array = [55, 20]
console.log(array.concat(...nums))
array.push(...nums)
console.log(array)

// Simplifique os trechos de código abaixo utilizando o operador Destructuring!
const notas = [8.5, 6.3, 9.4]
// const notas1 = notas[0]
// const notas2 = notas[1]
// const notas3 = notas[2]
const [nota1, nota2, nota3] = notas
console.log(nota1, nota2, nota3)


const cientista = {primeiroNome: "Will", experiencia: 12}
const { primeiroNome, experiencia } = cientista
// const primeiroNome = cientista.primeiroNome
// const experiencia = cientista.experiencia
console.log(primeiroNome, experiencia)

// API STARWARS: https://swapi.dev/
// callback

function esperar3s(callback: (dado: string) => void) {
    setTimeout(() => {
        callback('3 segundos depois...')
    }, 3000)
}

esperar3s(function (resultado: string) {
    console.log(resultado);
})

// promisse
function esperar3sPromisse() {
    return new Promise((resolve: any) => {
        setTimeout(() => {
            resolve('3 segundos depois...')
        , 3000})
    })
}

esperar3sPromisse()
    .then(dado => console.log(dado))

// exemplo com api starWas
fetch('https://swapi.dev/api/people/1/')
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(filme => console.log(filme))
    .catch(res => console.log(res))
