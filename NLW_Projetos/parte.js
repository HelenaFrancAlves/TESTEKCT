const apikey = document.querySelector('#apikey');
const duvidaseletor = document.getElementById('duvidaseletor');
const perg_button = document.getElementById('perg_button');
const respostaIA = document.getElementById('respostaIA');
const form = document.getElementById('form');

const enviarformulario = (event)=>{
event.preventDefault();
console.log(event);
}
form.addEventListener("submit", enviarformulario);