
// ================ tela de login ==================
var Pessoa = {
    session:"",
    id:"",
    usuario:"",
    nome:"",
    email:"",
    senha:"", 
    login:"",
    dataNasc:"",
};
let btnEntrar =  document.getElementById("btn-entrar");
//Aciona o evento da verificao de cadastro/login
let pessoa;
btnEntrar.addEventListener("click",function(){
    let loginUser =  document.getElementById("nome").value;
    let senhaUser =  document.getElementById("senha").value;    
    if(loginUser=="")
        return;
    let session= getUserByName(loginUser);
        console.log(session);
    if(validarSenha(senhaUser,session)){
        pessoa = Object.create(Pessoa);
        dividirCampos(pessoa,session);
        console.log(pessoa);
        $.ajax({
            method:'POST',
            url:'home.html',
            data:pessoa,
            success:function(){window.location.assign()},
            error:function(){alert("Erro ao tentar entrar no sistema")}
        });
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
     pessoa.session=1;
     pessoa.id       = session[0]['id'];
     pessoa.nome     = session[0]['nome'];
     pessoa.email    = session[0]['email'];
     pessoa.dataNasc = session[0]['data_nasc'];
     pessoa.usuario  = session[0]['usuario'];
     pessoa.senha    = session[0]['senha'];
}

