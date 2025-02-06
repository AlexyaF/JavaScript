const nomes = ['Ana', 'Pedro', 'Maria'];

nomes[0] = 'Alexya'; // se o indice existe ele substitui 
nomes[3] = 'Jhonatan'; //se o indice nao existe ele cria


//adicionar item no final do array
nomes.push('Sueli');

//adicionar item no inicio do array
nomes.unshift('Luiza');

//remover item do final do array
// nomes.pop();
const removido = nomes.pop(); //é possível passar o item removido para uma variavel 

//remover item do inicio do array
nomes.shift();

//apagar item sem mudar indice, o item fica empty
delete nomes[1];

//fatiar array
console.log(nomes.slice(0,-3));

//validar array
console.log(nomes instanceof Array);

console.log(nomes);
console.log(nomes.length);

// const array = é possível alterar os valores atribuidos mas nao o tipo de valor que pode ser atribuido.
// Isso pode

const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array); // [ 1024, 2, 3, 4 ]
 
// Isso NÃO pode

const array = [1, 2, 3, 4, 5];
array = 'Legal'; // Assignment to constant variable.
