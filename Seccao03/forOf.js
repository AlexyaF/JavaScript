const nome = ['alexya', 'silva', 'fortunato']

for (let valor of nome){
    console.log(valor);
}

nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array)
})

// For clássico - array e strings
// For in - Retorna o indice e chave, array, strings ou objetos
// For of Retorna dó o valor, iteráveis, arreys e strings