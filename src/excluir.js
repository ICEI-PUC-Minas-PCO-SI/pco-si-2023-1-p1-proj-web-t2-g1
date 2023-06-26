const url = "http://localhost:3000/usuarios";

const btnDelete = document.getElementById('btn-delete');
btnDelete.addEventListener('click', () => {
  const idUsuarioLogado = localStorage.getItem('idUsuarioLogado'); // Obtém o ID do usuário logado do localStorage da pag de login

  if (idUsuarioLogado) {
    fetch(`${url}/${idUsuarioLogado}`, {
      method: 'DELETE',
    })
      .then(() => {
        console.log(`Usuário com ID ${idUsuarioLogado} excluído com sucesso.`);
        alert('Usuário excluído com sucesso.');
        location.reload(); // Recarrega a página após excluir o usuário
      })
      .catch(error => {
        console.error('Erro ao excluir usuário:', error);
        alert('Erro ao excluir usuário.');
      });
  } else {
    alert('Nenhum usuário logado. Faça o login primeiro.');
  }
});
