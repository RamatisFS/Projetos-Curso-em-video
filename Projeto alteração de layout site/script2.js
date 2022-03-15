function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    //let hora = 15
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 8 && hora < 12) {
        // BOM DIA!
        img.src = 'hora da manha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'hora da tarde.jpg'
        document.body.style.background = '#ff8c00'
    }else {
        // BOA NOITE!
        img.src = 'hora da noite.jpg'
        document.body.style.background = '#363636'
    }
}
