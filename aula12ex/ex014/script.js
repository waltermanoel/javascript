function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()

    msg.innerText = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = "fotos/foto-manha.png"

        window.document.querySelector("body").style.backgroundColor = "#bbc58b"

    } else if (hora >= 12 && hora <= 18) {
        img.src = "fotos/foto-tarde.png"

        window.document.querySelector("body").style.backgroundColor = "#df9278"

    } else if (hora > 18) { 
        /*
            Porque se da algum erro, vai colocar a imagem da noite independente da hora.
        */
        img.src = "fotos/foto-noite.png"
        
        window.document.querySelector("body").style.backgroundColor = "#8b8b8d"
    }

}

