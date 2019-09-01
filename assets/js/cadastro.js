//=================================================================
//======================= FUNCOES DA TELA CADASTRO ================ 
//=================================================================


let btncadastro = document.getElementById("btn-cadastrar");


btncadastro.addEventListener("click",function(){
    let submit = true;

    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let senha = document.getElementById("senha");
    let senha2 = document.getElementById("confirmasenha");
    let usuario = document.getElementById("usuario");
    let data = document.getElementById("data-nasc");

    if(senha.value != senha2.value)
    {
        let aviso =  document.getElementById("avisos");
        if(!document.getElementById("errorsenha"))
        {
            senha.setAttribute("style","border-color:red");
            senha2.setAttribute("style","border-color:red");
            let divErro = createAvisos("Não pode conter senhas iguais!");
            aviso.setAttribute("style","display: block");
            aviso.setAttribute("id","errorsenha");
            aviso.insertAdjacentElement("beforeEnd", divErro);
        }
        submit = false;
    }

    if(submit)
    {
        document.getElementsByName("CadastroUsuario")[0].submit();
    }
});

function createAvisos(texto) {
    var div = document.createElement('div');
    div.textContent = texto;
    div.setAttribute('class','avisos-error');
    return div;
}