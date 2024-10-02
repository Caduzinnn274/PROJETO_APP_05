function listaAlunos(...alunos)
{
    console.log("Sejam bem vindos alunos!");
    console.log(alunos);
}
listaAlunos("Adamastor", "Benevides", "Cremilda", "Dete ");


function sorteadorNumeros(...numeros)
{
    console.log(numeros);
    const numero_sorteado = Math.floor (Math.random()*numeros.length);
    console.log(`A posição do número sorteado ${numero_sorteado}`);
    console.log(`E o número primo é  ${numeros[numero_sorteado]}`);
}

sorteadorNumeros(2,3,5,7,11,13,17,19)