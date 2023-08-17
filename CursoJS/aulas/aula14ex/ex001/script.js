const inicio = document.getElementById('inicio');
const fim = document.getElementById('fim');
const passo = document.getElementById('passo');


document.getElementById('btn').addEventListener('click', () => {
    res.innerHTML = '';
    if (inicio.value == "" || fim.value == "" || passo.value == "") {
        window.alert('Preencha todos os campos!');
        return;
    }
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if (p <= 0) {
        window.alert('Passo inválido! Considerando passo 1');
        p = 1;
    } 
    for (let cont = i; cont <= f; cont += p) {
        res.innerHTML += `${cont} 👉`;
    };
    res.innerHTML += `🏁`;
});