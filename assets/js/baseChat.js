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
function painelNovoContato(novoContato){
  let divCarregar = document.createElement("div");
  let divNovoContato = document.createElement("div");
  let span = document.createElement("span");
  let span2 = document.createElement("span");
  let btnOk = document.createElement("button");
  let btnCancelar = document.createElement("button");
  let divBotoes =  document.createElement("div");

  btnOk.setAttribute("id","btnAddAmizade");
  btnCancelar.setAttribute("id","btnCancelarAmizade");

  btnOk.setAttribute("class","btn btn-success");
  btnOk.setAttribute("style","margin-right:2%")
  btnOk.textContent="Adicionar"
  btnCancelar.setAttribute("class","btn btn-danger");
  btnCancelar.textContent="Cancelar"
  divBotoes.setAttribute("style","margin-top:12%")
  divBotoes.setAttribute("class","centro")
  divBotoes.insertAdjacentElement("afterbegin",btnCancelar)
  divBotoes.insertAdjacentElement("afterbegin",btnOk)
  
  divNovoContato.insertAdjacentElement("afterbegin",divBotoes);


  span.setAttribute("style","font-weight:400");
  span2.setAttribute("style","font-weight:400");
  divNovoContato.setAttribute("id", "painel-add-contato");
  span2.textContent =" Como novo Amigo? ";
  divNovoContato.insertAdjacentElement("afterbegin",span2);
  divNovoContato.insertAdjacentHTML("afterbegin","<span>"+novoContato+"</span>")
  span.textContent ="Deseja Adicionar ";
  divNovoContato.insertAdjacentElement("afterbegin",span);
  divCarregar.insertAdjacentElement("afterbegin", divNovoContato);

 
  
  divCarregar.setAttribute("id", "carregar");
  divCarregar.setAttribute("class", "espera-usuario container-fluid");


  let fundo = document.getElementById("corpo");
  fundo.insertAdjacentElement("afterbegin", divCarregar);
}

function destroiCarregar() {
  let carregar = document.getElementById("carregar");
  carregar.parentNode.removeChild(carregar);
}
