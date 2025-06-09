const relogio = document.querySelector('.container__texto__relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let intervalo = null;

function timer(relogio){
    let [horas, minutos, segundos] = relogio.innerText.split(":").map(Number);

    intervalo = setInterval(() => {
        segundos++;

        if (segundos >= 60) {
            segundos = 0;
            minutos++;
        }

        if (minutos >= 60){
            minutos =0;
            horas++;
        }

        const horaFormatada = 
            String(horas).padStart(2, "0") + ":" +
            String(minutos).padStart(2, "0") + ":" +
            String(segundos).padStart(2, "0");

        relogio.innerHTML = horaFormatada;
    },1000 );
    return intervalo;
}

document.addEventListener('click', function(e){ //identificar qual elemento da pagina esta sendo clicado
    const el = e.target; //propriedade do evento que retorna o elemento HTML exato que foi clicado.
    
    if(el.classList.contains('zerar')){
        relogio.classList.add('pausa')
        clearInterval(intervalo);
        relogio.innerHTML = "00:00:00";

    }

    if(el.classList.contains('iniciar')){
        clearInterval(intervalo);
        timer(relogio);
        relogio.classList.remove('pausa')
    }

    if(el.classList.contains('pausar')){
        relogio.classList.add('pausa')
        clearInterval(intervalo);
    }
})


// DE FORMA REPETITIVA 
// iniciar.addEventListener('click', function(event){
//     clearInterval(intervalo);
//     timer(relogio);
//     relogio.classList.remove('pausa')

// });

// pausar.addEventListener('click', function(event){
//     relogio.classList.add('pausa')
//     clearInterval(intervalo);
// });

// zerar.addEventListener('click', function(event){
//     relogio.classList.add('pausa')
//     clearInterval(intervalo);
//     relogio.innerHTML = "00:00:00";
// });

