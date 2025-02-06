// Primitivos (imutaveis) - cria cópia na memória 
// Referência (mutavel) - faz apenas referência na memória

let nome = 'alexya';
console.log(nome);

// nao pode 
nome[0]= 'B';
console.log(nome);

// pode
nome = 1;
console.log(nome);

//Imutabilidade não significa que a variável não pode mudar, e sim que o valor original não pode ser alterado.