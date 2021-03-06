let pessoa = Object.create(Pessoa);
let contato = Object.create(Pessoa);
contato.id = null;
let amigo = null;
let todosUsuarios = new Array();
let ArrayAmigos;
let tamanhomensagem = 0;

let boasVindasUsuario = document.getElementById("nome-usuario");
let inputMsg = document.getElementById("inputMensagem");
let painelMensagens = document.getElementById("conteudo-conversa");
let painelListaAmigos = document.getElementById("painel-meus-contatos");
let painelAddContato = document.getElementById("painel-adicionar");


painelListaAmigos.classList.toggle("bg-rocho");
function carregaMensagensSemExibir(remetenteId, receptorId, dados) {
    let mensagensEmissor;
    let mensagensReceptor;
    getMsgs(remetenteId, receptorId, function (dados1) {
        mensagensEmissor = dados1;
        getMsgs(receptorId, remetenteId, function (dados2) {
            mensagensReceptor = dados2;
            let array_chat = [];
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
            for (let i = 0; i < array_chat.length; i++) {
                for (let j = i + 1; j < array_chat.length; j++) {
                    if (array_chat[i].id > array_chat[j].id) {
                        aux = array_chat[i];
                        array_chat[i] = array_chat[j];
                        array_chat[j] = aux;

                    }
                }
            }
            dados(array_chat);
        });
    });

}

inputMsg.addEventListener("keypress", function (evt) {
    if (evt.keyCode == 13)
        EnviarMensagem();
})
function EnviarMensagem() {
    let mensagem = document.getElementById("inputMensagem").value;
    if (mensagem != "" && amigo != null) {
        document.getElementById("inputMensagem").value = "";
        var excluir = document.getElementById('Naoamensagens');
        if (excluir) {
            excluir.parentNode.removeChild(excluir);
        }
        let data = new Date();
        let dia     = data.getDate();
        var mes     = data.getMonth();
        let ano4    = data.getFullYear();
        let str_data = dia + '/' + (mes+1) + '/' + ano4;

        let inputMsg = document.getElementById("inputMensagem");
        inputMsg.setAttribute("readonly", "disabled");
        addMsg(pessoa.id, amigo, mensagem,  str_data, function (dados) {
            let inputMsg = document.getElementById("inputMensagem");
            inputMsg.removeAttribute("readonly")
            carregaMensagensSemExibir(pessoa.id, amigo, function (dados) {
                MensagemReceptor(dados[dados.length - 1].id, dados[dados.length - 1].mensagem)
                ajustarAlturaChat();
            });
        });
    }
}

window.addEventListener('load', function () {
    painelListaAmigos.classList.add("bg-rocho");
    let inputMsg = document.getElementById("inputMensagem");
    inputMsg.setAttribute("readonly", "disabled");
    inputMsg.nextElementSibling.setAttribute("id", "none")

    pessoa = JSON.parse(this.localStorage.getItem('italk-user'));
    boasVindasUsuario.textContent += pessoa.nome;
    carregar();
    getAllFriends(pessoa.id, function (dados) {
        if (dados[1] == "Não encontrado") {
            ArrayAmigos = new Array();
        }
        else {
            ArrayAmigos = dados;
        }
        destroiCarregar();
        let had = document.getElementById("ListaAmigos");
        had.style.visibility = "visible";
        for (let i = 0; i < ArrayAmigos.length; i++) {
            for (let j = i + 1; j < ArrayAmigos.length; j++) {
                if (ArrayAmigos[i].nome > ArrayAmigos[j].nome) {
                    let aux = ArrayAmigos[i];
                    ArrayAmigos[i] = ArrayAmigos[j];
                    ArrayAmigos[j] = aux;
                }
            }
        }

        CriarAmigos(ArrayAmigos, "ListaAmigos", "");
    });
    ajustarAlturaChat()

});


