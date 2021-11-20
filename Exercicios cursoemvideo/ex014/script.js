function carregar(){
    var msg = document.querySelector("div#msg")
    var img = document.querySelector("img#imagem")
    var msg2 = document.querySelector("div#msg2")
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} 
    minutos.`
    
    
    if(hora >= 0 && hora <12){
        img.src = 'imagem/foto_manha.png'
        msg2.innerHTML = `Bom Dia!`
        document.body.style.background = "#cbe2e9"
    }else if(hora >=12 && hora <18){
        img.src = "imagem/foto_tarde.png"
        msg2.innerHTML = `Boa Tarde!`
        document.body.style.background = "#dec4a6"
    }else{
        img.src = "imagem/foto_noite.png"
        msg2.innerHTML = `Boa Noite!`
        document.body.style.background = "#59426c"
    }
    if (hora >= 25){
        alert("ERRO. Hora inválida")
    }

}
