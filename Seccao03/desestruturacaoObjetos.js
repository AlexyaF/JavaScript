const pessoa = {
    nome: 'Luiz',
    sobrenome : 'Miranda',
    idade: 30,
    endereco : {
        rua: 'Av Brasil',
        numero:320
    }
};

// const nome = pessoa.nome;
// console.log(nome);

// Atribuição via desestruturação
const {nome, sobrenome} = pessoa; // já vai cirar uma variavel usando a chave que eu passei do objeto q eu passei
console.log(nome, sobrenome)
// caso a chve nao exista posso adiiconar um padrão {nome = 'Nao existe'}

//Para criar o nome da variavel e passar o valor da chave
// const { nome: teste = '', sobrenome} = pessoa;
// console.log(teste, sobrenome)


// como pegar os valores dentro de um objeto que esta dentro de um objeto
const {endereco: {rua:rua, numero}} = pessoa;
console.log(rua, numero);