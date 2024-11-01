// Barra invertida (\) dentro do texto serve como escpae 
// EX:

// var string = "um "texto""; //incorreto
string = "um \"texto\""; //correto

console.log(string)

// encontrar caractere por indice
console.log(string[0]);
console.log(string.charAt(5));

// encontrar em qual indice começa a palavra ou caractere
console.log(string.indexOf("texto"))
console.log(string.indexOf("x", 4)) //apartir de tal indice

// aceita expressões regulares
let umaString = "Texto"
console.log(umaString.search(/x/));

//replace
umaString = "começo meio fim"
console.log(umaString.replace('x', 's'));
// para trocar além da primeira letra usar a tag 'g'
console.log(umaString.replace(/x/g, 's'));

//Tamanho string (total indices)
console.log(umaString.length);

//puxar partes especificas
console.log(umaString.slice(2,6));
console.log(umaString.slice(-3));
console.log(umaString.slice(-3, -2));

//divisão/separação string em array
console.log(umaString.split(' '))