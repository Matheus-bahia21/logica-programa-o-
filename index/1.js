const frutas = ['Maçã', 'Banana ', 'Laranja' ]  

console.log('exibindo todos os elementos dentro do vetor.')
console.log(frutas)

console.log('\nexibindo apenas um elemento dentro do vetor.')
console.log(frutas [0])
console.log(frutas [2])

console.log('\nAdicionando elemento ao vetor.')
frutas.push('Uvas')
console.log(frutas)

console.log('\nRemovendo o último elemento do vetor.')
frutas.pop()
console.log(frutas)

console.log('\nremovendo o primeiro elemento do vetor.')
frutas.shift()
console.log(frutas)

console.log('\npercorrendo o vetor.')
frutas.forEach((frutas, index)=> {
    console.log('${i++index}: ${frutas}')
})
