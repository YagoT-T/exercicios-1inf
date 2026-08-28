// CRIE SUA SOLUÇÃO ABAIXO ================

const cliente = "Mariana Silva"
const cidade = "Fortaleza"
const produto = "Notebook Pro"
const categoria = "Notebook"
const preco = 3500
const quantidade = 2
const descontoPercentual = 10 
const valorPago = 7000
const subtotal = preco * quantidade
const valorDesconto = subtotal * descontoPercentual/100
const valorFinal = subtotal - valorDesconto
const troco = valorPago - valorFinal
const resumo = `${cliente} fez um pedio de um ${produto}, pagando R$ ${valorFinal} e recebendo R$ ${troco} de troco`

console.log(resumo)
console.log( `==================
TECHSTORE SISTEMAS
RESUMO DO PEDIDO
==================

Cliente: ${cliente}
Cidade: ${cidade}

Produto: ${produto}
Categoria: ${categoria}
Quantidade: ${quantidade}
Preço unitário: R$ ${preco}

Subtotal: R$ ${subtotal}
desconto: ${descontoPercentual}%
Valor do desconto: R$ ${valorDesconto}
Valor total: R$ ${valorFinal}

Valor pago: R$ ${valorPago}
Troco: R$ ${troco}

Obrigado pela compra!
======================
`)





// === FIM DO CÓDIGO =======================
// === NÃO FAZER NADA ABAIXO DESSA LINHA ===
module.exports = {
  cliente,
  cidade,
  produto,
  categoria,
  preco,
  quantidade,
  descontoPercentual,
  valorPago,
  subtotal,
  valorDesconto,
  valorFinal,
  troco,
  resumo
}