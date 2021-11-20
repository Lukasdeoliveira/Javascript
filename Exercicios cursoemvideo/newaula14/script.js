function clicar(){

    var inicio = document.querySelector("input#input_inicio")
    var fim = document.querySelector("input#input_fim")
    var passo = document.querySelector("input#input_passo")
    var resultado = document.querySelector("div#div_resultado")

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        resultado.innerHTML = `Impossivel contar`
        alert("[ERRO] Preencha todos os campos")
    
    }else{
        
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0){
            alert("Passo 0 inválido. PASSO agora vale 1")
            p = 1
        }

        if(i < f){
            for(var c = i ; c <= f ; c += p ){

                    resultado.innerHTML += `${c} \u{1F449} ` 
            }
            
        }else{
            for (let c = i ; c >= f ; c -= p ){
                resultado.innerHTML +=`${c} \u{1F449} `
            }
        }

            
        resultado.innerHTML += `\u{1F3C1}`
        
        
    }
    

}