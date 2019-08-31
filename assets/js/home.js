function Pessoa() {
    id = "";
    nome = "";
    email = "";
    senha = "";
    login = "";
    dataNasc = "";
};
let pessoa = new Pessoa();
pessoa.nome  = localStorage.getItem("italk-nome");

if(pessoa.nome == null)
{
    window.location.href = "index.html";
}

function Deslogar()
{
    localStorage.removeItem("italk-nome");
}