function Pessoa() {
    id = "";
    nome = "";
    email = "";
    senha = "";
    usuario = "";
    dataNasc = "";
};

let btnEntrar =  document.getElementById("btn-entrar");
let pessoa;
btnEntrar.addEventListener("click",function(){
    let loginUser =  document.getElementById("nome").value;
    let senhaUser =  document.getElementById("senha").value;    
    if(loginUser == "" || senhaUser == "")
    {
        return;
    }
    let session= getUserByName(loginUser);

    if(validarSenha(senhaUser,session)){
        pessoa = new Pessoa();
        dividirCampos(pessoa,session);
        localStorage.setItem("italk-nome", pessoa.nome);
        window.location.href = "home.html";   
    }
    else{
        //alterar por uma div no index
        alert("Nome ou Senha estão incorretos!");
    }

});

function validarSenha(senha, session){
    if(session[0]['senha']==senha)
        return true;
    else
        return false;

}

function dividirCampos(pessoa,session){
     pessoa.id       = session[0]['id'];
     pessoa.nome     = session[0]['nome'];
     pessoa.email    = session[0]['email'];
     pessoa.senha    = session[0]['senha'];
     pessoa.usuario  = session[0]['usuario'];
     pessoa.dataNasc = session[0]['data_nasc'];
}
