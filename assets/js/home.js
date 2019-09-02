let pessoa = Object.create(Pessoa);
let painelMensagens = document.getElementById("conteudo-conversa");
window.addEventListener('load', function () {
    pessoa = JSON.parse(this.localStorage.getItem('italk-user'));
    this.console.log(pessoa);
    carregaMensagens(12, 13);

});

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
            for (let j = i + 1; j > array_chat.length; j++) {
                if (array_chat[i].id < array_chat[j].id) {
                    aux = array_chat[i];
                    array_chat[i] = array_chat[j];
                    array_chat[j] = aux;

                }
            }
        }

        for (let elem in array_chat) {
            if (array_chat[elem].remetente_id == remetenteId) {
               MensagemEmisor(array_chat[elem].id,array_chat[elem].mensagem);
            } else {
               MensagemReceptor(array_chat[elem].id,array_chat[elem].mensagem);
            }
        }
        //array_chat =mensagensReceptor.slice();

        console.log("CHAT MENSAGENS")
        console.log(array_chat)
        return true;
    }

}

function converteMensangens() {


}

function limpaPainelMensagem() {
    console.log(painelMensagens);
    while (painelMensagens.firstChild != null) {
        console.log(painelMensagens.lastChild)
        painelMensagens.removeChild(painelMensagens.firstChild)
    }
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

function MensagemEmisor(mensagemid, texto)
{

    texto=texto.substr(1,(texto.length-2));

    
    let ListaMensagem = document.getElementById("conteudo-conversa");
    let div = CriarTagdivEmissor(mensagemid);
    ListaMensagem.insertAdjacentElement("beforeEnd", div);

    let ListaAux = document.getElementById(mensagemid);
    let span = CriartagSpanEmissor(texto);
    ListaAux.insertAdjacentElement("beforeEnd", span);
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
