// Função para excluir um usuário pelo ID
function excluirUsuario(id) {
    const xhr = new XMLHttpRequest();
    
    xhr.open('DELETE', '/excluir-usuario');
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          console.log('Usuário excluído com sucesso.');
        } else {
          console.log('Falha ao excluir o usuário.');
        }
      }
    };
    
    xhr.send(JSON.stringify({ id: id }));
  }
  

  
  
  
  // Capturar o formulário de exclusão
  const form = document.querySelector('form');
  
  // Adicionar um ouvinte de evento para o envio do formulário
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
  
    // Obter o ID do usuário selecionado no formulário
    const select = document.querySelector('select');
    const selectedOption = select.options[select.selectedIndex];
    const id = parseInt(selectedOption.value);
  
  // Chamar a função para excluir o usuário com o ID 1
  excluirUsuario(1);
  });
  