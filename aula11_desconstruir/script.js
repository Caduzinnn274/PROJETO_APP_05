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
console.log(nomes);
console.log(nomes[2]);

let{0:priNome, 1:segNome, 2:tecNome}=nomes ;
console.log(priNome); 

let[nomeA, nomeB, nomeC] = nomes;
console.log(nomeA);  //Aparicio
console.log(nomeB);  //Bernadete
console.log(nomeC);  //Crimilda
