let usuario;
//========  verificações ao carregar a pagina ============= 
window.addEventListener("load", function () {
    $("html").css("display","none");
    let btnSair =  document.getElementById("btn-sair");
    usuario = localStorage.getItem("italk-user");
    if (usuario == null) {
        window.location.href = "index.html";
        return;
    }else{
        $("html").css("display","block");
    }
    btnSair.addEventListener("click", function () {
        localStorage.removeItem("italk-user");
    })
});
//==========  finalizar a session 