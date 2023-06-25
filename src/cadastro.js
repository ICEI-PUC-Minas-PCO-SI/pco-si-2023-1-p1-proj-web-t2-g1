


/*
// Declara uma função para processar o formulário de login
function processaFormLogin (event) {                
    // Cancela a submissão do formulário para tratar sem fazer refresh da tela
    event.preventDefault ();

    // Obtem os dados de login e senha a partir do formulário de login
    var username = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Valida login e se estiver ok, redireciona para tela inicial da aplicação
    resultadoLogin = loginUser (username, password);
    if (resultadoLogin) {
        window.location.href = 'template.html';
    }
    else { // Se login falhou, avisa ao usuário
        alert ('Usuário ou senha incorretos');
    }
}
*/

/*function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}*/
function addUser (nome, senha, email) {
    
    // Cria um objeto de usuario para o novo usuario 
    
    let usuario = {  "nome": nome, "senha": senha, "email": email };
    
    // Inclui o novo usuario no banco de dados baseado em JSON
    db_usuarios.usuarios.push (usuario);

    // Salva o novo banco de dados com o novo usuário no localStorage
    localStorages.setItem('db_usuarios', JSON.stringify (db_usuarios));
}


function cadastro (event) {
// Cancela a submissão do formulário para tratar sem fazer refresh da tela
event.preventDefault ();

// Obtem os dados do formulário
let nome   = document.getElementById('username').value;
let email  = document.getElementById('email').value;
let senha  = document.getElementById('password').value;
let senha2 = document.getElementById('password2').value;
if (senha != senha2) {
    alert ('As senhas informadas não conferem.');
    return
}

// Adiciona o usuário no banco de dados
addUser (nome, senha, email);
console.log(db_usuarios);
alert ('Usuário salvo com sucesso. Proceda com o login para ');

// Oculta a div modal do login
//document.getElementById ('loginModal').style.display = 'none';
//$('#loginModal').modal('hide');
}

// Associa a funçao processaFormLogin  formulário adicionado um manipulador do evento submit
document.getElementById ('cadastrar').addEventListener ('click', cadastro);


// Associar salvamento ao botao
//document.getElementById ('btn_salvar').addEventListener ('click', salvaLogin); 

// Converta o objeto JSON para uma string
  /* var dadosCadastroString = JSON.stringify(dadosCadastro);

    // Envio via AJAX usando a biblioteca axios:
    axios.post('/salvar-cadastro', dadosCadastroString)
        .then(function(response) {
            console.log(response.data); // Resposta do servidor
            // Realize ações adicionais após o cadastro ser salvo
        })
        .catch(function(error) {
            console.error(error); // Tratamento de erro
        });
*/
/*
   // Verifica se o usuário já esta logado e se negativo, redireciona para tela de login        
   if (!usuarioCorrente.login) {
    window.location.href = LOGIN_URL;
}
*/

function exibeUsuarios() {
    
    // Popula a tabela com os registros do banco de dados
    let listaUsuarios = '';
    for (i = 0; i < db_usuarios.usuarios.length; i++) {
        let usuario = db_usuarios.usuarios[i];
        listaUsuarios += `<tr><td scope="row">${usuario.username}</td><td>${usuario.email}</td><td>${usuario.senha}</td></tr>`;
    }

    // Substitui as linhas do corpo da tabela
    document.getElementById("table-usuarios").innerHTML = listaUsuarios

}
/*
function initPage() {

    // Associa a função de logout ao botão
    document.getElementById('btn_logout').addEventListener('click', logoutUser);

    // Informa o nome do usuário logado
    document.getElementById('nomeUsuario').innerHTML = usuarioCorrente.nome;

    // Lista os usuários 
    exibeUsuarios ();
}
*/
// Associa ao evento de carga da página a função para verificar se o usuário está logado
//window.addEventListener('load', initPage);