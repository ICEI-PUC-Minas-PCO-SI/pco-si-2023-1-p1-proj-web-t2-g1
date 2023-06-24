URL='http://localhost:3000/comments';

// Função para calcular a média
function calcularMedia(avaliacoes) {
    const notas = avaliacoes.map(avaliacao => parseInt(avaliacao.nota, 10));
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    const media = soma / notas.length;
  
    return media.toFixed(2);
  }
  
  // Função para manipular o evento de envio do formulário
  function handleFormSubmit(event) {
    event.preventDefault();
  
    const selectNota = document.getElementById('selectNota');
    const nota = selectNota.value;
  
    const nomeUsuario = 'João Pedro da Silva Santos'; // Nome do usuário fixo para este exemplo
  
    const avaliacao = { nomeUsuario, nota };
  
    // Ler o arquivo JSON existente (se houver)
    let avaliacoesExistente = [];
    try {
      avaliacoesExistente = JSON.parse(localStorage.getItem('avaliacoes')) || [];
    } catch (error) {
      console.error('Erro ao ler o arquivo JSON:', error);
    }
  
    // Adicionar a nova avaliação às avaliações existentes
    avaliacoesExistente.push(avaliacao);
  
    // Calcular a média das avaliações
    const media = calcularMedia(avaliacoesExistente);
  
    // Salvar a média no arquivo JSON
    const jsonContent = JSON.stringify({ nomeUsuario, media });
    try {
      localStorage.setItem('avaliacoes', jsonContent);
      console.log('Média de avaliações armazenada com sucesso!');
    } catch (error) {
      console.error('Erro ao gravar o arquivo JSON:', error);
    }
  }
  
  // Associar o evento de envio do formulário à função de manipulação
  const form = document.getElementById('avaliacaoForm');
  form.addEventListener('submit', handleFormSubmit);
  