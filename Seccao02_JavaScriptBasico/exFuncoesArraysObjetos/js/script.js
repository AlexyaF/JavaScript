function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = []; //array
    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert('1');
    //     console.log('enviado');

    // };


    function receberEvento(evento){
        const dados = {      
            nome : form.querySelector('.Nome').value,
            sobrenome : form.querySelector('.Sobrenome').value,
            peso : form.querySelector('.Peso').value,
            altura : form.querySelector('.Altura').value
        };
        evento.preventDefault();
        // console.log(`Nao enviado ${contador}`);
        // contador++;
        pessoas.push(dados);
        resultado.innerHTML += `<p>${dados.nome}, ${dados.sobrenome}, ${dados.peso}, ${dados.altura} </p>`
    }
    form.addEventListener('submit', receberEvento);
    console.log(pessoas);

};

meuEscopo();