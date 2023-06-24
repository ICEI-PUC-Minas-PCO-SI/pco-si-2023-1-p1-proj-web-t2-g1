const URL = 'http://localhost:3000/motorista';

document.getElementById('avaliacaoForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtenha o valor selecionado no <select> das notas
  var nota = document.getElementById('selectNota').value;

  // Obtenha o ID do usuário selecionado
  var usuarioId = document.getElementById('selectUsuario').value;

  // Fazer a requisição HTTP para atualizar o JSON
  fetch(URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var motorista = data.motorista;

      // Verificar se já existem notas e calcular a nova média
      var notas = motorista.notas || [];
      notas.push(Number(nota));
      var media = calcularMedia(notas);

      // Atualizar o valor da média no objeto motorista
      motorista.media = media;

      // Fazer a requisição PUT para atualizar o JSON no servidor
      fetch(URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(function(response) {
          if (response.ok) {
            console.log('Média atualizada com sucesso.');
          } else {
            console.error('Ocorreu um erro ao atualizar a média.');
          }
        })
        .catch(function(error) {
          console.error('Ocorreu um erro na requisição PUT:', error);
        });
    })
    .catch(function(error) {
      console.error('Ocorreu um erro na requisição GET:', error);
    });
});

function calcularMedia(notas) {
  var total = 0;
  for (var i = 0; i < notas.length; i++) {
    total += notas[i];
  }
  return total / notas.length;
}
