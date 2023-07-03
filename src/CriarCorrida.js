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
            /*fetch(`${URL}/corridas`)
                .then(res => res.json())
                .then(data => {
                    if (data.corridas && data.corridas.length > 0) {
                        // Já existem corridas no JSON, basta adicionar a nova corrida
                        adicionarCorrida(corrida);
                        
                    } else {
                        // Não existem corridas no JSON, criar uma nova lista com a corrida
                        const novaListaCorridas = {
                            corridas: [corrida]
                        };
                        fetch(`${URL}/corridas`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(novaListaCorridas)
                        })
                            .then(res => res.json())
                            .then(corridaSalva => {
                                console.log('Corrida salva:', corridaSalva);
                                alert('Corrida criada com sucesso!');
                            })
                            .catch(error => {
                                console.error('Erro ao criar a corrida:', error);
                            });
                    }
                })
                .catch(error => {
                    console.error('Erro ao obter as corridas:', error);
                });
        })
        .catch(error => {
            console.error('Erro ao obter dados do usuário:', error);
        });
}
*/
/*function adicionarCorrida(corrida) {
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            data.corridas.push(corrida);
            return fetch(URL, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        })
        .then(res => res.json())
        .then(corridaSalva => {
            console.log('Corrida salva:', corridaSalva);
            alert('Corrida criada com sucesso!');
        })
        .catch(error => {
            console.error('Erro ao adicionar a corrida:', error);
        });
}*/

/*function verificarUsuarioLogado() {
    const idUsuarioLogado = localStorage.getItem('idUsuarioLogado');
    if (idUsuarioLogado) {
        fetch(`${URL}/usuarios/${idUsuarioLogado}`)
            .then(res => res.json())
            .then(usuario => {
                document.getElementById('cep1').value = usuario.rua;
                document.getElementById('rua1').value = usuario.bairro;
                document.getElementById('bairro1').value = usuario.numero;
                document.getElementById('cidade1').value = usuario.cidade;
                document.getElementById('uf1').value = usuario.vinculo;
                document.getElementById('complemento1').value = usuario.modeloVeiculo;

                document.getElementById('cep2').value = usuario.placa;
                document.getElementById('rua2').value = '';
                document.getElementById('bairro2').value = '';
                document.getElementById('cidade2').value = '';
                document.getElementById('uf2').value = '';
                document.getElementById('complemento2').value = '';

                document.getElementById('tipoCorrida').value = '';
                document.getElementById('valor').value = '';
            })
            .catch(error => {
                console.error('Erro ao recuperar dados do usuário:', error);
            });
    } else {
        alert('Nenhum usuário logado. Faça o login para acessar essa página!');
        //window.location.href = 'login.html';
    }
}*/

document.getElementById('btn_SalvarCorrida').addEventListener('click', function(event) {
    event.preventDefault();
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
    } else {
        salvarCorridas();
    }

//window.addEventListener('DOMContentLoaded', verificarUsuarioLogado);
});
