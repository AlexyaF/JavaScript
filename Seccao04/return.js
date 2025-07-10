function falarFrase(comeco){
    function falarResto(resto){
        return comeco + ' ' + resto;
    };
    return falarResto
};

const olaMundo = falarFrase('Olá');
console.log(olaMundo('mundo!'));

//Exemplo de quando uma função seria ultil dentro de uma outra função
//Forma repetitiva
function duplica(n){
    return n *2
};
function triplica(n){
    return n *3
};
function quadriplica(n){
    return n *4
};

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))


//Função closure (fecha o escopo mesmo depois de seu uso, ou seja, tem acesso às variáveis externas ao seu escopo, mesmo após a função externa já ter sido finalizada.)
function criaMultiplicador(multiplicador){
    //multiplicador
    return function(n){
        return n * multiplicador
    };
}
// a função multiplicador mesmo após ser finalizada 'lembra' da variavel de criaMultiplicador

const duplicar = criaMultiplicador(2); //duplica
const triplicar = criaMultiplicador(3); //triplica
const quadriplicar = criaMultiplicador(4); //quadriplica

console.log(duplicar(2));
console.log(triplicar(2));
console.log(quadriplicar(2));

//Quando você cria uma função dentro de outra e a função filha (interna) acessa variáveis do escopo da função mãe (externa), você está criando uma closure (fechamento).