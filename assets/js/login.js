//=================================================================
//======================= FUNCOES DA TELA DE LOGIN================ 
//=================================================================
let btnEntrar = document.getElementById("btn-entrar");
let pessoa;

/*
 * Carrega todos os usuario para o programa visto que é unica forma segura, diantes dos metodos acessores
 * da api, de se identificar um usuario que poderá vir a logar no sistema.
 */

btnEntrar.addEventListener("click", function () {
    //================================================
    let pessoa = Object.create(Pessoa);
    pessoa.usuario = document.getElementById("nome").value;
    pessoa.senha = document.getElementById("senha").value;
    if (pessoa.usuario == "") {
        //usar erro criado pelo wedson
        alert("Preencha o campo do nome!");
        return;
    } else if (pessoa.senha == "") {
        alert("Preencha o campo de senha!");
        return;
    }
    let auxPessoa = usuarioExiste(pessoa);
    if (auxPessoa) {
        pessoa = Object.create(Pessoa);
        localStorage.setItem("italk-user", JSON.stringify(auxPessoa));

        location.href = "home.html"
    } else {
        msgUsuarioInvalido();
    }
});
function dividirCampos(pessoa, session) {
    pessoa.id = session[0]['id'];
    pessoa.nome = session[0]['nome'];
    pessoa.email = session[0]['email'];
    pessoa.senha = session[0]['senha'];
    pessoa.usuario = session[0]['usuario'];
    pessoa.dataNasc = session[0]['data_nasc'];
}

function usuarioExiste(usuario) {

    for (let i = 0; i < baseDadosUsuario.length; i++) {
        if (usuario.usuario == baseDadosUsuario[i].usuario && usuario.senha == baseDadosUsuario[i].senha)
            return baseDadosUsuario[i];
    }

    return false;
}
function msgUsuarioInvalido() {
    alert("Nome ou Senha estão incorretos!");
}