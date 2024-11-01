//Utilizar camelCase: primeira palavra com letra minúscula, e segunda palavra com a primeira letra  
// Não se pode redeclarar o valor de uma constante
// Não se pode modificar o valor de uma constante
//Deve se inciar uma constante já com um valor definido

const numero = 50;
const numero2 = 100;

const resultado = numero + numero2;

console.log(resultado);

let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 10
console.log(resultadoTriplicado);

// Descobrir tipo dodado 
tipo = typeof(resultadoTriplicado);
console.log(tipo);

const nome = 'Alexya';
const sobrenome = 'Fortunato';
const idade = 20;
const peso = 55
const altura = 1.50
let imc = peso / (altura * altura);
const anoAtual = new Date().getFullYear();
const dataNascimento = anoAtual - idade

console.log(`${nome} ${sobrenome}, tem ${idade} anos pesa ${peso}kg\ntem altura de ${altura} e seu IMC é de: ${imc} \n${nome}, nasceu em ${dataNascimento}.`);