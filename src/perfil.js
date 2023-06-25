function salvarDadosPerfil() {
    // Capturar o email do usuário logado no localStorage
    let emailUsuario = localStorage.getItem('emailUsuario');
  
    // Verificar se o email do usuário está definido
    if (emailUsuario) {
      // Capturar os valores dos campos de entrada
      let nome = document.getElementById('nome_input').value;
      let telefone = document.getElementById('tel_input').value;
      let genero = document.getElementById('genero').value;
      let endereco = document.getElementById('tx_endereco').value;
      let bairro = document.getElementById('bairro').value;
      let numeroCasa = document.getElementById('numero_casa').value;
      let cidade = document.getElementById('cidade').value;
      let vinculo = document.getElementById('vinculo').value;
  
      // Criar um objeto com os valores capturados
      let dadosPerfil = {
        email: emailUsuario,
        nome: nome,
        telefone: telefone,
        genero: genero,
        endereco: endereco,
        bairro: bairro,
        numeroCasa: numeroCasa,
        cidade: cidade,
        vinculo: vinculo
      };
  
      // Ler os dados existentes no localStorage
      let objDado = JSON.parse(localStorage.getItem('dbUsuario'));

      
    // Verificar se já existe um perfil com o mesmo email
    let perfilExistente = objDado.perfis.find(perfil => perfil.email === emailUsuario);

    if (perfilExistente) {
      // Atualizar o perfil existente com os novos dados
      perfilExistente.nome = nome;
      perfilExistente.telefone = telefone;
      perfilExistente.genero = genero;
      perfilExistente.endereco = endereco;
      perfilExistente.bairro = bairro;
      perfilExistente.numeroCasa = numeroCasa;
      perfilExistente.cidade = cidade;
      perfilExistente.vinculo = vinculo;
    } else {
      // Adicionar o perfil do usuário atual ao array de perfis
      objDado.perfis.push(dadosPerfil);
    }

  
      // Adicionar o perfil do usuário atual ao array de perfis
     // objDado.perfis.push(dadosPerfil);
  
      // Salvar os dados atualizados no localStorage
      localStorage.setItem('dbUsuario', JSON.stringify(objDado));
    } else {
      // Caso o email do usuário não esteja definido
      alert('Usuário não autenticado. Faça login antes de salvar os dados do perfil.');
    }
  }
  
  document.getElementById('btn_SalvarAlteracoes').addEventListener('click', salvarDadosPerfil);
  


