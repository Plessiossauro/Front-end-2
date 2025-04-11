// 4) Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
//    a. Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;
//    b. Em 1996 recebeu aumento de 0,15% sobre seu salário inicial;
//    c. A partir de 1997 (inclusive), os aumentos salariais sempre correspondem ao dobro do percentual do ano anterior. Faça um programa que determine o salário atual desse funcionário. 
//    d. Após concluir isto, faça uma segunda versão do seu código que permita o usuário informar o salário inicial do funcionário. Utilize obrigatoriamente a função prompt() para coletar o salário inicial.

let salario = parseFloat(prompt("Digite o sálario do funcionário: "))

let s96 = (1000*0.0015) + 1000
let s97 = (s96*0.003)+s96

let taxa = 0.003
let aumento = (s97*taxa)+s97
let anos = 0
for(let i=1998; i < 2025; i++){
    taxa = taxa *2
    s97 = salario97 + aumento
    anos++
}
console.log(parseFloat(s97))
console.log(anos)
console.log(parseFloat(taxa))
console.log(salario)
