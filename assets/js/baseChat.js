var baseDadosUsuario;
const matricula_base = 201700008538;
//const matricula_base = 201700087086;

var Pessoa = {
  id: "",
  nome: "",
  email: "",
  login: "",
  senha: "",
  dataNasc: ""
};
var Mensagem = {
  id: "",
  remetente_id: "",
  receptor_id: "",
  mensagem: "",
  data: "",
}

window.addEventListener("load", function () {
  carregar();
  getAllUser(function (dados) {
    baseDadosUsuario = dados;
    destroiCarregar();
  });
});

function carregar() {

  let divCarregar = document.createElement("div");
  let iconCarregar = document.createElement("div");
  divCarregar.setAttribute("id", "carregar");
  divCarregar.insertAdjacentElement("afterbegin", iconCarregar);
  iconCarregar.setAttribute("class", "icon-load")
  divCarregar.setAttribute("class", "espera-usuario container-fluid");
  let fundo = document.getElementById("corpo");
  fundo.insertAdjacentElement("afterbegin", divCarregar);

}
function destroiCarregar() {
  let carregar = document.getElementById("carregar");
  carregar.parentNode.removeChild(carregar);
}