const numero = Number(prompt('Digito um número: '));
const numeroTitulo = window.document.getElementById('numero__titulo');
const textoTitulo = window.document.getElementById('texto')

numeroTitulo.innerHTML = numero;
textoTitulo.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`;
textoTitulo.innerHTML += `<p>É um númeor inteiro? ${Number.isInteger(numero)}</p>`;
textoTitulo.innerHTML += `<p>É NaN? ${Number.isNaN(numero)}</p>`;
textoTitulo.innerHTML += `<p>Arredondando para baixo:  ${Math.floor(numero)}</p>`;
textoTitulo.innerHTML += `<p>Arredondando para cima:  ${Math.ceil(numero)}</p>`;
textoTitulo.innerHTML += `<p>Arredondando com duas casas decimais:  ${numero.toFixed(2)}</p>`;