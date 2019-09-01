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

window.addEventListener("load", function () {
    baseDadosUsuario = getAllUser(matricula_base);
});
