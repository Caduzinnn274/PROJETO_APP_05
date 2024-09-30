let primeiros = [1,2,3];
let numeros = [4,5,6];

let juntandosSpread = [...primeiros,...numeros];
console.log(juntandosSpread);

let pessoa = {
    nome: 'João',
    idade: 25,
    cargo:'Jornalista'
}

let dadosPessoa = {
    ...pessoa,
    status: 'Ativo',
    cidade: 'Campo Largo',
    
}
console.log(dadosPessoa);