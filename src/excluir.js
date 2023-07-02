const url = "http://localhost:3000/usuarios";

const btnDelete = document.getElementById('btn-delete');
btnDelete.addEventListener('click', () => {
  const idUsuarioLogado = localStorage.getItem('idUsuarioLogado'); // recebe o id do local storage criado em login

  if (idUsuarioLogado) {
    fetch(`${url}/${idUsuarioLogado}`, {
      method: 'DELETE',
    })
      .then(() => {
        console.log(`Usuário com ID ${idUsuarioLogado} excluído com sucesso.`);
        alert('Usuário excluído com sucesso.');
        window.open('index.html');
      })
      .catch(error => {
        console.error('Erro ao excluir usuário:', error);
        alert('Erro ao excluir usuário.');
      });
  } else {
    alert('Nenhum usuário logado. Faça o login primeiro.');
  }
});
