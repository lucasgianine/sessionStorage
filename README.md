# Local & Session Storage
Aprendendo a utilizar os comandos localStorage e sessionStorage pela primeira vez, comandos esses que serão importante na verificação de login e logout que farei junto ao meu grupo de Pesquisa e Inovação (<a href="https://github.com/nextpointbr/HopTech">Hoptech</a>) e em meu <a href="https://github.com/lucasgianine/projetoIndividual">projeto individual</a> do primeiro semestre.

## localStorage
Armazenamento de dados no navegador.
#### • Recurso para salvar dados no navegador, que persiste após o recarregamento da página;
#### • Salva dados no computador do cliente/usuário;
#### • Não há tempo de expiração;
#### • Capacidade máxima de 10mb (megabyte);

## sessionStorage
Similar ao localStorage, porém, o armazenamento de dados em uma única sessão.
#### • Armazenamento temporário;
#### • Capacidade máxima de 5mb;
#### • Os dados armazenados dessa forma são limpos quando uma sessão termina, quando o browser ou a aba é fechado;
#### • Os dados são salvos no computador do usuário;

## Como utilizar:
Saiba as sintáxes utilizadas:
#### • setItem(par)
Método para armazenar um valor.
#### • getItem(par)
Para resgatar o valor armazenado anteriormente.
#### • removeItem(par)
Tem o objetivo de apagar da área de transferência o par armazenado nome/valor.
#### • clear()
Esse método não requer par (<b>parâmetros</b>) e destina-se a apagar todo o conteúdo da área de armazenamento.
#### • length()
Propriedade que mostra a quantidade de dados armazenados no objeto localStorage.
#### • key()
Mostra o nome da chave que foi armazenada na posição passada.

## Fonte de pesquisa
#### <a href="https://www.youtube.com/watch?v=FXlAf_iIDeo">Matheus Battisti - Hora de Codar</a>
#### <a href="https://www.kadunew.com/blog/html/html5-local-storage-armazenamento-de-dados-no-navegador">Kadunew</a>
#### <a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Window/sessionStorage">Mozilla</a>