var idade = 66
console.log(`Você tem ${idade} anos.`)
if (idade < 16){
    console.log ("Não vota")
}else if (idade < 18 || idade > 65){
    console.log("Voto opcional")
}else{
    console.log("Voto obrigatorio")
}

var idade = 66
console.log(`Você tem ${idade} anos.`)
if (idade > 18){
    console.log("Voto obrigatorio")

} else if (idade <16){
    console.log("Não vota")

}if (idade >= 16 && idade < 18){
    console.log("Voto opcional")
}
