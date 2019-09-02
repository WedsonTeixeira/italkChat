var baseDadosUsuario;
const matricula_base  = 201700008538;
//const matricula_base = 201700087086;

var Pessoa =    {
    id : "",
    nome :"",
    email : "",
    login : "",
    senha : "",
    dataNasc : ""
};
var Mensagem={
    id:"",
    remetente_id:"",
    receptor_id:"",
    mensagem:"",
    data:"",
}
window.addEventListener("load", function () {
    baseDadosUsuario = getAllUser(matricula_base);
});
