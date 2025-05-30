function dateNow() {
    const div = document.querySelector('#result');
    const data = new Date();
    // const diaMes = data.getDate();
    // const mes = data.getMonth();
    // const ano = data.getFullYear();
    // const diaSemana = data.getDay();
    // const horas = data.getHours();
    // const min = data.getMinutes();
    // const diaSemanaTexto = diaSemanaTxt(diaSemana);
    // const mesTexto = mesTxt(mes);

    const paragraph = document.createElement('p');
    paragraph.classList.add('date');
    // paragraph.textContent = `${diaSemanaTexto}, ${diaMes} de ${mesTexto} de ${ano}, ${zeroAEsquerda(horas)}:${zeroAEsquerda(min)}`
    paragraph.textContent = data.toLocaleString('pt-BR', {dateStyle:'full', timeStyle:'short'})
    div.appendChild(paragraph)
}

function zeroAEsquerda(num){
    return num >= 10? num : `0${num}`;
}

function diaSemanaTxt(dia) {
    let diaSemanaTexto;
    switch (dia) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break
    case 1:
        diaSemanaTexto = 'Segunda-feira';
        break
    case 2:
        diaSemanaTexto = 'Terça-feira';
        break
    case 3:
        diaSemanaTexto = 'Quarta-feira';
        break
    case 4:
        diaSemanaTexto = 'Quinta-feira';
        break
    case 5:
        diaSemanaTexto = 'Sexta-feira';
        break
    case 6:
        diaSemanaTexto = 'Sabado'
    }
    return diaSemanaTexto
}


function mesTxt(mes){
    let mesTexto;
    switch (mes){
    case 0:
        mesTexto = 'Janeiro'
        return mesTexto
    case 1:
        mesTexto = 'Fevereiro'
        return mesTexto
    case 2:
        mesTexto = 'Março'
        return mesTexto
    case 3:
        mesTexto = 'Abril'
        return mesTexto
    case 4:
        mesTexto = 'Maio'
        return mesTexto
    case 5:
        mesTexto = 'Junho'
        return mesTexto
    case 6:
        mesTexto = 'Julho'
        return mesTexto
    case 7:
        mesTexto = 'Agosto'
        return mesTexto
    case 8:
        mesTexto = 'Setembro'
        return mesTexto
    case 9:
        mesTexto = 'Outubro'
        return mesTexto
    case 10:
        mesTexto = 'Novembro'
        return mesTexto
    case 11:
        mesTexto = 'Dezembro'
        return mesTexto
    }
}

dateNow();

