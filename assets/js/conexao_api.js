alert("ok")
var Pessoa =  {
    nome:"",
    email:"",
    senha:"", 
    login:"",
    dataNasc:""

};

var baseUrlChat = "http://chatjs.gitedu.com.br/";

getUser(201700087086);

function getUser(codigo){

    $.ajax(
        {
            url:"http://chatjs.gitedu.com.br/",
            type:"POST",
            data: "usuario/get-all-users?".codigo,
            success:function(msg){
                alert("Data : "+msg);
            }

        }
        

    );

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