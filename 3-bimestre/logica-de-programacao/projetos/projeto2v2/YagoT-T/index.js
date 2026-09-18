const cliente = "Vitor Hugo Souza"
const encomenda = "Encomenda Frágil"
const valorBase = 90
const diasPermitidos = 30
const diasUtilizados = 50
const valorMultaPorDia = 2
const valorPago = 100

let prazoStatus
let diasAtraso
let pagamentoStatus
let troco
let statusEncomenda

if (diasUtilizados <= diasPermitidos) {
  prazoStatus = "Entregue dentro do prazo"
} else {
  prazoStatus = "Entregue com atraso"
}

if (diasUtilizados > diasPermitidos) {
  diasAtraso = diasUtilizados - diasPermitidos
} else {
  diasAtraso = 0
}

const multa = diasAtraso * valorMultaPorDia
const valorFinal = valorBase + multa

if (valorPago >= valorFinal) {
  pagamentoStatus = "Pagamento aprovado"
} else {
  pagamentoStatus = "Pagamento insuficiente"
}

if (pagamentoStatus === "Pagamento aprovado") {
  troco = valorPago - valorFinal
} else {
  troco = 0
}

if (diasUtilizados <= diasPermitidos) {
  statusEncomenda = "Encomenda concluída"
} else {
  if (valorPago >= valorFinal) {
    statusEncomenda = "Encomenda concluída com taxa adicional paga"
  } else {
    statusEncomenda =
      "Encomenda pendente: pagamento não cobre a taxa adicional"
  }
}
const resumo = `
Cliente: ${cliente}
Encomenda: ${encomenda}
Valor do frete: R$ ${valorBase}
Prazo prometido: ${diasPermitidos} horas
Tempo de entrega: ${diasUtilizados} horas
Status do prazo: ${prazoStatus}
Dias de atraso: ${diasAtraso}
Valor da multa: R$ ${multa}
Valor final: R$ ${valorFinal}
Valor pago: R$ ${valorPago}
Status do pagamento: ${pagamentoStatus}
Troco: R$ ${troco}
Situação da encomenda: ${statusEncomenda}
`

module.exports = {
  cliente,
  encomenda,
  valorBase,
  diasPermitidos,
  diasUtilizados,
  valorMultaPorDia,
  valorPago,
  prazoStatus,
  diasAtraso,
  multa,
  valorFinal,
  pagamentoStatus,
  troco,
  statusEncomenda,
  resumo
}


