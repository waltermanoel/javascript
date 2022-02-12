function gerarTabuada () {
    var numero = window.document.getElementById("numTabu")
    var tab = window.document.getElementById("seltab")

    if (numero.value.length == 0) {
        window.alert("Por favor! digite um número!")
    } else {
        tab.innerHTML = ""
        let n = Number(numero.value)
        for (var c = 1; c <= 10; c++) {
            let item = document.createElement("option")
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}
