
const url = "http://localhost:3000/usuarios";
// Função para lidar com o clique no botão de prosseguir
function recuperarSenha() {
    // Obter o valor do campo de e-mail
    const email = document.getElementById('email1').value;

    // Verificar se o e-mail foi preenchido
    if (email === '') {
      alert('Por favor, preencha o campo de e-mail.');
      return;
    }


    fetch('http://localhost:3000/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    })
    .then(response => {
      if (response.ok) {
        alert('Um e-mail de recuperação de senha foi enviado para o endereço fornecido.');
      } else {
        alert('Ocorreu um erro ao processar a solicitação de recuperação de senha.');
      }
    })
    .catch(error => {
      console.error('Erro:', error);
      alert('Ocorreu um erro ao processar a solicitação de recuperação de senha.');
    });
  }

  // Adicionar um ouvinte de evento ao botão de prosseguir
  document.querySelector('button').addEventListener('click', recuperarSenha);