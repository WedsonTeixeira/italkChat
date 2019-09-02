let pessoa = Object.create(Pessoa);
let painelMensagens = document.getElementById("conteudo-conversa");
window.addEventListener('load', function () {
    pessoa = JSON.parse(this.localStorage.getItem('italk-user'));
    let ArrayAmigos = getAllFriends(pessoa.id);
    CriarAmigos(ArrayAmigos);
});


function buscarMensagens(obj){
    let id = quebrarId(obj);
    limpaPainelMensagem();
    carregaMensagens(pessoa.id,id);
} 

function quebrarId(obj){
    let id;
    for(let i in obj.id){
        if(obj.id[i]=='-'){
            id=obj.id.substr(++i,(obj.id.length-2));
        }
    }
    return id;
} 

function CriarAmigos(usuario) {
    for (let i = 0; i < usuario.length; i++) {
        
        let Lista = document.getElementById("ListaAmigos");
        let li = CriarTagLiAmigos(usuario[i].nome,usuario[i].nome+'-'+usuario[i].id);
        Lista.insertAdjacentElement("beforeEnd", li);
        let ListaAux = document.getElementById(usuario[i].nome+'-'+usuario[i].id);
        let a = CriarTagaAmigos(usuario[i].nome);
        ListaAux.insertAdjacentElement("beforeEnd",a);
    }
    return false;
}
function CriarTagLiAmigos(nome,id) {
    var li = document.createElement('li');
    li.setAttribute('class', ' item-contato');
    li.setAttribute("id", id);
    li.setAttribute("onclick","buscarMensagens(this)");
    return li;
}
function CriarTagaAmigos(texto) {
    var a = document.createElement('a');
    a.setAttribute('class', ' list-group-item list-group-item');
    a.textContent =  texto;
    return a;
}

function carregaMensagens(remetenteId, receptorId) {
    let mensagensEmissor = getMsgs(remetenteId, receptorId);
    let mensagensReceptor = getMsgs(receptorId, remetenteId);
    let divMensagens;
    if (mensagensEmissor[0] == 0 && mensagensReceptor[0] == 0) {
        //não há mensagens
        divMensagens = createDiv("Não há mensagens a serem exibidas", "alert alert-danger centro");
        limpaPainelMensagem();
        painelMensagens.insertAdjacentElement("afterbegin", divMensagens);
        return false;
    } else {

        let array_chat = new Array(),
            aux = new Array();
        let span;
        array_chat = array_chat.concat(mensagensEmissor, mensagensReceptor);
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
               MensagemReceptor(array_chat[elem].id,array_chat[elem].mensagem);
            } else {
               MensagemEmisor(array_chat[elem].id,array_chat[elem].mensagem);
            }
        }
        //array_chat =mensagensReceptor.slice();
        return true;
    }

}


function limpaPainelMensagem() {
    while (painelMensagens.firstChild != null) {
        painelMensagens.removeChild(painelMensagens.firstChild)
    }
}

function MensagemEmisor(mensagemid, texto)
{

    texto=texto.substr(1,(texto.length-1));

    
    let ListaMensagem = document.getElementById("conteudo-conversa");
    let div = CriarTagdivEmissor(mensagemid);
    ListaMensagem.insertAdjacentElement("beforeEnd", div);

    let ListaAux = document.getElementById(mensagemid);
    let span = CriartagSpanEmissor(texto);
    ListaAux.insertAdjacentElement("beforeEnd", span);
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
function CriarTagdivEmissor(id) {
    var div = document.createElement('div');
    div.setAttribute('class', 'mensagem-emissor');
    div.setAttribute("id", id);
    return div;

}
function CriartagSpanEmissor(texto) {
    var span = document.createElement('span');
    span.setAttribute('class', 'mensagem-esq');
    span.textContent =  texto;
    return span;
}

function MensagemReceptor(mensagemid, texto)
{
    texto=texto.substr(1,(texto.length-1));

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
function CriartagSpanReceptor(texto) {
    var span = document.createElement('span');
    span.setAttribute('class', 'mensagem-dir');
    span.textContent =  texto;
    return span;
}








