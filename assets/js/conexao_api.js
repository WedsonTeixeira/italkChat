
var Pessoa =  {
    nome:"",
    email:"",
    senha:"", 
    login:"",
    dataNasc:""

};

getUser(201700087086);

function getUser(c){
    
    $.ajax({
        
        method: 'GET',
        url: "http://chatjs.gitedu.com.br/usuario/get-all-users",
        data: {codigo:c},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        crossDomain: true,

        success : function(resp) {
            console.log("Sucesso: ");
            console.log(resp);
        },
        error: function (resp) {
            console.log("Erro :");
            console.log(resp);
        }          
    });

}
function getUserByName(codigo, id){


}
function getAllUser(codigo, nome){

    
}
function addUser(codigo, nome,data_nasc, email,usuario, senha){

}

function getAllFriends(codigo,usuario_id){


}

function addFriend(codigo,usuario_id,amigo_id){

}


function addMsg(codigo,remetente_id,receptor_id,mensagem, data){


}

function getMsgs(codigo,remetente_id,receptor_id){

}

function getMsgsFromRemetenteId(codigo,remetente_id){


}

function getMsgsFromReceptorId(codigo,receptor_id){
    
}