


 


# Registro de Testes de Software

Os relatos de teste foram criados atraves do teste do site, ja concluido

## Avaliação

Login: O Login está fazendo uma busca no JSON e verificando se o e-mail e senha coincidem com o que está salvo no JSON, se não há e-mail no BD ou a senha não coincide com aquela que esta linkada, exibe uma mensagem “Email ou senha errado”, após entrar deixa o ID da pessoa salvo no localstorage que será usado em outros momentos. 

Cadastrar Usuário: Faz a verificação se o e-mail possui a extensão @sga.pucminas.br ou @pucmias.br, se não possuir não é permitido a criação da conta, após permitido usuário coloca a sua senha e é salvo no JSON, onde pega o ID automaticamente 

Editar Perfil e veículo: Nessa parte é permitido a edição do perfil, do usuário onde todos os dados pegos são do tipo string, são salvas no dbJson onde para identificar o usuário é pego o ID do localstorage e edita, se por acaso o usuário entrar direto na página sem estar logado e tentar salvar, ou editar o mesmo dará mensagem de que não tem usuário logado, clicando no botão editar veículo, faz o mesmo processo.  

Criar Corrida: Pega os dados do CEP através do código digitado pelo usuário, e faz a validação se o CEP é real ou não, se não é criado um alert box, e quando digitado corretamente, é auto complementado, com o ID do usuário no localstorage é pego as informações do mesmo, para saber quem é o criador e responsável, quando criada a corrida aparece um alert box com o ID da mesma. 

Avaliar Corrida: Clicando em histórico tem a opção avaliar a corrida, onde com o ID da corrida, você o coloca, e pode selecionar a sua nota, o salvando diretamente no DB. 

Excluir conta: O usuário através de opçoes pode excluir sua conta se desejar. Ao clicar em uma das opçoes aparece a mensagem você a seleciona e quando clicar em excluir em conta, ela é excluída do JSON Server e não tendo como há recuperar. 

Recuperação de senha: o usuario deve informar o email e telefone cadastros, onde é realizada as buscas, se corretas ambas redireciona para uma pagina de troca de senha. 

Corridas Disponíveis: Aplicação está conseguindo buscar os dados cadastrados no db.json e exibir na página Corridas-Disponiveis.html, onde possui os botoes, "detalhes" que vem todas as informacoes daquela corrida e tem o "Tenho Interesse" onde clicando aparece um meio de enviar um numero de whatsapp para aquela pessoa criadora da corrida. 

Histórico de corridas: Sistema consegue buscar o histórico de corridas com base no id do usuário logado e gravado no localStorage, o modal de detalhes da corrida exibe os dados dinamicamente ainda.  

O resultado esta satisfatorio para o momento, suas funcoes estao funcional e uteis

> 