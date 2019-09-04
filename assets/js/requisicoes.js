setInterval(function () {
    if (amigo != null) {
        carregaMensagensSemExibir(pessoa.id, amigo, function (dados) {
            if (dados.length > tamanhomensagem && dados[dados.length - 1].remetente_id == amigo) {
                limpaPainelMensagem();
                carregaMensagens(pessoa.id, amigo);
                ajustarAlturaChat();
            }

        });
    }
}, 1000);

function carregaMensagensSemExibir(remetenteId, receptorId, dados) {
    let mensagensEmissor;
    let mensagensReceptor;
    getMsgs(remetenteId, receptorId, function (dados1) {
        mensagensEmissor = dados1;
        getMsgs(receptorId, remetenteId, function (dados2) {
            mensagensReceptor = dados2;
            let array_chat = [];
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
            dados(array_chat);
        });
    });

}