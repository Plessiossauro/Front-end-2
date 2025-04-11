// 3) Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e soma  dos valores

function valorMaior(numeros){
    let maior = numeros[0]
    for(let i = 0; i < n; i++){
        if(numeros[i]<menor){
            menor = numeros[i]
        }
    }
    console.log("O maior valor presente na lista é: "+maior)
}

function valorMenor(numeros){
    let menor = numeros[0]
    for(let i = 0; i < n; i++){
        if(numeros[i] < menor){
            menor = numeros[i]
        }   
    }
    console.log("O menor valor presente na lista é: "+menor)
}

function valorSoma(numeros){
    let soma = 0
    for(let i = 0; i < n; i++){
        soma = soma + numeros[i]
    }
    console.log("A soma da lista é: "+soma)
}

let numeros = [2,4,6,7,3]
let n = numeros.length
resultadoMaior = maiorValor(numeros)
resultadoMenor = menorValor(numeros)
resultadoSoma = somaValor(numeros)
