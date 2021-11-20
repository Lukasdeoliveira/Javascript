function adicionar(){
    var valor = document.querySelector("input#valor").value
    var ana = document.querySelector("select#analise")
    var final = [valor]
    if (valor > 100 || valor < 1){
        alert("[ERRO] Digite um numero entre 1 e 100")
    }
    
}