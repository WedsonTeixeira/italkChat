
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
        method: 'GET',
        url: "http://chatjs.gitedu.com.br/usuario/get-all-users?",
        data: { 
            codigo: c 
        },
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
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
function getUserByName(nome) {
    let dados;
    $.ajax({
        method: 'GET',
        url: "http://chatjs.gitedu.com.br/usuario/get-user-by-name?",
        data: {
            codigo: matricula_base,
            nome: nome
        },
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
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