const url = "http://localhost:3000/corridas";

// Função para armazenar o ID da corrida em localStorage
function armazenarIdCorrida(idCorrida) {
  localStorage.setItem("idCorridaSelecionada", idCorrida);
}
let  = document.getElementById('avaliacao').value;
// Função para enviar a avaliação da corrida
function enviarAvaliacao() {
  var idCorrida = localStorage.getItem("idCorridaSelecionada");
  var avaliacao = document.getElementById("inputAvaliacao").value;
  
  // Construir o objeto com os dados a serem enviados
  var dados = {
    idCorrida: idCorrida,
    avaliacao: avaliacao
  };

  // Enviar a avaliação para o servidor
  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dados)
  })
    .then(response => response.json())
    .then(data => {
      console.log("Avaliação enviada:", data);
      // Limpar o ID da corrida armazenado em localStorage
      localStorage.removeItem("idCorridaSelecionada");
      // Redirecionar para a página "historico.html"
      window.location.href = "historico.html";
    })
    .catch(error => {
      console.error("Erro ao enviar avaliação:", error);
    });
}

// Adicionando evento de clique ao botão de envio da avaliação
var botaoEnviarAvaliacao = document.getElementById("botaoEnviarAvaliacao");
botaoEnviarAvaliacao.addEventListener("click", enviarAvaliacao);
