const nome = "Yago Teixeira"
const idade = 24
const cargo= "comum"
const possuiInscricao = true
const bloqueado = false
const valorInscricao = 60
const valorPago= 60
let idadeStatus = "Idade permitida"
let nivelAcesso = "Aguardando"
let acessoStatus = "Aguardando"
let pagamentoStatus = "Aguardando"
let troco = "Aguardando"
let statusFeira = "Aguardando"


if (cargo === "intrutor" || cargo === "coordenador"){
    nivelAcesso = "Acesso administartivo liberado"
} else {
    nivelAcesso = "Acesso comum"
}

if (possuiInscricao && idade >= 18 && !bloqueado){
    acessoStatus = "Credenciamento liberado"
} else{
    acessoStatus = "Credenciamento negado"
}

if (valorPago >= valorInscricao ){
    pagamentoStatus = "Pagamento aprovado"
    troco = valorPago - valorInscricao
} else {
    pagamentoStatus = "Pagamento insuficiete"
    troco = 0
}

if (acessoStatus === "Credenciamento liberado" && pagamentoStatus === "Pagamento aprovado"){
    statusFeira = "Check-in da feira confirmado"
} else {
    statusFeira = "Check-in da feira não confirmado"
}

const resumo = `Aluno: ${nome}
Categoria: ${cargo}

Nível de acesso: ${nivelAcesso}
Valor pago: ${valorPago}
Troco: ${troco}
Situação do acesso: ${acessoStatus}
Situação do pagamento: ${pagamentoStatus}
Situação final: ${statusFeira}`

module.exports = {
    nome,
    idade,
    cargo,
    possuiInscricao,
    bloqueado,
    valorInscricao,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusFeira,
    resumo
}