let agora = new Date()
let hora = agora.getHours()
if (hora >= 0 && hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}