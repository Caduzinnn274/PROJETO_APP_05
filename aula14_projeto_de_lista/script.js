
let lista = ["Altamiro", "Barnabé", "Credivaldo"];

lista.map((item, index)=>{
    console.log(`Retornando ${item} que esta na posição ${index}`);
})


let numeros = [2, 3, 5]

let total = numeros.reduce((acumulador, numero,indice, original)=>{
    console.log(`${acumulador} - total até agora`);
    console.log(`${numero} - valor atual`);
    //console.log(`${indice} - posição até agora`);
    //console.log(`${original} - array original`);
    console.log("---------------------------------")
    return acumulador += numero;

})
console.log(`Total do reduce ${total}`);