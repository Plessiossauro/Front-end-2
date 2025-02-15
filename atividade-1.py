##Atividade-1
##Obtenha dados da altura e o gênero (Masculino ou Feminino) de 15 pessoas e apresente os seguintes resultados:

##- A maior e a menor altura do grupo;
##- A média de altura das pessoas do gênero Masculino;
##- O número de pessoas do gênero Feminino.

lista_participantes_feminino = []
lista_participantes_masculino = []

participante_altura = int
participante_genero = str

for i in range(15):
    participante_genero = str(input("Digite o gênero do participante seja ele masculino ou feminino:"))

    if participante_genero == "masculino":
        participante_altura = int(input("Digite a altura do participante em centímetros:"))
        lista_participantes_masculino.append(participante_altura)
    else:
        participante_altura = int(input("Digite a altura do participante em centímetros:"))
        lista_participantes_feminino.append(participante_altura)

lista_participantes_feminino.sort()
lista_participantes_masculino.sort()

print(f"lista das participantes femininas {lista_participantes_feminino}")
print(f"lista dos participantes masculinos {lista_participantes_masculino}")

print(f"A quantidade de perticipantes femininos são de : {len(lista_participantes_feminino)}")

lista_media_masculina = sum(lista_participantes_masculino) / len(lista_participantes_masculino)

print(f"A média da altura dos membros do grupo masculino é de: {lista_media_masculina}")

print(f"A altura do maior membro do grupo masculino é de: {max(lista_participantes_masculino)}")
print(f"A altura do menor membro do grupo masculino é de: {min(lista_participantes_masculino)}")
print(f"A altura do maior membro do grupo feminino é de: {max(lista_participantes_feminino)}")
print(f"A altura do menor membro do grupo feminino é de: {min(lista_participantes_feminino)}")
