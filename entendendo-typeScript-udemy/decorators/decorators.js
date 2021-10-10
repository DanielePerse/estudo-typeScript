"use strict";
// decorators -> é um padrão de projeto, no TS é um recurso.
// como recurso é uma função - e chamo com @
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log("novo0...");
    }
};
Eletrodomestico = __decorate([
    logarClasse
], Eletrodomestico);
function logarClasse(construtor) {
    console.log(construtor);
}
// Decorator Factory - função que retorna um decorator
let Eletrodomestico2 = class Eletrodomestico2 {
    constructor() {
        console.log("novo2...");
    }
};
Eletrodomestico2 = __decorate([
    logarClasseSe(true)
], Eletrodomestico2);
function decoratorVazio(_) { }
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
let Eletrodomestico3 = class Eletrodomestico3 {
    constructor() {
        console.log("novo3...");
    }
};
Eletrodomestico3 = __decorate([
    logarObjeto
], Eletrodomestico3);
function logarObjeto(construtor) {
    console.log("carregado 1 única vez!");
    return class extends construtor {
        constructor(...args) {
            console.log("Antes...");
            super(...args);
            console.log("Depois...");
        }
    };
}
new Eletrodomestico3();
let Eletrodomestico4 = class Eletrodomestico4 {
    constructor() {
        console.log("novo4...");
    }
};
Eletrodomestico4 = __decorate([
    imprimivel
], Eletrodomestico4);
function imprimivel(construtor) {
    construtor.prototype.imprimir = function () {
        console.log(this);
    };
}
// está dando erro nessa chamada, então uma das soluções é colocar um cash (não mt bom)
new Eletrodomestico4().imprimir();
// posso criar uma interface e validar.. só deixa chamar se tiver algo (essa estratégia é melhor)
const eletro = new Eletrodomestico4();
eletro.imprimir && eletro.imprimir();
// Desafio decorator perfilAdmin
const usuarioLogado = {
    nome: "Guilherme Filho",
    email: "guigui@gmail.com",
    admin: true,
};
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log("Algo crítico foi alterado!");
    }
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
new MudancaAdministrativa().critico();
function perfilAdmin(construtor) {
    return class extends construtor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error("Sem permissão!");
            }
        }
    };
}
// decorator associado a método
class ContaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        else {
            return false;
        }
    }
    getSaldo() {
        return this.saldo;
    }
}
__decorate([
    naoNegativo
], ContaCorrente.prototype, "saldo", void 0);
__decorate([
    congelar
], ContaCorrente.prototype, "sacar", null);
__decorate([
    congelar
], ContaCorrente.prototype, "getSaldo", null);
const cc = new ContaCorrente(9500);
cc.sacar(5000);
cc.sacar(5000);
console.log(cc.getSaldo());
// inspiração Object.freeze()
function congelar(alvo, nomePropriedade, descritor) {
    console.log(alvo);
    console.log(nomePropriedade);
    descritor.writable = false;
}
function naoNegativo(alvo, nomePropriedade) {
    delete alvo[nomePropriedade];
    Object.defineProperty(alvo, nomePropriedade, {
        get: function () {
            return alvo["_" + nomePropriedade];
        },
        set: function (valor) {
            if (valor < 0) {
                throw new Error("Saldo inválido");
            }
            else {
                alvo["_" + nomePropriedade] = valor;
            }
        },
    });
}
//# sourceMappingURL=decorators.js.map