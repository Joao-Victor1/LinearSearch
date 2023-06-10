//Algoritmo de busca linear

let value = 5;
array = [7,4,8,5,6,9,3,1,2];

function search(value, array){
    
    for(let i = 0; i <= array.length; i++){
        if(array[i] == value){
            console.log(`\nO valor encontrado foi: ${array[i]}\nNa posição: ${[i]}\n`);
        }
    }
}

search(value, array);
