
function limparLocalStorage() {
    localStorage.removeItem('dbUsuario');
  }
  
  function salvarUsuarios() {
    let objDado = {
      usuarios: [
        { email: "emailteste@.com", senha: "123" },
        { email: "adim@gmail", senha: "1234" }
      ],
      perfis: []  
    };
  
    objDado.usuarios = objDado.usuarios.filter(usuario => Object.keys(usuario).length !== 0);
  

      // Verificar se os dados já existem no localStorage
  let dadosExistentes = localStorage.getItem('dbUsuario');

  if (dadosExistentes) {
    // Se os dados já existem, apenas atualize a variável objDado
    objDado = JSON.parse(dadosExistentes);
  } else {
    // Caso contrário, salve os dados iniciais no localStorage
    localStorage.setItem('dbUsuario', JSON.stringify(objDado));
  }



    localStorage.setItem('dbUsuario', JSON.stringify(objDado));
  }
  
  function ler() {
    let strDado = localStorage.getItem('dbUsuario');
    let objDado = {};
  
    if (strDado) {
      objDado = JSON.parse(strDado);
    } else {
      objDado = { usuarios: [{ email: "emailteste@.com", senha: "123" }] };
    }
  
    objDado.usuarios = objDado.usuarios.filter(usuario => Object.keys(usuario).length !== 0);
  
    return objDado;
  }
  
  function Salvar(dado) {
    localStorage.setItem('dbUsuario', JSON.stringify(dado));
  }
  
  function incluirUsuario(email, senha) {
    let objDado = ler();
  
    let novoUsuario = {
      email: email,
      senha: senha
    };
  
    objDado.usuarios.push(novoUsuario);
    Salvar(objDado);
  }
  
  function verificarCredenciais(email, senha) {
    let objDado = ler();
    let usuarios = objDado.usuarios;
  
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].email === email && usuarios[i].senha === senha) {
        return true; // Credenciais válidas
      }
    }
  
    return false; // Credenciais inválidas
  }
  
  document.getElementById('btnEntrar').addEventListener('click', function() {
    let email = document.getElementById('email_input').value;
    let senha = document.getElementById('senha_input').value;
  
    if (verificarCredenciais(email, senha)) {
        // Credenciais válidas, armazenar o email no localStorage
        localStorage.setItem('emailUsuario', email);
        window.location.href = 'file:///C:/Users/Barbara%20Xavier/OneDrive%20-%20sga.pucminas.br/StudioCode/TODAS%20TELAS%20TIAW/src/Corridas-Disponiveis.html';
    
        // Redirecionar para a próxima página ou executar outras ações
      } else {
        // Credenciais inválidas, exibir mensagem de erro
        alert('Email ou senha incorretos. Por favor, tente novamente ou crie uma nova conta.');
      }
    });
  
  // Chamar a função para salvar os usuários corretos
  salvarUsuarios();
  




