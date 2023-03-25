# Especificações do Projeto

O projeto PUCarona surgiu através da identificação de um problema comum na rotina dos universitários da PUC Minas de Contagem, que é a dificuldade de acesso ao campus, isto acontece por diversos motivos, entre eles, o fato da unidade estar localizada em uma área industrial e ter poucas opções de transporte público. Considerando isso, nasceu a ideia desta aplicação que tem como objetivo tornar mais acessível o ingresso e regresso de alunos e funcionários da universidade. O objetivo fundamental deste projeto é conectar pessoas que façam o mesmo trajeto de ida e volta, seja por meio de carona ofertada por um usuário do PUCarona que possui veículo próprio ou divisão dos custos em uma corrida por meio de aplicativos de viagem. 

Neste documento foram construídas as personas do projeto, com o objetivo de explicitar e tornar claro as principais características dos futuros usuários. Com o objetivo de deixar mais preciso, foi feita também a construção das histórias de usuários a partir do entendimento das necessidades e motivações deles. Relativo à construção da aplicação, neste documento é apresentado também os requisitos funcionais e não funcionais do sistema, estes requisitos foram definidos a partir de deduções feitas sobre quais seriam as necessidades dos usuários ao utilizar o PUCarona. Por fim, o grupo definiu as restrições relativas ao projeto, sendo elas fundamentais para a visualização do que será entregue como resultado final do trabalho. 


## Personas
**Persona 1:**
Rodrigo Benitez tem 17 anos, acabou de ingressar no curso de Administração na PUC Minas Contagem, por ser do turno da noite, enfrenta dificuldades para se locomover ao campus, visto que reside no centro de Belo Horizonte necessita pegar ônibus, perdendo aproximadamente 1h30 do seu dia indo para a faculdade, e no trajeto de volta ficando dependente de vans e motoristas particulares, com custos elevados. Rodrigo está buscando um app que possibilite a conexão com outros alunos e funcionários que residem em regiões próximas e possuam carro ou estejam dispostos a dividir o valor da corrida por app de motorista particular. 

**Persona 2:** Bianca Nazário tem 42 anos e é professora de Filosofia da Puc Minas Contagem. Ela mora em um apartamento sozinha no bairro Nova Suíssa em Belo Horizonte e se desloca para o Campus quatro vezes por semana em seu Renault Kwid sem nenhuma companhia no carro. Bianca muito consciente dos desafios que os estudantes enfrentam como as limitações de horários de transporte público e valores elevados de vans escolares gostaria de encontrar algum lugar que ela pudesse se conectar com os alunos da PUC Minas e ofertar caronas para aqueles que moram próximo a sua região ou que façam um trajeto parecido com o dela. 

**Persona 3:** Charles Oliveira é um aluno do 4º período do curso de Ciências da Computação na Puc Minas do Coração Eucarístico, atualmente Alex está matriculado no turno da manhã. Com o mercado de tecnologia aquecido, ele tem tentado se candidatar para vagas de estágio na área, porém tem recebido diversas respostas negativas por estudar no turno da manhã. Alex deseja se transferir para o curso de Sistemas de Informação na Puc Minas de Contagem no turno da noite, porém para concluir esta mudança, ele gostaria de se conectar com pessoas que morassem na mesma região que ele e estivessem dispostas a dividir os custos de uma corrida de Uber/99pop ou que ofertassem caronas para sua região.


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                                       |
|--------------------|----------------------------------------------------|--------------------------------------------------------------|
|Usuário do sistema  |Realizar cadastro                                   |Acessar aplicação, realizar reserva de carona                 |
|Usuário do sistema  |Acessar avaliação do usuário                        |Verificar confiabilidade e localização                        |
|Administrador       |Acesso ao sistema                                   |Relatório de pessoas cadastradas, acessar histórico de viagens|
|Usuário do sistema  |Acessar em tempo real disponibilidade de usuários   |Reserva de Carona                                             |
|Administrador       |Pagamento pela a aplicação                          |O sistema deve facilitar o pagamento através de redirecionamento para as plataformas, Integração com sistema do Banco para envio de informações de transferência internacional de valores|
|Administrador       |Localização via CEP                                 |O sistema deve facilitar localizar os usuários através do CEP inserido no cadastramento.|
|Administrador       |Avaliação de Corrida                                |O sistema deve proporcionar um método de avaliação para quem oferece/ recebe carona |
|Administrador       |Recuperação de Senha                                |O sistema deve fornecer um método de recuperação de senha através do número de celular ou email cadastrado para os usuários|
|Usuário do sistema  |Recuperação de Senha                                |Fornecer os dados requeridos pelo sistema                     |
|Administrador       |Suporte a dispositivos iOS e Android                |O sistema deve fornecer integração e suporte para dispositivos IOS  e ANDROID   |
|Administrador       |Manter os dados salvos e protegidos                 |O sistema deve fornecer privacidade e acesso ao histórico de corridas nos dispositivos |
|Administrador       |Velocidade de Processamento Rápida                  |O sistemas deve processar requisições do usuário em no máximo 5s  |
|Administrador       |Responsividade                                      | Uso de Design responsivo e interativo nas interfaces gráficas  |


Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-000| Cadastramento de usuario | ALTA |  |
|RF-000| Cadastramento de Perfil   | ALTA | |
|RF-000| LOGIN | ALTA |  |
|RF-000| Recuperação de Senha   | ALTA | |
|RF-000| Agendar uma carona | ALTA |  |
|RF-000| Efetuar a reserva da carona   | ALTA | |
|RF-000| Avaliação de Corrida | MÉDIA |  |
|RF-000| Histórico de corridas   | BAIXA | |
|RF-000| Localização via CEP | BAIXA |  |
|RF-000| Pagamento pela a aplicação   | BAIXA | |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-000| Autenticação de email | ALTA | 
|RNF-000| Responsividade |  MÉDIA  | 
|RNF-000| Velocidade de Processamento Rápida | BAIXA  | 
|RNF-000| Manter os dados salvos e protegidos |  MÉDIA  | 
|RNF-000| Suporte a dispositivos iOS e Android |  ALTA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
