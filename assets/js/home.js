let pessoa = Object.create(Pessoa);
let contato = Object.create(Pessoa);
contato.id = null;
let amigo = null;
let todosUsuarios = new Array();
let ArrayAmigos;
let tamanhomensagem = 0;

function carregaMensagensSemExibir(remetenteId, receptorId) {
    let mensagensEmissor;
    let mensagensReceptor;

    getMsgs(remetenteId, receptorId, function (dados1) {
        mensagensEmissor = dados1;
        getMsgs(receptorId, remetenteId, function (dados2) {
            mensagensReceptor = dados2;
            let array_chat = new Array();
            array_chat = array_chat.concat(mensagensEmissor, mensagensReceptor);
            return array_chat;
        });
    });
}

let painelMensagens = document.getElementById("conteudo-conversa");
window.addEventListener('load', function () {
    pessoa = JSON.parse(this.localStorage.getItem('italk-user'));
    carregar();
    getAllFriends(pessoa.id, function (dados) {
        if(dados[1] == "Não encontrado")
        {
            ArrayAmigos = new Array();
        }
        else
        {
            ArrayAmigos = dados;
        }
        destroiCarregar();
        let had = document.getElementById("ListaAmigos");
        had.style.visibility = "visible";
        CriarAmigos(ArrayAmigos, "ListaAmigos", "");
    });
});

function EnviarMensagem() {
    let mensagem = document.getElementById("inputMensagem").value;
    if (mensagem != "" && amigo != null) {
        document.getElementById("inputMensagem").value = "";
        let data = "02/09/2019";
        let X;
        carregar();
        addMsg(pessoa.id, amigo, mensagem, data, function (dados) {
            X = dados;
            limpaPainelMensagem();
            carregaMensagens(pessoa.id, amigo);
            destroiCarregar();
        });
    }
}

function buscarMensagens(obj) {
    let id = quebrarId(obj);
    limpaPainelMensagem();
    amigo = id;
    carregaMensagens(pessoa.id, id);
}

function quebrarId(obj) {
    let id;
    for (let i in obj.id) {
        if (obj.id[i] == '-') {
            id = obj.id.substr(++i, (obj.id.length - 2));
        }
    }
    return id;
}

function CriarAmigos(usuario, id, funcao) {
    for (let i = 0; i < usuario.length; i++) {
        let Lista = document.getElementById(id);
        let li = CriarTagLiAmigos(usuario[i].nome, usuario[i].nome + '-' + usuario[i].id);
        if (funcao != "")
            li.setAttribute("onclick", funcao)
        Lista.insertAdjacentElement("beforeEnd", li);
        let ListaAux = document.getElementById(usuario[i].nome + '-' + usuario[i].id);
        let a = CriarTagaAmigos(usuario[i].nome);

        ListaAux.insertAdjacentElement("beforeEnd", a);
    }
    return false;
}
function CriarTagLiAmigos(nome, id) {
    var li = document.createElement('li');
    li.setAttribute('class', ' item-contato');
    li.setAttribute("id", id);
    li.setAttribute("onclick", "buscarMensagens(this)");
    return li;
}

function CriarTagaAmigos(texto) {
    var a = document.createElement('a');
    a.setAttribute('class', ' list-group-item list-group-item');
    a.textContent = texto;
    return a;
}

function carregaMensagens(remetenteId, receptorId) {
    let mensagensEmissor;
    let mensagensReceptor;
    carregar();
    getMsgs(remetenteId, receptorId, function (dados) {
        mensagensEmissor = dados;
        getMsgs(receptorId, remetenteId, function (dados) {
            mensagensReceptor = dados;
            let divMensagens;
            if (mensagensEmissor[0] == 0 && mensagensReceptor[0] == 0) {
                //não há mensagens
                divMensagens = createDiv("Não há mensagens a serem exibidas", "alert alert-danger centro");
                limpaPainelMensagem();
                painelMensagens.insertAdjacentElement("afterbegin", divMensagens);
                return false;
            } else {

                let array_chat = new Array();
                aux = new Array();

                if (mensagensEmissor[1] == "Não existem mensagens" || mensagensReceptor[1] == "Não existem mensagens") {
                    if (mensagensEmissor[1] == "Não existem mensagens") {
                        array_chat = array_chat.concat(mensagensReceptor);
                    }
                    if (mensagensReceptor[1] == "Não existem mensagens") {
                        array_chat = array_chat.concat(mensagensEmissor);
                    }
                } else {
                    array_chat = array_chat.concat(mensagensEmissor, mensagensReceptor);
                }
                tamanhomensagem = array_chat.length;
                for (let i = 0; i < array_chat.length; i++) {
                    for (let j = i + 1; j < array_chat.length; j++) {
                        if (array_chat[i].id > array_chat[j].id) {
                            aux = array_chat[i];
                            array_chat[i] = array_chat[j];
                            array_chat[j] = aux;

                        }
                    }
                }
                for (let elem in array_chat) {
                    if (array_chat[elem].remetente_id == remetenteId) {
                        MensagemReceptor(array_chat[elem].id, array_chat[elem].mensagem);
                    } else {
                        MensagemEmisor(array_chat[elem].id, array_chat[elem].mensagem);
                    }
                }
                destroiCarregar();
            }
        });
    });
}



