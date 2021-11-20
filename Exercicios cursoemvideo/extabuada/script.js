
function calculo(){
    let tabuada = document.querySelector("input#input_tabuada")
    let resultado = document.querySelector("div#resultado")
    let select_tab = document.querySelector("select#select_tabuada")

    if (tabuada.value.length == 0){
        alert("[ERRO] Digite algo")
    }else{
        let t = Number(tabuada.value)

        select_tab.innerHTML = ''

        for (let contador = 1; contador <= 10  ; contador ++){
        
            let item = document.createElement("option")
            item.text = `${t} X ${contador} = ${t*contador}`
            select_tab.appendChild(item)
    }

    
        
    }
    
    
    



}