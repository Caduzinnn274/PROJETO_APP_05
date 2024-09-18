/*
//while
var x = 0;
document.write('<br><h1><center>Testando o loop com while</center></h1>');
while(x <10)
{
    document.write('<br> o valor de x é  ' + x);
    //incremento de x
    //x=x+1

    x++

    

}
//for
var valor = 12;
document.write('<br><br><h1><center>Testando o laço for</center></h1>');
for(a=0;a<valor; a++)
{
    document.write('<br><br>O valor de a é' + a);
    console.log(a * 2);
    
}
*/
//trocar(escolher)

function Pedir()
{
    var valor = parseInt(prompt('Digite uma opção de 1-4'));
    
    switch(valor)
    {
        case 1:
            alert("Você escolheu Suco");
            break;
        case 2:
            alert("Você escolheu Água gelada");
            break;
        case 3:
            alert("Você escolheu Sorvete");
            break;
        case 4:
            alert("Você escolheu Chamar garçom");
            break;
        default:
            alert("Escolha o valor de 1 até 4");
        
    }

}

