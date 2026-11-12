const prompt = require("prompt-sync")()

const limiteEstoqueBaixo = Number(prompt("Limite de estoque baixo: "))
const quantidade = Number(prompt("Quantidade de produtos: "))

const catalogo = []

for (let i = 0; i < quantidade; i++) {
    const nome = prompt(`Produto ${i + 1} - nome: `)
    const preco = Number(prompt(`Produto ${i + 1} - preço: `))
    const estoque = Number(prompt(`Produto ${i + 1} - estoque: `))

    catalogo.push({ nome, preco, estoque })
}

let produtoMaisCaro = catalogo[0]

for (let i = 1; i < catalogo.length; i++) {
    if (catalogo[i].preco > produtoMaisCaro.preco) {
        produtoMaisCaro = catalogo[i]
    }
}

produtoMaisCaro = produtoMaisCaro.nome

let estoqueTotal = 0

for (let i = 0; i < catalogo.length; i++) {
    estoqueTotal += catalogo[i].estoque
}

let produtosComEstoqueBaixo = 0

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].estoque <= limiteEstoqueBaixo) {
        produtosComEstoqueBaixo++
    }
}

const nomeReajuste = prompt("Reajuste - nome do produto: ")
const aumento = Number(prompt("Reajuste - aumento: "))

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].nome === nomeReajuste) {
        catalogo[i].preco += aumento
    }
}

const resumo = `Produto mais caro: ${produtoMaisCaro}
Estoque total: ${estoqueTotal}
Produtos com estoque baixo: ${produtosComEstoqueBaixo}`

console.log("\n" + resumo)





module.exports = {
    catalogo,
    limiteEstoqueBaixo,
    produtoMaisCaro,
    estoqueTotal,
    produtosComEstoqueBaixo,
    resumo
}
