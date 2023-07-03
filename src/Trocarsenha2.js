const URL = 'http://localhost:3000/usuarios';

// Função para trocar a senha
function trocarSenha() {
  const senha1 = document.getElementById('senha1_input').value;
  const senha2 = document.getElementById('senha2_input').value;

  if (senha1 === senha2) {
   
   
    
    const usuarioID = 1; 
    const dados = {
      novasenha: senha
    };

   
    fetch(`${URL}/${usuarioID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    })
      .then(response => {
        if (response.ok) {
          
          alert('Senha atualizada com sucesso!');
         
          window.location.href ='index.html';
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
  salvarAlteracoes();
});