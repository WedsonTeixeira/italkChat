
//========  verificações ao carregar a pagina ============= 
window.addEventListener("load", function () {
    let usuario;
    let btnSair =  document.getElementById("btn-sair");
    usuario = localStorage.getItem("italk-user");
    if (usuario == null) 
        window.location.href = "index.html";

    btnSair.addEventListener("click", function () {
        localStorage.removeItem("italk-user");
        window.location.href = "index.html";
    });
});
//==========  finalizar a session 