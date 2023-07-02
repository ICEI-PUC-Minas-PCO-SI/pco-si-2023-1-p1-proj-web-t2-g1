const URL = 'http://localhost:3000/usuarios';

<<<<<<< HEAD
function AUTENTICACAO() {
  const email = document.getElementById('email_input').value;
  const telefone = document.getElementById('telefone_input').value;

// FUNÇÃO PARA VERIFICAÇÃO DO EMAIL 
fetch(URL)
=======
function realizarVerificacao() {
    const email = document.getElementById('email_input').value;
    const telefone = document.getElementById('telefone_input').value;

    fetch(URL)
>>>>>>> fb7e3fe05219e53e1e3c3904b1f0ceed49cad444
        .then(res => res.json())
        .then(usuarios => {
            const usuarioEncontrado = usuarios.find(usuario => usuario.email === email);

            if (usuarioEncontrado) {
                
                // Usuário válido, redirecionar para a página de sucesso ou executar alguma ação desejada
                window.location.href = 'TrocarSenha2.html';
            } else {
                // Usuário inválido, exibir mensagem de erro ou executar alguma ação desejada
                alert('Email ou telefone inválidos. Tente novamente');
            }
        })
        .catch(error => {
            // Ocorreu um erro ao carregar os usuários do JSON
            console.error('Erro ao carregar usuários:', error);
        });
}
<<<<<<< HEAD
}

//FUNÇÃO PARA VERIFICAÇÃO DO TELEFONE
fetch(URL)
        .then(res => res.json())
        .then(usuarios => {
            const usuarioEncontrado = usuarios.find(usuario => usuario.telefone === telefone);

            if (telefoneEncontrado) {

            } else {
                alert('Telefone inválido. Tente novamente.');
            }
        })
=======






>>>>>>> fb7e3fe05219e53e1e3c3904b1f0ceed49cad444
