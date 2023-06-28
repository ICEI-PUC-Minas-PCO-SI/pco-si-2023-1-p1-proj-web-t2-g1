document.getElementById("avaliacaoForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  var idCorrida = document.getElementById("inputIDCorrida").value;
  var nota = document.getElementById("inputNota").value;


  const URL = "http://localhost:3000/corridas/" + idCorrida;

  // faz a requisição
  var request = new Request(URL, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avaliacao: nota
    })
  });

  // Envia a requisição
  fetch(request)
    .then(function(response) {
      if (response.ok) {
        alert("Avaliação enviada, agradecemos sua contribuição.");
        window.open("Historico.html");
      } else {
        console.log("Erro ao salvar a avaliação.");
      }
    })
    .catch(function(error) {
      console.log("Erro na requisição:", error);
    });
});
