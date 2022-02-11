function contar () {

    var doc = window.document
    var campoInicio = doc.getElementById("campoInicio")
    var campoFim = doc.getElementById("campoFim")
    var campoPasso = doc.getElementById("campoPasso")
    var inicio = Number(campoInicio.value)
    var fim = Number(campoFim.value)
    var passo = Number(campoPasso.value)
    var res = doc.getElementById("res")

    if (passo <= 0) {
        window.alert("Passo inválido! Considerando PASSO 1")
        passo = 1
        campoPasso.value = 1
    }

    if (campoFim.value.length == 0 || campoInicio.value.length == 0) {
        res.innerHTML = "Imposível contar!"
    } else {
        var atual = inicio

        if (inicio > fim) {
            passo *= -1
        }

        res.innerHTML = `Contando: <br>`

        for (atual; atual >= fim && inicio > fim || atual <= fim && inicio < fim || fim == inicio && atual == inicio; atual += passo){
            res.innerHTML += `${atual} &#x1F449;`
        }

        res.innerHTML += "&#x1F3C1"
    }
}
