setInterval(function(){
    if(amigo != null)
    {
        let X;
        carregaMensagensSemExibir(pessoa.id,amigo, function(dados)
        {
            if(dados > tamanhomensagem)
            {
                console.log("Mensagem");
                limpaPainelMensagem();
                carregaMensagens(pessoa.id,amigo);
            }
            else
            {
                console.log("Sem Mensagem");
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
            dados(array_chat.length);  
        });
    });
}