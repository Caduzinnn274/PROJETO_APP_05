    var area = document.getElementById("area");
    
    
    function entrar()
    {
        var nome =prompt("Qual seu nome?");

        if(nome === null || nome === "")
        {
            alert("insira um nome !!!!");
            area.innerHTML = "Clique no botão para acessar"
        }
        else
        {
            area.innerHTML = "Bem vindo " + nome;
            let botaoSair = document.createElement('button');
            botaoSair.innerText = "Sair";
            botaoSair.onclick = sair;
            area.appendChild(botaoSair);
 
        }
       

        
    }

    function sair()
    {
        alert("até mais nobre!");
        area.innerHTML = "Você saiu";
    }
    

    function mediaAluno(nota1, nota2)
    {
        var media = (nota1,nota2)/2;

        if(media >=6)
        {
            console.log("Que belezura, você foi aprovado" + media);
        }
        else if(media <6)
        {
            console.log("Que vergonha, você foi reprovado" + media);
        }
    }

    function aluno(nome,curso)
    {
        var mensagem = "Seja bem vindo " +nome+ "ao curso "+curso;
        console.log(mensagem);
    }
   
