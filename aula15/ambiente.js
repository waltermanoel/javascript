let num = [5, 8, 2, 9, 3]
num.sort()
num.push(1)

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(num[0])

let valor = 8
let pos = num.indexOf(valor)
if (pos == -1) {
    console.log("O valor não foi encontrado")
} else {
console.log(`O valor ${valor} está na posição ${pos}`)
}
