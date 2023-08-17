const anoAtual = new Date().getFullYear();
const anoNasc = document.getElementById('ano');
const form = document.querySelector('form');

const exibir = document.getElementById('exibir');

anoNasc.setAttribute('max', anoAtual);
anoNasc.value = 2000;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const idade = anoAtual - anoNasc.value;
    if (anoNasc.value == '') {
        alert('Digite um ano válido');
        return;
    };
    exibir.innerHTML = `Sua idade é ${idade} anos`
    exibir.style.textAlign = 'center'
    
});

