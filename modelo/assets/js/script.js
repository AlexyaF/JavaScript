const form = document.querySelector('.form'); //usar . quando classe
const resultado = document.querySelector('.resultado');

function calcular(evento) {
    evento.preventDefault(); //evitar comportamento padrão de recarregar a pagina 
    const peso = form.querySelector('#input-peso').value; //usar # quando id, sempre tranformar em valor, pois o html recebe em string
    const altura = form.querySelector('#input-altura').value;
    const imc =  peso / (altura ** 2);

    resultado.innerHTML = `<p>${imc}</p>`;
};

form.addEventListener('submit', calcular);