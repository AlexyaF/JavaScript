//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

const dataMarco0 = new Date(0); //01/01/1970 Timestamp unix
console.log(dataMarco0)

const data = new Date(2019,3,20,15,14,27);
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth()) //mês começa no 0
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Segundo', data.getSeconds())
console.log('Ms', data.getMilliseconds())
console.log('Dia semana', data.getDay()) // 0 - domingo, 6- sabado

console.log(data)

//data pode ser passado como vazia, valor, string ou timestamp