
//=================================================================
//======================= FUNCOES DA CONEXAO COM API ============= 
//=================================================================

//const matricula_base  = 201700008538;
const matricula_base = 201700087086;
function Pessoa() {
    id = "";
    nome = "";
    email = "";
    senha = "";
    login = "";
    dataNasc = "";
};
function getUser(c) {
    let dados;
    $.ajax({
        url: "http://chatjs.gitedu.com.br/usuario/get-all-users?",
        dataType : 'json',
        data :{codigo:c},
        success: function (resp) {
            dados = resp;
            console.log(resp)
        },
        error: function (resp) {
            console.log("Erro:");
            console.log(resp)
            dados = resp;
        }
    });
    return dados;
}
function getUserByName(nome) {
    let dados;
    $.ajax({
        method: 'GET',
        url: "http://chatjs.gitedu.com.br/usuario/get-user-by-name?",
        data: {
            codigo: matricula_base,
            //nome: nome
        },
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        crossDomain: true,
        success: function (resp) {
            dados = resp;
        },
        error: function (resp) {
            console.log("Erro :");
            dados = resp;
        }
    });
    return dados;
}
function getAllUser(codigo, nome) {


}
function addUser(codigo, nome, data_nasc, email, usuario, senha) {

}

function getAllFriends(codigo, usuario_id) {


}

function addFriend(codigo, usuario_id, amigo_id) {

}


function addMsg(codigo, remetente_id, receptor_id, mensagem, data) {


}

function getMsgs(codigo, remetente_id, receptor_id) {

}

function getMsgsFromRemetenteId(codigo, remetente_id) {


}

function getMsgsFromReceptorId(codigo, receptor_id) {

}

// ======================== FIM DA CONEXAO-API ============= 


//=================================================================
//======================= FUNCOES DA TELA DE LOGIN================ 
//=================================================================
let btnEntrar =  document.getElementById("btn-entrar");
let pessoa;

getUser('201700087086');

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
        localStorage.setItem("italk-user", pessoa.nome);
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







//=================================================================
//======================= FUNCOES DA TELA HOME ==================== 
//=================================================================




//=================================================================
//======================= FUNCOES DA TELA CADASTRO ================ 
//=================================================================