var num = [5,7,4,6,3]
/*var contador = 1

num.sort()
num.push(10)

console.log(`Esses são os valores do vetor ${num}`)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O valor ${num[0]} está na position 0`)
console.log(`O valor ${num[2]} está na posição 2`)

for (var pos = 0 ; pos < num.length ;pos++ ){
    console.log(`na posição ${pos} tem o valor ${num[pos]}`)

} */
num.sort()

for (var pos in num){
    console.log(`Na posição ${pos} tem o valor ${num[pos]} `)
}

var index = num.indexOf(7)
if (index == -1){
    console.log(`[ERRO] Número não encontrado`)
}else{
    console.log(`O valor está na posição ${index}`)
}

