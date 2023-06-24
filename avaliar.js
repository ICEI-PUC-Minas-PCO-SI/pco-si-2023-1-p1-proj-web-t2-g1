URL = 'http://localhost:3000/comments';

function buscarNomeUsuario(usuarios, userId) {
    const usuario = usuarios.find(user => user.id === userId);
    return usuario ? usuario.username : '';
}

// média
function handleFormSubmit(event) {
    event.preventDefault();

    const selectNota = document.getElementById('selectNota');
    const nota = selectNota.value;

    const selectUsuario = document.getElementById('selectUsuario');
    const userId = selectUsuario.value;

    // Dados api
    fetch('db_usuarios.json')
        .then(response => response.json())
        .then(data => {
            // Buscar o nome de usuário na resposta da API
            const nomeUsuario = buscarNomeUsuario(data.usuarios, userId);

            // Verificar se o usuário já possui uma avaliação
            const usuarioAvaliacao = data.avaliacao.find(avaliacao => avaliacao.usuario === nomeUsuario);

            if (usuarioAvaliacao) {
                // Atualizar a média do usuário existente
                usuarioAvaliacao.media = calcularMedia(nota, usuarioAvaliacao.media);
            } else {
                // Criar uma nova avaliação para o usuário
                data.avaliacao.push({
                    usuario: nomeUsuario,
                    media: nota
                });
            }

            // Enviar os dados atualizados para a API
            fetch('db_usuarios.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    if (response.ok) {
                        console.log('Média de avaliações atualizada com sucesso!');
                    } else {
                        console.error('Erro ao atualizar a média de avaliações.');
                    }
                })
                .catch(error => {
                    console.error('Erro ao enviar os dados atualizados:', error);
                });
        })
        .catch(error => {
            console.error('Erro ao obter os dados existentes:', error);
        });
}



// Associar o evento de envio do formulário à função de manipulação
const form = document.getElementById('avaliacaoForm');
form.addEventListener('submit', handleFormSubmit);
