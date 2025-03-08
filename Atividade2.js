 console.log("Textando")
 let listaParticipantesFeminino = [];
 let listaParticipantesMasculino = [];
 
 let participanteAltura;
 let participanteGenero;

for(i = 0; i < 15; i++) {
    participanteGenero = prompt("Diga se o aluno é do gênero masculino ou feminino");
        
    if (participanteGenero.toLowerCase() === "masculino") {
        participanteAltura = parseInt(prompt("Digite a alturado do participante em centímetros"), 10);
        listaParticipantesMasculino.push(participanteAltura);
    }else{
        participanteAltura = parseInt(prompt("Digite a aultura do participante em centímetros"), 10);
        listaParticipantesFeminino.push(participanteAltura);
        }
}
    
listaParticipantesFeminino.sort((a, b) => a - b);
listaParticipantesMasculino.sort((a, b) => a - b);

console.log(`Lista das participantes femininas: ${listaParticipantesFeminino}`);

let listaMediaMasculina = listaParticipantesMasculino.reduce((acc, curr) => acc + curr, 0) / listaParticipantesMasculino.lenght;
console.log(`A média da altura dos membros do grupo masculino é: ${listaMediaMasculina}`);

console.log(`A altura do maior membro do grupo masculino é de: ${Math.max(...listaParticipantesMasculino)}`);
console.log(`A altura do menor membro do grupo masculino é de: ${Math.min(...listaParticipantesMasculino)}`);
console.log(`A altura do maior membro do grupo feminino é de: ${Math.max(...listaParticipantesFeminino)}`);
console.log(`A altura do menor membro do grupo feminino é de: ${Math.min(...listaParticipantesFeminino)}`);
