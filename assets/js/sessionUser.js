let pessoa = new Pessoa();
//========  verificações ao carregar a pagina ============= 
window.addEventListener("load",function(){
    pessoa.nome  = localStorage.getItem("italk-user");
    if(pessoa.nome == null){
        //window.location.href = "index.html";
    }
})

//==========  finalizar a session 
let btnSair = document.getElementById("btn-sair");
console.log(btnSair)
btnSair.addEventListener("click",function(){
    localStorage.removeItem("italk-user");
})
