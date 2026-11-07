const prompt = require("prompt-sync")()

const turnos = Number(prompt("Quantos turnos? "))

let turnosAcimaDaMeta = 0

for (let i = 1; i <= turnos; i++) {
    const pecas = Number(prompt(`Peças do turno ${i}: `))

    if (pecas > 15) {
        turnosAcimaDaMeta++
    }
}
console.log(turnosAcimaDaMeta)

module.exports = turnosAcimaDaMeta


