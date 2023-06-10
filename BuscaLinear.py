#Algoritmo de Busca linear em array

value = int(input("Digite um valor para ser pesquisado na lista: "))
array = (6,5,3,4,2,8,1,7)

def search(value, array):
    for i in range(len(array)):
        if(array[i]) == value:
            print(f"\nO valor encontrado foi: {array[i]}\nNa posição: {i}\n")

search(value, array)
