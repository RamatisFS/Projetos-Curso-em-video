function calcular() {
    let valor = document.querySelector ('input#cxtxt').value
    let valortabuada = document.querySelector ('select#tabuadatxt')

    if (valor.length == 0) {
        alert('[ERRO] Comando inválido')
    } else {
        let v = Number(valor)
        valortabuada.innerHTML = ''
    for (let c = 1; c <= 10; c++) {
        let item = document.createElement('option')
        item.text = `${v} x ${c} = ${v*c}`
        item.value = `tab${c}`
        valortabuada.appendChild(item)
        }
    }

}