const cliente = "Joaquim Brandão"
const opcaoMenu = 1
const quantidade = 5
const formaPagamento = "cartao"
const statusPedido = "cancelado"
let prato = "aguardando"
let precoUnitario = "aguardando"


switch(opcaoMenu){
    case 1:
        prato = "Sushi"
        precoUnitario = 32
        break
    case 2:
        prato = "Temaki"
        precoUnitario = 24
        break
    case 3:
        prato = "Yakisoba"
        precoUnitario = 28
        break
    case 4:
        prato = "Chá gelado"
        precoUnitario = 9
        break
    default:
        prato = "Opção invalida"
        precoUnitario = 0
        break
}

const subtotal = precoUnitario * quantidade
let freteStatus = subtotal >= 60 ? "Frete grátis" : "Frete pago"
let frete =  subtotal >= 60 ? 0 : 15
let pagamentoMensagem = "aguardanado"
let descontoPercentual = 0

switch(formaPagamento){
    case "pix":
          
        pagamentoMensagem = "Pagamento via Pix"
        break
    case "cartao":
         
        pagamentoMensagem = "Pagamento via cartão"
        descontoPercentual = 15
        break
    case "Dinheiro":
         
        pagamentoMensagem = "Pagamento em dinheiro"
        descontoPercentual = 15
        break
    default:
        "Invalido"
        break

}

const desconto = subtotal * 15/100
const total = subtotal - desconto + frete 
let statusMensagem = "Pedido cancelado" 

switch(statusPedido){
    case 1:
        statusPedido = "pendente"
        statusMensagem = "aguardando pagamento"
        break
    case 2:
        statusPedido = "aprovado"
        statusMensagem =  "Pedido em preparo"
        break
    case 3:
        statusPedido = "enviado"
        statusMensagem = "Pedido a caminho"
        break
    case 4:
        statusPedido = "cancelado"
        statusMensagem = "Pedido cancelado"
    default:
        "Status desconhecido"
        break
}

const resumo = `
cliente: ${cliente}
 opcaoMenu ${prato}
  quantidade ${quantidade}
   subtotal R$ ${subtotal}
    freteStatus ${freteStatus}
     pagamentoMensagem ${pagamentoMensagem}
      desconto ${desconto}%
      total R$ ${total}
      statusPedido ${statusPedido}
`


module.exports = {
    cliente,
    opcaoMenu,
    quantidade,
    formaPagamento,
    statusPedido,
    prato,
    precoUnitario,
    subtotal,
    freteStatus,
    frete,
    pagamentoMensagem,
    descontoPercentual,
    desconto,
    total,
    statusMensagem,
    resumo
} 
console.log(resumo)