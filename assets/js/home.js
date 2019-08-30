var Pessoa =  {
    nome:"",
    email:"",
    senha:"", 
    login:"",
    dataNasc:""

};

let nomeUser =  "luiz carlos";
let tagNomeUser = document.getElementById("nome-usuario");
tagNomeUser.innerHTML=nomeUser;
window.addEventListener("load",function(){
    $.ajax({
        method:'GET',
        url:'home.html',
        dataType:'json',
        success : function(resp) {
            console.log("Sucesso: ");
            dados=resp;
        },  
        error: function (resp) {
            console .log("Erro :");
            dados=resp;
        }     
    });
    
})

//===========================