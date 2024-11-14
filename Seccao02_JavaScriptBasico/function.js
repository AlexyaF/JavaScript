// funcao sem retorno
function saudacao(nome) {
    console.log(`Bom dia! ${nome}`);
    return nome;
}

saudacao("ALEXYA");
const variavel = saudacao("Alexya");
console.log(variavel);



// funcao com retorno
function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(6,8));
const result = soma(2,4);
console.log(result);

console.log('alexya', 'fortunato');


// No caso de adcionar uma funcao a uma variavel
const raiz = function (n) {
    return n **0.5;

}; // necessário ponto e virgula nesse caso

console.log(raiz(5));


// Arrow function
const raiz2 = n => n**5;
console.log(raiz2(6));