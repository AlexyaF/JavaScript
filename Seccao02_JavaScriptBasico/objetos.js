const pessoa1 = {
    nome:"Alexya",
    idade:20
};
const pessoa2 = {
    nome:"Ana",
    idade:27
};
 //é possível acessar uma variavel especifica dentro do objeto
console.log(pessoa1.idade);
console.log(pessoa2.nome);



//Funcao que cria objeto
function criaPessoa(nome, idade){
    return{
        nome: nome,
        idade: idade
    }
}

const pessoa = criaPessoa("Max", 55);
console.log(pessoa)


// Método dentro de um objeto
const objeto ={
    nome: "alexya",
    idade:20,

    fala() {
        console.log(`Minha idade atual é ${this.idade}`)
    }
}

objeto.fala()