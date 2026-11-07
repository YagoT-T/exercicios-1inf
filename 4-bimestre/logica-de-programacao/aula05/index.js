const prompt = require("prompt-sync")()

const dias = Number(prompt("Quantos dias? "))

let totalProduzido = 0

for (let i = 1; i <= dias; i++) {
    const producao = Number(prompt(`Produção do dia ${i}: `))
    totalProduzido += producao
}
console.log("Total produzido: ", totalProduzido)

module.exports = totalProduzido
