"use strict";
var canal = 'Gaveta';
var inscritos = 610234;
// canal = inscritos
console.log(canal);
// mesmo a variável 'nome' não existindo aqui, ela exite em tipos, e como estão no mesmo escopo 'index', aparece erro de nome já usado.
// let nome = 'Pedro'
// exemplo any -> noImplicitAny
function soma(a, b) {
    return a + b;
}
// strictNullChecks - noUnusedLocals - noUnusedParameters
function saudar(isManha) {
    var saudacao;
    if (isManha) {
        saudacao = 'bom dia';
    }
    else {
        saudacao = 'boa noite';
    }
    return saudacao;
}
//# sourceMappingURL=compilador.js.map