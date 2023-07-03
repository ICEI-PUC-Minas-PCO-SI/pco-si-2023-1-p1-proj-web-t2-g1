URL = 'http://localhost:3000';

function salvarCorridas() {
    const idUsuarioLogado = localStorage.getItem('idUsuarioLogado');

    const saidaCEP = document.getElementById('cep1').value;
    const saidaRua = document.getElementById('rua1').value;
    const saidaBairro = document.getElementById('bairro1').value;
    const saidaCidade = document.getElementById('cidade1').value;
    const saidaUF = document.getElementById('uf1').value;
    const saidaNumero = document.getElementById('complemento1').value;

    const destinoCEP = document.getElementById('cep2').value;
    const destinoRua = document.getElementById('rua2').value;
    const destinoBairro = document.getElementById('bairro2').value;
    const destinoCidade = document.getElementById('cidade2').value;
    const destinoUF = document.getElementById('uf2').value;
    const destinoNumero = document.getElementById('complemento2').value;

    const tipo = document.getElementById('tipoCorrida').value;
    const valor = document.getElementById('valor').value;
    let corrida = {};

    // Buscar dados do usuário logado
    fetch(`${URL}/usuarios/${idUsuarioLogado}`)
        .then(res => res.json())
        .then(usuario => {
            corrida = JSON.stringify({
                id: 0,
                idCriador: idUsuarioLogado,
                nomeCriador: usuario.nome,
                telefoneCriador: usuario.telefone,
                sexoCriador: usuario.genero,
                vinculoCriador: usuario.vinculo,
                veiculo: usuario.modeloVeiculo,
                placa: usuario.placa,
                saidaCEP: saidaCEP,
                saidaRua: saidaRua,
                saidaBairro: saidaBairro,
                saidaCidade: saidaCidade,
                saidaUF: saidaUF,
                saidaNumero: saidaNumero,
                destinoCEP: destinoCEP,
                destinoRua: destinoRua,
                destinoBairro: destinoBairro,
                destinoCidade: destinoCidade,
                destinoUF: destinoUF,
                destinoNumero: destinoNumero,
                tipo: tipo,
                valor: valor,
                nomeInteressado: '',
                telefoneInteressado: '',
                sexoInteressado: '',
                vinculoInteressado: '',
                avaliacao: ''
            });

            fetch(`${URL}/corridas`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: corrida
            })
            .then(res => res.json())
            .then(corridaSalva => {
                const mensagem = `Corrida criada com sucesso! ID: ${corridaSalva.id}. Salve este código para avaliar sua corrida!`;

                if (confirm(mensagem)) {
                    window.open('Corridas-Disponiveis.html');
                } else {
                    location.reload();
                }
            })
            .catch(error => {
                console.error('Erro ao criar a corrida:', error);
            });
        });
}
  
document.getElementById('btn_SalvarCorrida').addEventListener('click', async function(event) {
    event.preventDefault();
    let jaCadastrouTelefone = true;
    const idUsuarioLogado = localStorage.getItem('idUsuarioLogado');

    await fetch(`${URL}/usuarios/${idUsuarioLogado}`)
            .then(res => res.json())
            .then(usuario => {
                if (usuario.telefone === "") {
                    jaCadastrouTelefone = false;
                }
    });
    const saidaCEP = document.getElementById('cep1').value;
    const saidaNumero = document.getElementById('complemento1').value;

    const destinoCEP = document.getElementById('cep2').value;
    const destinoNumero = document.getElementById('complemento2').value;

    const valor = document.getElementById('valor');
    
    console.log(typeof(valor)+ valor)

    if (saidaCEP === "" || destinoCEP === "" || saidaNumero === "" || destinoNumero === "" || valor.value === "") {
        alert("PREENCHA TODOS OS CAMPOS!");
    } else if (saidaCEP === destinoCEP) {
        alert("SAÍDA E DESTINO IGUAIS");
    } else if (valor.value.length > 5) {
        valor.style.border = "5px solid #f55";
        valor.style.borderRadius = "10px";
        alert("VALOR ALTO DEMAIS!")
    } else if (jaCadastrouTelefone == false){
        alert("Impossível criar corrida! Você precisa editar seu perfil primeiramente.");
    } else {
        salvarCorridas();
    }

//window.addEventListener('DOMContentLoaded', verificarUsuarioLogado);
});
