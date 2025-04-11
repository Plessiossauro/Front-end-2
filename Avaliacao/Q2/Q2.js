//2) Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares 
//e a quantidade de números ímpares. Utilize obrigatoriamente a função prompt() para coletar os números.


function calcule(numeros){
    for(let i = 0 ; i < 10 ; i++){
        let numero = parseInt(prompt("Digite um número"))
        numeros.unshift(numero);
    }
    console.log("Soma: "+c);
}

function quat(numeros){
    let contadorP = 0
    let contadorI = 0
    for (i = 0; i < numeros.length ; i++){
        if(numeros[i] %2 == 0){
            contadorP = contadorP +1;
        }
    }elseif (numeros[i]%2 !=0);{
        contadorI = contadorI +1;
    }
}
console.log("Lista de números pares: "+contadorP)
console.log("Lista de números ímpares: "+contadorI)

{
    let numeros = []

    let resultado = calcule(numeros)
    console.log(numeros)
    let quantidade = quat(numeros)
}