function contar () {
    

    var doc = window.document
    var inicio = Number(doc.getElementById("campoInicio").value)
    var fim = Number(doc.getElementById("campoFim").value)
    var passo = Number(doc.getElementById("campoPasso").value)
    var res = doc.getElementById("res")

    if (passo == 0) {
        passo = 1
        window.alert("Passo inválido! Considerando PASSO 1")
    }
    if (fim.length == null || inicio.length == 0) {
        res.innerHTML = "Imposível contar!"
    } else {
        var atual = inicio

        if (inicio > fim) {
            passo *= -1
        }

        res.innerHTML = `Contando: <br>`

        
        for (atual; atual >= fim && inicio > fim || atual <= fim && inicio < fim; atual += passo){
            res.innerHTML += `${atual} &#x1F449;`
        }

        res.innerHTML += "&#x1F3C1"
    }
}
