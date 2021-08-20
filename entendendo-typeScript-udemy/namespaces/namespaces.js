"use strict";
// namespace -> declaramos os nomes das funcções ou constantes sem conflitar com o espaço global
// para utilizar -> referenciar através do nasmespace e exportar essas funções
var Areas;
(function (Areas) {
    const PI = 3.14;
    function circunferencia(raio) {
        return PI * Math.pow(raio, 2);
    }
    Areas.circunferencia = circunferencia;
    function retangulo(base, altura) {
        return base * altura;
    }
    Areas.retangulo = retangulo;
})(Areas || (Areas = {}));
console.log(Areas.circunferencia(10));
console.log(Areas.retangulo(30, 10));
// namespace aninhado
// namespace Geometria {
//     export namespace Area {
//         const PI = 3.14;
//         export function circunferencia(raio: number) {
//             return PI * Math.pow(raio, 2);
//         }
//         export function retangulo(base: number, altura: number): number {
//             return base * altura;
//         }
//     }
// }
console.log(Geometria.Area.circunferencia(10));
// namespace em múltiplos arquivos
// arquivos geometriaCirc e geometriaRect -> o cosole da linha 34 funciona normalmente
//# sourceMappingURL=namespaces.js.map