function limpaPainelMensagem() {
    while (painelMensagens.firstChild != null) {
        painelMensagens.removeChild(painelMensagens.firstChild)
    }
}

function limpaPainelContatos(id) {
    let painelContatos = document.getElementById(id);
    while (painelContatos.firstChild != null) {
        painelContatos.removeChild(painelContatos.firstChild)
    }
}

function MensagemEmisor(mensagemid, texto) {

    let ListaMensagem = document.getElementById("conteudo-conversa");
    let div = CriarTagdivEmissor(mensagemid);
    ListaMensagem.insertAdjacentElement("beforeEnd", div);

    let ListaAux = document.getElementById(mensagemid);
    let span = CriartagSpanEmissor(texto);
    ListaAux.insertAdjacentElement("beforeEnd", span);
}
function MensagemReceptor(mensagemid, texto) {

    let ListaMensagem = document.getElementById("conteudo-conversa");
    let div = CriarTagdivReceptor(mensagemid);
    ListaMensagem.insertAdjacentElement("beforeEnd", div);

    let ListaAux = document.getElementById(mensagemid);
    let span = CriartagSpanReceptor(texto);
    ListaAux.insertAdjacentElement("beforeEnd", span);
}
function CriarTagdivReceptor(id) {
    var div = document.createElement('div');
    div.setAttribute('class', 'mensagem-receptor');
    div.setAttribute("id", id);
    return div;
}
function CriarTagdivEmissor(id) {
    var div = document.createElement('div');
    div.setAttribute('class', 'mensagem-emissor');
    div.setAttribute("id", id);
    return div;

}

function CriartagSpanReceptor(texto) {
    var span = document.createElement('span');
    span.setAttribute('class', 'mensagem-dir');
    span.textContent = texto;
    return span;
}

function CriartagSpanEmissor(texto) {
    var span = document.createElement('span');
    span.setAttribute('class', 'mensagem-esq');
    span.textContent = texto;
    return span;
}

function createDiv(texto, classe) {
    let div;
    div = document.createElement('div');
    if (texto != "")
        div.textContent = texto;
    if (classe != "")
        div.setAttribute('class', classe);
    return div;
}

function createSpan(texto, classe) {
    let div;
    div = document.createElement('div');
    if (texto != "")
        div.textContent = texto;
    if (classe != "")
        div.setAttribute('class', classe);
    return div;
}

//===============  ADICIONAR NOVO CONTATO =====================
let painelAddContato = document.getElementById("painel-adicionar");
painelAddContato.addEventListener("click", function () {
    let painelTodosContatos = document.getElementById("ListaNovosContatos");
    if (painelTodosContatos.style.visibility == "visible")
        return;
    document.getElementById("ListaAmigos").style = "visibility:hidden";
    painelTodosContatos.style = "visibility:visible";

    getAllUser(function (dados) {
        let todosUsuarios = dados;
        let auxAmigos = new Array();
        auxAmigos = ArrayAmigos.slice();
        auxAmigos.push(pessoa)
        verificarNaoAmigos(todosUsuarios, auxAmigos);
        limpaPainelContatos("ListaAmigos");
        CriarAmigos(todosUsuarios, "ListaNovosContatos", "addNovoContato(this)")
    });
});

function verificarNaoAmigos(todosUsuarios, amigos) {
    for (let meuAmigo of amigos) {
        for (let i in todosUsuarios) {
            if (todosUsuarios[i].id == meuAmigo.id) {
                todosUsuarios.splice(i, 1);
            }
        }
    }
}

let painelListaAmigos = document.getElementById("painel-meus-contatos");
painelListaAmigos.addEventListener("click", function () {
    let listaAmigos = document.getElementById("ListaAmigos");
    if (listaAmigos.style.visibility == "visible")
        return;
    document.getElementById("ListaNovosContatos").style = "visibility:hidden";
    listaAmigos.style = "visibility:visible";
    limpaPainelContatos("ListaNovosContatos");
    CriarAmigos(ArrayAmigos, "ListaAmigos", "");

});

function addNovoContato(obj) {
    confirm("Deseja Adicionar " + obj.firstChild.textContent + " a sua lista de contatos?");
}