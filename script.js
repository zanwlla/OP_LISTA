//MAP

let lista = ['Altamiro','Bernabé','Clementino'];

lista.map((item)=>{
    console.log(`Retornando ${item} que está na posição ${index}`)
})

//REDUCE
//tenta reduzir um array a um valor único,
//normalmente através de operações matemáticas.
let numeros=[2,3,5];

let total = numeros.reduce((acumulador,numero,indice,original)=>{
    console.log(`${acumulador} - total até agora`);
    console.log(`${numero} - valor atual`);
    // console.log(`${indice} - posição até agora`);
    // console.log(`${original} - array original`);
    console.log('---------------------------------')
    return acumulador += numero;
})
console.log(`Total do reduce ${total}`);

//FINDI
//faz uma busca dentro do array e 
//retorna o primeiro valor encontrado

let listagem = [2,3,4,5,6];
let busca = listagem.find((item2)=>{
    return item2>4;
})
console.log(busca);

//FILTER
//filtrar elementos dentro de um array
//retorno de filter é um array
let palavras = ['alface','beterraba','cenoura','dill'];
//vamos criar um filtrp retornando palavras que tem menos que 7 caracteres 
resultado = palavras.filter((item3)=>{
    return item3.length<7;
})
console.log(resultado);

//implemente o código  que retorna array listagem, todos aqueles que são maior que 4.

resultado1 = listagem.filter((item4)=>{
    return item4>4;
})
console.log(resultado1);