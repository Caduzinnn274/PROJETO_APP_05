let pessoa = {
    nome: "João",
    sobrenome: "Vital",
    empresa: "CESF",
    cargo: "Analista de Sistemas",
}

console.log(pessoa);
/*
const{nome,cargo,empresa}=pessoa;
console.log(nome);
console.log(cargo);
console.log(empresa);
*/

let nome = 'TESTE';

const{nome:nomePessoa, cargo,empresa}=pessoa;

console.log(nome);
console.log(nomePessoa);
console.log(cargo);
console.log(empresa);


let nomes = ['Aparicio', 'Bernadete', 'Crimilda'];
console.log(nomes)
