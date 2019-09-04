function getUser(id_user, dados) {
    $.ajax({
        url: "http://chatjs.gitedu.com.br/usuario/get-all-users?callback=",
        method: "GET",
        dataType: "jsonp",
        data: {
            codigo: matricula_base,
            id: id_user
        },
        success: function (response, textStatus, jqXHR) {
            dados(response);
        },
        error: function (response, textStatus, jqXHR) {
            console.log(jqXHR);
        }
    });
}
function getUserByName(nome, dados) {
    $.ajax({
        url: "http://chatjs.gitedu.com.br/usuario/get-user-by-name?callback=",
        method: "GET",
        dataType: "jsonp",
        data: {
            codigo: matricula_base,
            nome: nome
        },
        success: function (response, textStatus, jqXHR) {
            dados(response);
        },
        error: function (response, textStatus, jqXHR) {
            console.log(jqXHR);
        }
    });
}
function getAllUser(dados){
    $.ajax({
        url: "http://chatjs.gitedu.com.br/usuario/get-all-users?callback=",
        method: "GET",
        dataType: "jsonp",
        data: {
            codigo: matricula_base
        },
        success: function (response, textStatus, jqXHR) {
            dados(response);
        },
        error: function (response, textStatus, jqXHR) {
        }

    });
}

function addUser(nome, data_nasc, email, usuario, senha, dados) {
    $.ajax({
        url: "http://chatjs.gitedu.com.br/usuario/add-user?callback=",
        method: "GET",
        dataType: "jsonp",

        data: {
            codigo: matricula_base,
            nome: nome,
            data_nasc: data_nasc,
            email: email,
            usuario: usuario,
            senha: senha,
        },
        success: function (response, textStatus, jqXHR) {
            dados(response);
        },
        error: function (response, textStatus, jqXHR) {
            console.log(jqXHR);
        }
    });
}
function getAllFriends(usuario_id, dados) {
    $.ajax({
        url: "http://chatjs.gitedu.com.br/usuario-amigo/get-all-friends?callback=",
        data: {
            codigo: matricula_base,
            usuario_id: usuario_id,
        },
        method: "GET",
        dataType: "jsonp",
        success: function (response, textStatus, jqXHR) {
            dados(response);
        },
        error: function (response, textStatus, jqXHR) {
            console.log(jqXHR);
        }
    });
}
function addMsg(remetenteId, receptorId, mensagem, data,dados) {
    $.ajax({
        url: "http://chatjs.gitedu.com.br/mensagem/add-msg?callback=",
        method: "GET",
        dataType: "jsonp",
        data: {
            codigo: matricula_base,
            remetente_id: remetenteId,
            receptor_id: receptorId,
            mensagem: mensagem,
            data: data,
        },
        success: function (response, textStatus, jqXHR) {
            dados(response);
        },
        error: function (response, textStatus, jqXHR) {
            console.log(jqXHR);
        }
    });
}

function getMsgs(remetenteId, receptorId, dados) {
    $.ajax({
        url: "http://chatjs.gitedu.com.br/mensagem/get-msgs?callback=",
        method: "GET",
        dataType: "jsonp",
        data: {
            codigo: matricula_base,
            remetente_id: remetenteId,
            receptor_id: receptorId
        },
        success: function (response, textStatus, jqXHR) {
            dados(response);
        },
        error: function (response, textStatus, jqXHR) {
            console.log(jqXHR);
        }
    });
}

function getMsgsFromRemetenteId(remetenteId, dados) {
    $.ajax({
        url: "http://chatjs.gitedu.com.br/mensagem/get-msgs-from-remetente-id?callback=",
        method: "GET",
        dataType: "jsonp",
        data: {
            codigo: matricula_base,
            remetente_id: remetenteId,
        },
        success: function (response, textStatus, jqXHR) {
            dados(response);
        },
        error: function (response, textStatus, jqXHR) {
            console.log(jqXHR);
        }
    });
}



function addFriend(usuarioId, amigoId,dados) {
    $.ajax({
        url: "http://chatjs.gitedu.com.br/usuario-amigo/add-friend?callback=",
        method: "GET",
        dataType: "jsonp",
        data: {
            codigo: matricula_base,
            usuario_id: usuarioId,
            amigo_id: amigoId,
 
        },
        success: function (response, textStatus, jqXHR) {
            dados(response);
        },
        error: function (response, textStatus, jqXHR) {
            console.log(jqXHR);
        }
    });
}
// ======================== FIM DA CONEXAO-API ============= 


