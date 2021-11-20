var horas = new Date()
var minutos = new Date()

var horas_final = horas.getHours()
var minutos_final = minutos.getMinutes()

console.log(`São exatamente ${horas_final} horas e ${minutos_final} minutos`)
if (horas_final <12){
    console.log("Bom dia")S
}else if (horas_final < 18){
    console.log("Boa tarde")
}else {
    console.log("Boa noite")
}
