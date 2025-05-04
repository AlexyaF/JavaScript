const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}

]

function findElement(){
    const result = document.querySelector('.resultado');
    return result
}

function addNaTela(){
    const resultado = findElement();
    for (let i = 0; i < elementos.length; i++){
        const {tag, texto: frase} = elementos[i]; //Nomear a variavel o valor vem antes 'valor --> variavel'
        const element = document.createElement(tag);
        element.textContent = frase;
        

    resultado.appendChild(element);
    }
}


addNaTela();