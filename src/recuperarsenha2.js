const url = "https://api-storage-tiaw-exnr.vercel.app/usuarios";
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event triggered.');
    
    const form = document.querySelector('form');
  
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      
      const senha = document.getElementById('senha').value;
      const confirmaSenha = document.getElementById('confirma').value;
  
      
      if (senha !== confirmaSenha) {
        alert('As senhas não correspondem!');
        return;
      }
  
    
      const usuario = {
        id: 1,
        senha: senha
      };
    
      axios.put('http://localhost:3000/usuarios/' + usuario.id, usuario)
        .then(function(response) {
          console.log('Senha atualizada com sucesso!');
        })
        .catch(function(error) {
          console.error('Erro ao atualizar a senha:', error);
        });
    });
  });