# Especificações do Projeto

Neste documento foram construídas as personas do projeto, com o objetivo de explicitar e tornar claro as principais características dos futuros usuários. Com o objetivo de deixar mais preciso, foi feita também a construção das histórias de usuários a partir do entendimento das necessidades e motivações deles. Relativo à construção da aplicação, neste documento é apresentado também os requisitos funcionais e não funcionais do sistema, estes requisitos foram definidos a partir de deduções feitas sobre quais seriam as necessidades dos usuários ao utilizar o PUCarona. Por fim, o grupo definiu as restrições relativas ao projeto, sendo elas fundamentais para a visualização do que será entregue como resultado final do trabalho. 

É importante destacar que a aplicação será desenvolvida apenas com tecnologias de front-end, sendo elas HTML, CSS, JavaScript e micro frameworks como Bootstrap e jQuery. Neste caso, para a persistência dos dados, não será utilizado nenhum banco de dados e todo o processo de CRUD será feito por meio de APIs como JSON Server e localStorage. 


## Personas
**Persona 1:**
Rodrigo Benitez tem 17 anos, acabou de ingressar no curso de Administração na PUC Minas Contagem, por ser do turno da noite, enfrenta dificuldades para se locomover ao campus, visto que reside no centro de Belo Horizonte necessita pegar ônibus, perdendo aproximadamente 1h30 do seu dia indo para a faculdade, e no trajeto de volta ficando dependente de vans e motoristas particulares, com custos elevados. Rodrigo está buscando um app que possibilite a conexão com outros alunos e funcionários que residem em regiões próximas e possuam carro ou estejam dispostos a dividir o valor da corrida por app de motorista particular. 

**Persona 2:** Bianca Nazário tem 42 anos e é professora de Filosofia da Puc Minas Contagem. Ela mora em um apartamento sozinha no bairro Nova Suíssa em Belo Horizonte e se desloca para o Campus quatro vezes por semana em seu Renault Kwid sem nenhuma companhia no carro. Bianca muito consciente dos desafios que os estudantes enfrentam como as limitações de horários de transporte público e valores elevados de vans escolares gostaria de encontrar algum lugar que ela pudesse se conectar com os alunos da PUC Minas e ofertar caronas para aqueles que moram próximo a sua região ou que façam um trajeto parecido com o dela. 

**Persona 3:** Charles Oliveira é um aluno do 4º período do curso de Ciências da Computação na Puc Minas do Coração Eucarístico, atualmente ele está matriculado no turno da manhã. Com o mercado de tecnologia aquecido, ele tem tentado se candidatar para vagas de estágio na área, porém tem recebido diversas respostas negativas por estudar no turno da manhã. Charles deseja se transferir para o curso de Sistemas de Informação na Puc Minas de Contagem no turno da noite, porém para concluir esta mudança, ele gostaria de se conectar com pessoas que morassem na mesma região que ele e estivessem dispostas a dividir os custos de uma corrida de Uber/99pop ou que ofertassem caronas para sua região.

**Persona 4:** Matheus Meireles tem 22 anos, e está estudando no 7º período de Direito e enfrenta dificuldade de estar se locomovendo até o campus, pois ele ia de carona com a sua vizinha que também estudava na mesma universidade e auxiliava ela com o valor do combustível, mas ela se formou e agora ele está à procura de novas pessoas para estar compartilhando com ele um meio de locomoção para a universidade.


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

![Diagrama](https://user-images.githubusercontent.com/124528221/229374062-a73151ff-9c1a-4877-8e2a-6bc4bc60c5b6.png)


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| A aplicação deve realizar o cadastramento de novos usuario | ALTA | Barbara |
|RF-002| A aplicação deve possuir um metodo de cadastrar um perfil do usuario   | ALTA | Matheus |
|RF-003| A aplicação deve permitir efetuar o LOGIN | ALTA | Barbara |
|RF-004| A aplicação deve possibilitar a recuperação de Senha   | ALTA | Ana |
|RF-005| A aplicação deve agendar uma carona | ALTA | Arthur |
|RF-006| A aplicação deve efetuar a reserva da carona   | ALTA | Natalia |
|RF-007| A aplicação deve permitir a avaliação de Corrida | MÉDIA | Natalia |
|RF-008| A aplicação deve possibilitar visualizar o histórico de corridas   | BAIXA | Vinicius |
|RF-009| A aplicação deve possibilitar acessar a localização via CEP | BAIXA | Derick |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve realizar a autenticação de email | ALTA | 
|RNF-002| A aplicação deve ter responsividade |  MÉDIA  | 
|RNF-003| A aplicação deve ter uma velocidade de Processamento Rápida | BAIXA  | 
|RNF-004| A aplicação deve manter os dados salvos e protegidos |  MÉDIA  | 
|RNF-005| A aplicação deve possuir suporte a dispositivos iOS e Android |  ALTA | 



## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
