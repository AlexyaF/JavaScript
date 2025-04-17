const form = document.querySelector('.form'); //usar '.' quando classe
const resultado = document.querySelector('.resultado');

function calcular(evento) {
    evento.preventDefault(); //evitar comportamento padrão de recarregar a pagina 
    let mensage = '';
    let classe = '';
    const peso = parseFloat(form.querySelector('#input-peso').value.replace(',','.')); //usar '#' quando id, sempre tranformar em valor, pois o html recebe em string
    const altura = parseFloat(form.querySelector('#input-altura').value.replace(',','.')); //replace caso usuário fornaça numero com virgula
    let imc =  peso / (altura ** 2);
    // remove qualquer classe que defina cor em resultado
    resultado.classList.remove('abaixo', 'normal', 'sobrepeso', 'obesidade')

    if (Number.isNaN(imc)) {
        classe = 'invalido'
        mensage = 'Valor informado inváido. Tente novamente!'
        imc = ''
        resultado.innerHTML = `<p class='${classe}'>${mensage}</p>`; 
    }else {  
        imc = parseFloat(imc)
        console.log(imc)
        if (imc <= 18.5){
            mensage = 'Abaixo do peso';
            classe = 'abaixo';
        } else if (imc > 18.5 && imc <= 24.9){
            mensage = 'Peso normal';
            classe = 'normal';
        } else if (imc > 24.9 && imc <= 29.9){
            mensage = 'Sobrepeso';
            classe = 'sobrepeso';
        } else if (imc > 29.9 && imc <= 34.9){
            mensage = 'Obesidade grau 1';
            classe = 'obesidade';
        } else if (imc > 34.9 && imc <= 39.9){
            mensage = 'Obesidade grau 2';
            classe = 'obesidade';
        } else if (imc >= 40){
            mensage = 'Obesidade grau 3';
            classe = 'obesidade';
        } else {
            classe = 'invalido';
            mensage = 'Valor informado inválido. Tente novamente!';
        }

        resultado.innerHTML = `<p class='${classe}'>Seu IMC é: ${imc.toFixed(2)} (${mensage})</p>`;
    }   
   
     
};

form.addEventListener('submit', calcular);