const num = document.getElementById('num');
const exibir = document.getElementById('displayTabuada');

document.getElementById('btn').addEventListener('click', () => {
    if (num.value == "") {
        alert('Por favor, digite um número');
        return;
    }
    let n = Number(num.value);
    exibir.innerHTML = "";
    for (let i = 0; i <= 10; i++) {
        exibir.innerHTML += `${n} X ${i} = ${n * i} \n`
    };
});