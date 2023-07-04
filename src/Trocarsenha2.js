const URL = 'http://localhost:3000/usuarios';

// Função para buscar os dados do usuário
function buscarDadosUsuario(idUsuario) {
  return fetch(`${URL}/${idUsuario}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Erro ao buscar os dados do usuário.');
      }
    })
    .catch(error => {
      console.error('Erro ao realizar a requisição:', error);
    });
}

// Função para trocar a senha
function trocarSenha() {
  const idUsuarioLogado = localStorage.getItem('idUsuarioLogado'); // Obtém o ID do usuário logado do localStorage

  const senha1 = document.getElementById('senha1_input').value;
  const senha2 = document.getElementById('senha2_input').value;

  if (senha1 === senha2) {
    buscarDadosUsuario(idUsuarioLogado)
      .then(usuario => {
        const usuarioAtualizado = {
          ...usuario,
          senha: senha1
        };

        return fetch(`${URL}/${idUsuarioLogado}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(usuarioAtualizado)
        });
      })
      .then(response => {
        if (response.ok) {
          alert('Senha atualizada com sucesso!');
          
          window.open('index.html');
        } else {
          alert('Erro ao atualizar a senha. Por favor, tente novamente.');
        }
      })
      .catch(error => {
        console.error('Erro ao realizar a requisição:', error);
      });
  } else {
    alert('A nova senha e a confirmação não coincidem. Por favor, verifique os campos.');
  }
}

document.getElementById('btn_SalvarAlteracoes').addEventListener('click', function(event) {
  event.preventDefault();
  trocarSenha();
});


