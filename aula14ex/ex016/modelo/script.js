function contar () {
    

    var doc = window.document
    var inicio = Number(doc.getElementById("campoInicio").value)
    var fim = Number(doc.getElementById("campoFim").value)
    var passo = Number(doc.getElementById("campoPasso").value)
    var res = doc.getElementById("res")

    if (passo == null || passo == 0) {
        passo = 1
        window.alert("Passo inválido! Considerando PASSO 1")
    }

    var atual = inicio

    if (inicio > fim) {
        passo *= -1
        for (atual; atual >= fim; atual = atual + passo){
            console.log(atual)
        }
    } else {
        for (atual; atual <= fim; atual = atual + passo) {
            console.log(atual)
        }
    }

}
