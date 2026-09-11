const cliente = "Lucas Almeida"
const produto = "Notebook Gamer"
const preco = 4500
const quantidade = 2
const estoque = 10
const valorPago = 9000
const subtotal = preco * quantidade
let descontoPercentual = "nenhum"

if (subtotal >= 1000) {
    descontoPercentual = 10
} else {
    descontoPercentual = 0
}
const valorDesconto = subtotal * descontoPercentual / 100
const valorFinal = subtotal - valorDesconto
const troco = valorPago - valorFinal

let statusPedido = "Aguardando"
let pagamentoStatus = "aguardo"
let estoqueDisponivel = "aguardando"



if (estoque >= quantidade){
    estoqueDisponivel = "Sim"
    statusPedido = "Pedido disponível para finalização" 
    console.log(statusPedido)
} else{
    statusPedido = "Pedido não disponível para finalização"
    estoqueDisponivel = "Não"
    console.log("Pedido não pode ser finalizado por falta de estoque")
}

if (valorPago >= valorFinal) {
    pagamentoStatus = "Pagamento aprovado" 
    
} else {
    pagamentoStatus = "Pagamento insuficiente"
}

const resumo = `Cliente: ${cliente}
Produto: ${produto}
Preço: R$${preco}
Quantidade: ${quantidade}
Estoque: ${estoque}
Valor Pago: R$${valorPago}
Desconto Percentual: ${descontoPercentual}%
Valor Desconto: R$ ${valorDesconto}
Valor Final R$ ${valorFinal}
Troco R$ ${troco}
Pagamento: ${pagamentoStatus}
Estoque disponível: ${estoqueDisponivel}
Status do pedido: ${statusPedido}`


module.exports = {
    cliente,
    produto,
    preco,
    quantidade,
    estoque,
    valorPago,
    subtotal,
    estoqueDisponivel,
    descontoPercentual,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusPedido,
    resumo
}