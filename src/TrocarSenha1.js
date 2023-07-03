const URL = 'http://localhost:3000/usuarios';

function realizarVerificacao() {
    const email = document.getElementById('email_input').value;
    const telefone = document.getElementById('telefone_input').value;

    fetch(URL)
        .then(res => res.json())
        .then(usuarios => {
            const usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.telefone === telefone);

            if (usuarioEncontrado) {

                localStorage.setItem('idUsuarioLogado', usuarioEncontrado.id);
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


// Função para salvar as alterações do usuário logado
function salvarAlteracoes() {
    const usuarioEncontrado = localStorage.getItem('idUsuarioLogado'); // Obtém o ID do usuário logado do localStorage
}

