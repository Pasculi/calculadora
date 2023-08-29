const cero = document.querySelector('.cero');
const uno = document.querySelector('.uno');
const dos = document.querySelector('.dos');
const tres = document.querySelector('.tres');
const cuatro = document.querySelector('.cuatro');
const cinco = document.querySelector('.cinco');
const seis = document.querySelector('.seis');
const siete = document.querySelector('.siete');
const ocho = document.querySelector('.ocho');
const nueve = document.querySelector('.nueve');
const visor = document.querySelector('.container__calculadora__visor');
const borrar = document.querySelector('.borrar');
const masMenos = document.querySelector('.masMenos')

console.log(cero.value)

cero.addEventListener('click', () => {
  visor.innerText += '0';
})
uno.addEventListener('click', () => {
  visor.innerText += '1';
})
dos.addEventListener('click', () => {
  visor.innerText += '2';
});
tres.addEventListener('click', () => {
  visor.innerText += '3';
})
cuatro.addEventListener('click', () => {
  visor.innerText += '4';
})
cinco.addEventListener('click', () => {
  visor.innerText += '5';
});
seis.addEventListener('click', () => {
  visor.innerText += '2';
});
siete.addEventListener('click', () => {
  visor.innerText += '3';
})
ocho.addEventListener('click', () => {
  visor.innerText += '4';
})
nueve.addEventListener('click', () => {
  visor.innerText += '5';
});

borrar.addEventListener('click', () => {
  visor.innerText = '0'
})

