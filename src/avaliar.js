const url = "http://localhost:3000/corridas";

function salvarAvaliacao() {
  const nota = document.getElementById("inputNota").value;

  fetch(`${url}/1`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      avaliacao: nota
    })
  })
    .then(response => response.json())
    .then(data => {
      console.log("Avaliação salva:", data);
    })
    .catch(error => {
      console.error("Erro ao salvar avaliação:", error);
    });
}

const botaoSalvarAvaliacao = document.getElementById("botaoSalvarAvaliacao");
botaoSalvarAvaliacao.addEventListener("click", salvarAvaliacao);
