let cont = 0
let contagem = document.getElementById('contagem')

function contador() {
    let contador = document.getElementById('contador')
    cont += 1
    contagem.innerHTML = `<mark>${cont}</mark>`
}

function zerar() {
    cont = 0
    contagem.innerHTML = `<mark>${cont}</mark>`
}