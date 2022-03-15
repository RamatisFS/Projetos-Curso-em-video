function contar() {
    let inicio = document.querySelector('input#ini').value;
    let fim = document.querySelector('input#fim').value;
    let passo = document.querySelector('input#pass').value;
    let res = document.querySelector('div#res')

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        alert('[ERRO] Digite um número válido')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)
    if (p <= 0 ) {
        alert('Passo inválido! considerando PASSO 1')
        p = 1
    }
    if (i < f) {
        // contagem crescente
        for (let c = i; c <= f; c += p) { 
            res.innerHTML += `${c} \u{23F3}`
        }
    } else {
        // contagem regressiva
        for (let c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{23F3}`
        } 
    }   
    res.innerHTML += `\u{1F3C1}`
    }
}