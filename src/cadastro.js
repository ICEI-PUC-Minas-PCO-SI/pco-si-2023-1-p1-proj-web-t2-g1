// Declara uma função para processar o formulário de login
function processaFormLogin (event) {                
    // Cancela a submissão do formulário para tratar sem fazer refresh da tela
    event.preventDefault ();

    // Obtem os dados de login e senha a partir do formulário de login
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Valida login e se estiver ok, redireciona para tela inicial da aplicação
    resultadoLogin = loginUser (username, password);
    if (resultadoLogin) {
        window.location.href = 'cadastro.html';
    }
    else { // Se login falhou, avisa ao usuário
        alert ('Usuário ou senha incorretos');
    }
}
function Cadastro(event) {
    event.preventDefault();

    // Obtenha os dados do formulário
    let nome = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;
    let senha2 = document.getElementById('password2').value;

    if (senha !== senha2) {
        alert('As senhas informadas não conferem.');
        return;
    }
    if (email !== '@sga.pucminas.br') {
        alert('O email não está autorizado.');
        return;
    }
    

    // Crie um objeto com os dados do usuário
    let usuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    // Converta o objeto em uma string JSON
    let usuarioJSON = JSON.stringify(usuario);

    console.log(usuarioJSON); // Exibe o JSON no console do navegador

    // Salve a string JSON em um arquivo separado
    salvarJSON(usuarioJSON);

    alert('Usuário salvo com sucesso. Proceda com o login para continuar.');
}


// Associa a funçao processaFormLogin  formulário adicionado um manipulador do evento submit
document.getElementById ('cadastrar').addEventListener ('click', Cadastro);


// Associar salvamento ao botao
//document.getElementById ('btn_salvar').addEventListener ('click', salvaLogin); 

// Converta o objeto JSON para uma string
   // var dadosCadastroString = JSON.stringify(dadosCadastro);

    /*// Envio via AJAX usando a biblioteca axios:
    axios.post('/salvar-cadastro', dadosCadastroString)
        .then(function(response) {
            console.log(response.data); // Resposta do servidor
            // Realize ações adicionais após o cadastro ser salvo
        })
        .catch(function(error) {
            console.error(error); // Tratamento de erro
        });


   // Verifica se o usuário já esta logado e se negativo, redireciona para tela de login        
   if (!usuarioCorrente.login) {
    window.location.href = LOGIN_URL;
}*/

function exibeUsuarios() {
    
    // Popula a tabela com os registros do banco de dados
    let listaUsuarios = '';
    for (i = 0; i < db.usuarios.length; i++) {
        let usuario = db.usuarios[i];
        listaUsuarios += `<tr><td scope="row">${usuario.username}</td><td>${usuario.email}</td><td>${usuario.senha}</td></tr>`;
    }

    // Substitui as linhas do corpo da tabela
    document.getElementById("table-usuarios").innerHTML = listaUsuarios

}

/*function initPage() {

    // Associa a função de logout ao botão
        document.getElementById('btn_logout').addEventListener('click', logoutUser);

    // Informa o nome do usuário logado
    document.getElementById('nomeUsuario').innerHTML = usuarioCorrente.nome;

    // Lista os usuários 
    exibeUsuarios ();
}

// Associa ao evento de carga da página a função para verificar se o usuário está logado
window.addEventListener('load', initPage);*/