function buscarMensagens(obj) {
    let tituloChat = document.getElementById("titulo-chat");
    let id = quebrarId(obj);
    limpaPainelMensagem();
    amigo = id;
    tituloChat.textContent = "Conversa: "+buscarUsuario(id).nome;
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

function buscarUsuario(id){
    for (let elem of ArrayAmigos){
        if(elem.id == id)
            return elem;
    }
    return false;

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
    let inputMsg = document.getElementById("inputMensagem");
    inputMsg.removeAttribute("readonly")
    inputMsg.nextElementSibling.setAttribute("id", "span-btn-enviar")

    let mensagensEmissor;
    let mensagensReceptor;
    carregar();
    getMsgs(remetenteId, receptorId, function (dados1) {
        mensagensEmissor = dados1;
        getMsgs(receptorId, remetenteId, function (dados2) {
            mensagensReceptor = dados2;
            let divMensagens;
            if (mensagensEmissor[0] == 0 && mensagensReceptor[0] == 0) {
                //não há mensagens
                divMensagens = createDiv("Não há mensagens a serem exibidas", "alert alert-danger centro", "Naoamensagens");
                limpaPainelMensagem();
                painelMensagens.insertAdjacentElement("afterbegin", divMensagens);
                destroiCarregar()
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
                ajustarAlturaChat()
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

function createDiv(texto, classe, id) {
    let div;
    div = document.createElement('div');
    div.textContent = texto;
    div.setAttribute('class', classe);
    if (id != "")
        div.setAttribute('id', id);
    return div;
}


//===============  ADICIONAR NOVO CONTATO =====================

painelAddContato.addEventListener("click", function () {
    let painelTodosContatos = document.getElementById("ListaNovosContatos");
    if (painelTodosContatos.style.visibility == "visible")
        return;
        
    let novoContato = document.getElementById("ListaAmigos");
    novoContato.style = "visibility:hidden";
    painelListaAmigos.classList.remove("bg-rocho");
    painelAddContato.classList.add("bg-rocho");
    painelTodosContatos.style = "visibility:visible";
    getAllUser(function (dados) {
        let todosUsuarios = dados;
        let auxAmigos = new Array();
        auxAmigos = ArrayAmigos.slice();
        auxAmigos.push(pessoa)
        verificarNaoAmigos(todosUsuarios, auxAmigos);
        for (let i = 0; i < todosUsuarios.length; i++) {
            for (let j = i + 1; j < todosUsuarios.length; j++) {
                if (todosUsuarios[i].nome > todosUsuarios[j].nome) {
                    let aux = todosUsuarios[i];
                    todosUsuarios[i] = todosUsuarios[j];
                    todosUsuarios[j] = aux;
                }
            }
        }
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


painelListaAmigos.addEventListener("click", function () {
    let listaAmigos = document.getElementById("ListaAmigos");
    if (listaAmigos.style.visibility == "visible")
        return;
    painelListaAmigos.classList.add("bg-rocho");
    painelAddContato.classList.remove("bg-rocho");
    document.getElementById("ListaNovosContatos").style = "visibility:hidden";
    listaAmigos.style = "visibility:visible";
    limpaPainelContatos("ListaNovosContatos");
    CriarAmigos(ArrayAmigos, "ListaAmigos", "");
    ajustarAlturaChat()
});

function addNovoContato(obj) {
    painelNovoContato(obj.firstChild.textContent);
    addAmigo(function (resp) {
        if (resp) {
            let idNovoContato = quebrarId(obj);
            carregar();
            addFriend(pessoa.id, idNovoContato, function (dados) {
                addFriend(idNovoContato, pessoa.id, function (dados) {
                    destroiCarregar();
                    window.location.href = "home.html";
                });
            });
        } else {
            destroiCarregar();
        }

    });

}

function ajustarAlturaChat() {
    var alturaChat = document.getElementById("conteudo-conversa");
    alturaChat.scrollTop = parseInt(alturaChat.scrollHeight) - 50;
}

function addAmigo(resp) {
    let btnOk = document.getElementById("btnAddAmizade");
    let btnCancelar = document.getElementById("btnCancelarAmizade");
    btnOk.addEventListener("click", function () {
        resp(true)
    });
    btnCancelar.addEventListener("click", function () {
        resp(false)
    });
}