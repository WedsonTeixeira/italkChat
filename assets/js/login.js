
// ================ tela de login ==================
let loginUser =  document.getElementById("login");
let senhaUser =  document.getElementById("senha");
let btnEntrar =  document.getElementById("btn-entrar");
//Aciona o evento da verificao de cadastro/login
btnEntrar.addEventListener("click",function(event){
    
    /*
    * Pegar o usuario pelo nome 
    *
    */
    window.location.assign("home.html")
    console.log(dadosLogin);
});