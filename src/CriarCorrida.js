
URL = 'http://localhost:3000/corridas'

document.getElementById('btn_SalvarCorrida').addEventListener('click', function(event) {
    event.preventDefault();
    criarCorrida();
});

function criarCorrida() {

    const corri = JSON.stringify({
        saidaCEP: document.getElementById('cep1').value,
        saidaRua: document.getElementById('rua1').value,
        saidaBairro: document.getElementById('bairro1').value,
        saidaCidade: document.getElementById('cidade1').value,
        saidaUF: document.getElementById('uf1').value,
        saidaNumero: document.getElementById('complemento1').value,
        destinoCEP: document.getElementById('cep2').value,
        destinoRua: document.getElementById('rua2').value,
        destinoBairro: document.getElementById('bairro2').value,
        destinoCidade: document.getElementById('cidade2').value,
        destinoUF: document.getElementById('uf2').value,
        destinoNumero: document.getElementById('complemento2').value,
        tipo: document.getElementById('tipoCorrida').value,
        valor: document.getElementById('valor').value


    })

    fetch(URL, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: corri
    })
    .then(res => res.json())
    .then(() => location.reload());
}