window.addEventListener('load', carregar)
function carregar() {
    let hora = new Date().getHours();
    let min = new Date().getMinutes();
    let msg = document.querySelector('.displayHora');
    let img = document.querySelector('.img');
    let imagem = document.querySelector('.imagem');
    msg.innerHTML = `${hora} horas e ${min} minutos`;
    if (hora >= 0 && hora <= 12) {
        img.src = 'imagens/manha-pq.png';
        window.document.body.style.background = '#008B8B';
    } else if (hora >= 13 && hora <= 16){
        img.src = 'imagens/tarde-pq.png';
        window.document.body.style.background = '#FFFF00';
    } else if (hora == 17) {
        img.src = 'imagens/entardecer-pq.png';
        window.document.body.style.background = '#FF4500'
    } else {
        img.src = 'imagens/noite-pq.png';
        window.document.body.style.background = '#1C1C1C';
    }
}
