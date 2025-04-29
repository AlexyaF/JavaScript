// let a  ='A';
// let b  ='B';
// let c  ='C';

// const letras = [b,c,a];
// [a,b,c] = letras; //desestruturação, forma de mudar o valor das variáveis

// console.log(a,b,c)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const primeiroNumero = numeros[0]; caso eu fosse querer atribuir cada numero a uma variável
// A desestruturação é para facilitar esse processo
const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;  //.. rest operato ou spread operator 
console.log(primeiroNumero, segundoNumero, terceiroNumero, resto);

const [um, , tres, , cinco] = numeros; //posso pular valores
console.log(um, tres, cinco);


const numero = [
    [1,2,3], // indice 0, com indices de 0 a 2
    [4,5,6], // indice 1, com indices de 0 a 2
    [7,8,9]  // indice 2, com indices de 0 a 2
];
console.log(numero[0][2])

const [,[,,seis]] = numero;
console.log(seis);

const[lista1, lista2, lista3] = numero;
console.log(lista1)