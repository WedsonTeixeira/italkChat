# italk-chat-js
Chat que estabelece comunicação entre usuário em tempo real
Para utilizar o sistema, deve-se:
  1 - Cadastrar no sistema
  2 - Adionar como contato um amigo (Também cadastrado na base)
  3 - Enviar conversa.
 
 
Ao digitar no campo input de mensagem e presisonar a tecla "enter" será enviada o conteúdo da
mensagem e caso nao tenha selecionado um contanto para iniciar um conversa, a area de envio mensagem será
desativada.

A página faz diversas atualizações para que o usuario nao perca dados ao logo da conversa, portanto, quando
temos alguma conexão com o servidor a página é impedida de ser usada enquanto não recebe uma resposta. A 
depender da internet isso pode levar menos de 1s, contudo caso contrário, ficará lá até que receba um resposta.
Se por ventura não haver internet a conclusão da operação será ocorrida com falhas, portanto não cabendo realizar
com sucesso alguma ação.
