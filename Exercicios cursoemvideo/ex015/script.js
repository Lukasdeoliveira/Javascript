function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var dados_ano = document.querySelector("input#txtano")
   //---------------------------
   //Cria uma TAG IMG. Elemento img vai ser IMG
   var img = document.createElement("img")
   //---------------------------
   //Cria a TAG IMG com o ID "foto"
   img.setAttribute("id", "foto")
   //----------------------------
   if (dados_ano.value.length == 0 || dados_ano.value > ano){
       alert("[ERRO] Verifique os dados novamente e tente denovo")
   }else{
       var fsex = document.getElementsByName("radsex")
       var idade = ano - Number(dados_ano.value)
       var genero = ''
       if (fsex[0].checked){
           genero = 'homem'
           if (idade >= 0 && idade <= 10){
            //Criança
            img.setAttribute('src', 'imagem/bebe-m.png')
        } else if (idade <=21){
            //Jovem
            img.setAttribute("src", "imagem/jovem-m.png")
        } else if (idade <=50){
            //Adulto
            img.setAttribute("src", "imagem/adulto-m.png")
        } else{
            //Idoso
            img.setAttribute("src", "imagem/velho-m.png")
        }
           
           
       }else if(fsex[1].checked){
           genero = 'mulher'
           if (idade >= 0 && idade <= 10){
            //Criança
            img.setAttribute('src', 'imagem/bebe-f.png')
        } else if (idade <=21){
            //Jovem
            img.setAttribute("src", "imagem/jovem-f.png")
        } else if (idade <=50){
            //Adulto
            img.setAttribute("src", "imagem/adulto-f.png")
        } else{
            //Idoso
            img.setAttribute("src", "imagem/velho-f.png")
        }
       }
       res.style.textAlign = "center"
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       //Adicionar um elemento (img)
       res.appendChild(img)
      


   }

}