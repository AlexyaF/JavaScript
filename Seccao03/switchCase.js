const data = new Date('2025-04-20 00:00:00');
const diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana) {
case 0:
    diaSemanaTexto ='Domingo';
    break; //o case nao sai do bloco ao encontrar a opção que atende a verificação como o if
case 1:
    diaSemanaTexto = 'Segunda';
    break; 
case 2:
    diaSemanaTexto = 'Terça';
    break; 
case 3:
    diaSemanaTexto = 'Quarta';
    break;
case 4:
    diaSemanaTexto = 'Quinta';
    break; 
case 5:
    diaSemanaTexto = 'Sexta';
    break; 
case 6:
    diaSemanaTexto = 'Sabado';
    break; 
default:
    diaSemanaTexto = '';
    // por ser a ultima condição sai do bloco automaticamente
}


// if (diaSemana == 1) {
//     diaSemanaTexto = 'Segunda'
// }else if (diaSemana ==2){
//     diaSemanaTexto = 'Terça'
// }else if (diaSemana ==3){
//     diaSemanaTexto = 'Quarta'
// }else if (diaSemana ==4){
//     diaSemanaTexto = 'Quinta'
// }else if (diaSemana ==5){
//         diaSemanaTexto = 'Sexta'
// }else if (diaSemana ==6){
//     diaSemanaTexto = 'Sabado'
// }else if (diaSemana ==0){
//     diaSemanaTexto = 'Domingo'
// }

console.log(diaSemana)
console.log(diaSemanaTexto)