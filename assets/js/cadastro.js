//=================================================================
//======================= FUNCOES DA TELA CADASTRO ================ 
//=================================================================


let btncadastro = document.getElementById("btn-cadastrar");


btncadastro.addEventListener("click", function () {
    let submit = true;
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let senha = document.getElementById("senha");
    let senha2 = document.getElementById("confirmasenha");
    let usuario = document.getElementById("usuario");
    let data = document.getElementById("data-nasc");

    let deletedivCampos = document.getElementById("errorCampos");
    if (deletedivCampos) {
        deletedivCampos.parentNode.removeChild(deletedivCampos);
    }
    let deletedivusuario = document.getElementById("errorUsuario");
    if (deletedivusuario) {
        usuario.setAttribute("style", "border-color:none");
        deletedivusuario.parentNode.removeChild(deletedivusuario);
    }
    let deletedivSenha = document.getElementById("errorSenha");
    if (deletedivSenha) {
        senha.setAttribute("style", "border-color:none");
        senha2.setAttribute("style", "border-color:none");
        deletedivSenha.parentNode.removeChild(deletedivSenha);
    }
    let deletedivSenemail = document.getElementById("erroremail");
    if (deletedivSenemail) {
        email.setAttribute("style", "border-color:none");
        deletedivSenemail.parentNode.removeChild(deletedivSenemail);
    }

    let pessoa1 = Object.create(Pessoa);
    pessoa1.nome = nome.value;
    pessoa1.email = email.value;
    pessoa1.senha = senha.value;
    pessoa1.usuario = usuario.value;
    pessoa1.data = data.value;

    let auxpessoaUser = usuarioExiste(pessoa1);
    let auxpessoaemail = EmailExiste(pessoa1);
    if (nome.value == "" || email.value == "" || senha.value == "" || senha2.value == "" || usuario.nome == "" || data.value == "") {
        let aviso = document.getElementById("avisos");
        let divErro = createAvisos("Preencha Todos Os Campos", "errorCampos");
        aviso.insertAdjacentElement("beforeEnd", divErro);
        submit = false;
    }

    if (auxpessoaemail) {
        let aviso = document.getElementById("avisos");
        if (!document.getElementById("erroremail")) {
            email.setAttribute("style", "border-color:red");
            let divErro = createAvisos("Email Já Existe", "erroremail");
            aviso.insertAdjacentElement("beforeEnd", divErro);
        }
        submit = false;
    }


    if (senha.value != senha2.value) {
        let aviso = document.getElementById("avisos");
        if (!document.getElementById("errorSenha")) {
            senha.setAttribute("style", "border-color:red");
            senha2.setAttribute("style", "border-color:red");
            let divErro = createAvisos("As Senhas Não Coincidem", "errorSenha");
            aviso.insertAdjacentElement("beforeEnd", divErro);
        }
        submit = false;
    }

    if (auxpessoaUser) {
        let aviso = document.getElementById("avisos");
        if (!document.getElementById("errorUsuario")) {
            usuario.setAttribute("style", "border-color:red");
            let divErro = createAvisos("Usuario ja Existe", "errorUsuario");
            aviso.insertAdjacentElement("beforeEnd", divErro);
        }
        submit = false;
    }


    if (submit) {
        let corigirdata = data.value;
        while (corigirdata.indexOf("-") >= 0) {
            corigirdata = corigirdata.replace("-", "/");
        }
        split = corigirdata.split('/');
        corigirdata = split[2] + "/" + split[1] + "/" + split[0];
        console.log(corigirdata);

        let verificar = addUser(nome.value, corigirdata, email.value, usuario.value, senha.value);
        if (verificar[0] == "Adicionado!") {
            
            let aviso = document.getElementById("avisos");
            let divErro = createAvisosSuce("Usuario Cadastrado Com Sucesso", "userAdd");
            aviso.insertAdjacentElement("beforeEnd", divErro);
            submit = false;
        }
        let deletedivSucess = document.getElementById("userAdd");
        if(deletedivSucess)
        {
            setTimeout(function(){ 
                document.getElementsByName("CadastroUsuario")[0].submit();
                deletedivSucess.parentNode.removeChild(deletedivSucess); 
                location.href="index.html"
            }, 4000);
           
        
        }    
    }
});

function createAvisos(texto, id) {
    var div = document.createElement('div');
    div.textContent = texto;
    div.setAttribute('class', 'avisos-error');
    div.setAttribute("style", "display: block");
    div.setAttribute("id", id);
    return div;
}
function createAvisosSuce(texto, id) {
    var div = document.createElement('div');
    div.textContent = texto;
    div.setAttribute('class', 'avisos-Sucess');
    div.setAttribute("style", "display: block");
    div.setAttribute("id", id);
    return div;
}

function usuarioExiste(usuario) {

    for (let i = 0; i < baseDadosUsuario.length; i++) {
        if (usuario.usuario == baseDadosUsuario[i].usuario)
            return baseDadosUsuario[i];
    }

    return false;
}
function EmailExiste(usuario) {

    for (let i = 0; i < baseDadosUsuario.length; i++) {
        if (usuario.email.toUpperCase() == baseDadosUsuario[i].email.toUpperCase())
            return baseDadosUsuario[i];
    }

    return false;
}
function verificarDigitação(usuario) {


}