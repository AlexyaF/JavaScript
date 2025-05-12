const paragrafos = document.querySelector('.paragrafos');
const nodeList = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundBody = estilosBody.backgroundColor;

for (let p of nodeList){
    console.log(p);
    p.style.backgroundColor = backgroundBody;
    p.style.color = '#FFFFFF';
}