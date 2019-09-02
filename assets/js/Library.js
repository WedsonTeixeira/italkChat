//=================================================================
//======================= FUNCOES DA CONEXAO COM API ============= 
//=================================================================
function getUser(id_user) {
    let dados;
    $.ajax({
        url: "http://chatjs.gitedu.com.br/usuario/get-all-users?",
        dataType : 'json',
        data :{codigo:matricula_base,
                id:id_user},
        success: function (resp) {
            dados = resp;
        },
        error: function (resp) {
            console.log("Erro:");
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
        crossDomain: true,
        async:false,
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
function getAllUser(codigo) {
    let dados;
    $.ajax({
        method: 'GET',
        url: "http://chatjs.gitedu.com.br/usuario/get-all-users",
        data: {
            codigo: matricula_base,
        },
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        crossDomain: true,
        async:false,
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
function addUser(nome, data_nasc, email, usuario, senha) {
    let dados;
    $.ajax({
        method: 'GET',
        url: "http://chatjs.gitedu.com.br/usuario/add-user?",
        data: {
            codigo: matricula_base,
            nome: nome,
            data_nasc: data_nasc,
            email: email,
            usuario: usuario,
            senha: senha,
        },
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        crossDomain: true,
        async:false,
        success: function (data) {
           dados = data;
        },
        error: function (resp) {
            dados = data;
        }
    });
    return dados;
}

function getAllFriends(usuario_id) {
    let dados;
    $.ajax({
        method: 'GET',
        url: "http://chatjs.gitedu.com.br/usuario-amigo/get-all-friends?",
        data: {
            codigo: matricula_base,
            usuario_id: usuario_id,
        },
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        crossDomain: true,
        async:false,
        success: function (data) {
           dados = data;
        },
        error: function (resp) {
            dados = data;
        }
    });
    return dados;

}

function addFriend(codigo, usuario_id, amigo_id) {

}


function addMsg(remetenteId, receptorId, mensagem, data) {
    $.ajax({
        method: 'GET',
        url: "http://chatjs.gitedu.com.br/mensagem//add-msg",
        data: {
            codigo: matricula_base,
            remetente_id: remetenteId,
            receptor_id: receptorId,
      

        },
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        crossDomain: true,

        success: function (data) {
           console.log("enviado")
        },
        error: function (resp) {
            console.log("nao enviado")
           
        }
    });

}

function getMsgs(remetenteId, receptorId) {
    let dados;
    $.ajax({
        method: 'GET',
        url: "http://chatjs.gitedu.com.br/mensagem/get-msgs",
        data: {
            codigo: matricula_base,
            remetente_id: remetenteId,
            receptor_id: receptorId
        },
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        crossDomain: true,
       async:false,
        success: function (data) {
           dados = data;
        },
        error: function (resp) {
            dados = data;
        }
    });
    return dados;

}

function getMsgsFromRemetenteId(codigo, remetenteId) {
    let dados;
    $.ajax({
        method: 'GET',
        url: "http://chatjs.gitedu.com.br/mensagem/get-msgs-from-remetente-id",
        data: {
            codigo: matricula_base,
            remetente_id: remetenteId,
        },
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        crossDomain: true,
       async:false,
        success: function (data) {
           dados = data;
        },
        error: function (resp) {
            dados = data;
        }
    });
    return dados;

}

function getMsgsFromReceptorId(codigo, receptor_id) {

}

// ======================== FIM DA CONEXAO-API ============= 


