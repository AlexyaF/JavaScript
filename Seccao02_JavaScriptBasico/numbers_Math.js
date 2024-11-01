let num1 = 1;
let num2 = 2.5;
console.log(num1.toString()+ num2);


//representação binária
let num3 = 1500;
console.log(num3.toString(2));


//Arredondar o valor, dentro dos parenteses se coloca a quantidade de casas decimais
let num4 = 10.87947949;
console.log(num4.toFixed(2));

//Objeto Math
let num5 = 9.54789;
console.log(Math.floor(num5)); //arredonda para cima
console.log(Math.ceil(num5)); //arredonda para baixo

//arredonda de acordo com a proximidade do numero 49< baixo 50> cima
let num6 = Math.round(4.5972);
console.log(num6)

//maior numero
console.log(Math.max(1,2,6,8,50,68,94,0));
console.log(Math.min(1,2,6,8,50,68,94,0));

//numero aleatorio]
const aleatorio = Math.random() * (10 - 5) + 5; //só vai de 0 à 0,9, necessário incrementar a função ((numero final - numero incial) + numero inicial)
console.log(Math.round(aleatorio));

//elevar um numero
console.log(Math.pow(2, 10));

