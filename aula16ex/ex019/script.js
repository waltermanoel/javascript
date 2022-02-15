let nums = []
let doc = window.document
let fina = false
let res = doc.getElementById("resCom")

function adicionar () {
    let campoNum = doc.getElementById("campoNum")
    let num = Number(campoNum.value)
    let vali = true
    

    if (campoNum.value.length == 0 || num < 1 || num > 100) {
        vali = false
    } else if (nums.length > 0) {
        for (let pos in nums) {
            if (nums[pos] == num) {
                vali = false
                break
            }
        }
    }
    if (vali == false) {
        alert("Valor inválido ou já encontrado na lista.")
    } else {
        let lista = doc.getElementById("lista")
        lista.innerHTML += `<option>Valor ${num} foi adicionado.</option>`
        nums.push(num)
        if (fina == true) {
            res.innerHTML = ""
            fina = false
        }
    }
    campoNum.value = null
}

function finalizar () {
    if (nums.length == 0) {
        alert("Adicione pelo menos um valor a lista.")
    } else if (!fina) {
        if (nums.length == 1) {
            res.innerHTML += `<p>Ao todo, temos ${nums.length} número cadastrado.</p>`
        } else {
        res.innerHTML += `<p>Ao todo, temos ${nums.length} números cadastrados.</p>`
        }
        
        let maior = null
        let menor = null
        let somaTodos = 0
        for (let c in nums) {
            if (c == 0) {
                maior = nums[c]
                menor = nums[c]
            } else if (nums[c] > maior) {
                maior = nums[c]
            } else if (nums[c] < menor) {
                menor = nums[c]
            }
            somaTodos += nums[c]
        }
        
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`

        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`

        res.innerHTML += `<p>Somando todos os valores, temos ${somaTodos}.</p>`

        media = somaTodos / nums.length

        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`

        fina = true
    }
}
