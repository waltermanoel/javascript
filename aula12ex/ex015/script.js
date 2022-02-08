function verificar () {
    
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById("txtano")
    var res = document.getElementById("res")
    
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert("[ERRO!] Verifique os dados e tente novamente")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fAno.value)
        var sexo = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if (fsex[0].checked) {
            sexo = "Homem"
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute("src", "fotos/foto-criança-m.png")
            } else if (idade < 21) {
                //Jovem
                img.setAttribute("src", "fotos/foto-jovem-m.png")
            } else if (idade < 50) {
                //Adulto
                img.setAttribute("src", "fotos/foto-adulto-m.png")
            } else {
                //Idoso
                img.setAttribute("src", "fotos/foto-idoso-m.png")
            }


        } else if (fsex[1].checked) {
            sexo = "Mulher"
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute("src", "fotos/foto-criança-f.png")
            } else if (idade < 21) {
                //Jovem
                img.setAttribute("src", "fotos/foto-jovem-f.png")
            } else if (idade < 50) {
                //Adulto
                img.setAttribute("src", "fotos/foto-adulto-f.png")
            } else {
                //Idoso
                img.setAttribute("src", "fotos/foto-idoso-f.png")
            }
        } 
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos`  
        res.appendChild(img)
        fAno.value = 0
    }
}
