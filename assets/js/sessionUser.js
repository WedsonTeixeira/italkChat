//========  verificações ao carregar a pagina ============= 

let usuario;
usuario = localStorage.getItem("italk-user");

if (usuario == null) {
    window.location.href = "index.html";
}

function Sair() {
    localStorage.removeItem("italk-user");
    window.location.href = "index.html";
}

//==========  finalizar a session 