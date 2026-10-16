const prompt = require("prompt-sync")()

const nomeTurno = prompt("Nome do turno: ")
const meta = Number(prompt("Meta de produção: "))
let producaoInicial = Number(prompt("Produção inicial: "))
const pecasPorCaixa = Number(prompt("Digite a quantidade de peças por caixa: "))
let producaoFinal = producaoInicial

while(producaoFinal < meta){
    producaoFinal++
}

let caixasNecessarias = 0
let restante = producaoFinal
do{
    caixasNecessarias++
    restante -= pecasPorCaixa
}while(restante > 0)
    const situacaoMeta = producaoFinal >= meta ? "Meta atingida" : "Meta não atingida"

    const resumo = `
    Turno: ${nomeTurno}
    Produção Final: ${producaoFinal}
    Caixas necessárias: ${caixasNecessarias}
    Situação da meta: ${situacaoMeta}
    `
console.log(resumo)


module.exports = {
    nomeTurno,
    meta,
    producaoInicial,
    pecasPorCaixa,
    producaoFinal,
    caixasNecessarias,
    situacaoMeta,
    resumo
}