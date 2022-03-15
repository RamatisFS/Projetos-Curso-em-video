function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let formularioano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (formularioano.value.length == 0 || Number(formularioano.value) > ano) {
        alert('Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(formularioano.value)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute ('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 12) {
                // criança
                img.setAttribute = ('src', 'fotobebem.png')
                console.log(img.value)
            } else if (idade <= 21) {
                // Jovem
                img.setAttribute = ('src', 'fotojovemm.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute = ('src', 'fotoadultom.png')
            } else {
                // Idoso
                img.setAttribute = ('src', 'fotoidosom.png')
            }
        } if (fsex[1].checked) {
            gênero='Mulher' 
        } else if (idade >= 0 && idade < 12) {
            // Criança
            img.setAttribute = ('src', 'fotobebef.png')
        } else if (idade <= 21) {
            // Jovem
            img.setAttribute = ('src', 'fotojovemf.png')
        } else if (idade < 60) {
            // Adulta
            img.setAttribute = ('src', 'fotoadultof.png')
        } else {
            // Idosa
            img.setAttribute = ('src', 'fotoidosof.png')
         } 
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        //res.style.textAlign = 'center' - centralizar o texto por js
    }
}