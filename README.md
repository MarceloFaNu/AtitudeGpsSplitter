# AtitudeGpsSplitter

Esta é uma aplicação escrita em Blazor Webassembly cuja finalidade principal é permitir a análise detalhada dos logs gerados pelo aplicativo [AtitudeGpsMaui](https://github.com/MarceloFaNu/AtitudeGpsMaui).

Com os logs devidamente inseridos nos campos e em seguida carregados via clique de botão, é possível selecionar os resumos de leituras do monitoramento realizado pelo aplicativo de celular, o que dará acesso a várias opções incluindo renderizar marcadores no mapa exibido na tela.

Esta aplicação utiliza o serviço Google Maps JavaScript API. Para funcionar, é necessário que o desenvolvedor configure a aplicação com suas próprias chaves de desenvolvimento que podem ser objtidas junto ao serviço de nuvem da Google.

Além de ter que obter uma chave de desenvolvimento e criar um projeto devidamente configurado na nuvem da Google, esta aplicação utiliza as chaves criptografadas e não as chaves originais. Você deverá encriptar sua chave utilizando o projeto [Crypton](https://github.com/MarceloFaNu/Crypton). Configure o projeto Crypton com as chaves de criptografia (não confunda com a chave de desenvolvimento da Google) que você escolher, execute a aplicação e criptografe sua chave de desenvolvimento e seu ID de mapa gerados na nuvem da Google.

Os valores criptografados que você obteve executando a aplicação Crypton deverão ser inseridos no arquivo [appsettings.json](AtitudeGpsSplitterApp/wwwroot/appsettings.json) deste projeto.

Por fim, você deverá compilar o projeto [CryptonPlugin](CryptonPlugin), com as configurações utilizadas para criptografar a chave de desenvolvimento e o ID de mapa, para um arquivo *dll*, e substituir o que está neste projeto [neste diretório](plugins/Crypton).

Eu sei que isso tudo dá uma trabalheira e tanto, mas ninguém vai querer correr o risco de ter sua chave de desenvolvimento do Maps da Google perambulando pelada por aí :relaxed:
