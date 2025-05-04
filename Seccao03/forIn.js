const fruits = ['Apple', 'Grape', 'Strawberry'];

for (let i in fruits){
    console.log(fruits[i])
}

const pessoa = {
    nome : 'Alexya',
    sobrenome:'Fortunato',
    idade: 21
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}