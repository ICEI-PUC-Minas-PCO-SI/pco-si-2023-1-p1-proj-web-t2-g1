URL = 'http://localhost:3000/corridas';

window.onload = MostraHistorico;

async function MostraHistorico () {
    const divHistorico = document.querySelector(".my-Container")
    const idUsuarioLogado = localStorage.getItem('idUsuarioLogado');
    let nomeUsuarioLogado = "";
    await fetch(`http://localhost:3000/usuarios/${idUsuarioLogado}`)
            .then(res => res.json())
            .then(usuario => {
                nomeUsuarioLogado = usuario.nome;
    });

    console.log(nomeUsuarioLogado)
    
    await fetch(URL)
        .then(res => res.json())
        .then(corridas => {
            let lista_corridas = '';
            for(i = 0; i < corridas.length; i++) {
                if(corridas[i].idCriador == idUsuarioLogado) {
                    lista_corridas += `<div id="${corridas[i].id}" class="my-Box">
                    <p class="motorista topo">Motorista</p>
                    <p class="topo">R$ ${corridas[i].valor}</p>
                    <p class="local-partida">${corridas[i].saidaRua} - ${corridas[i].saidaBairro}</p>
                    <p class="local-destino">${corridas[i].destinoRua} - ${corridas[i].destinoBairro}</p>
                    <a class="botao" id="open-modal">Detalhes</a>
                </div>`
                }

                if(corridas[i].nomeInteressado == nomeUsuarioLogado) {
                    lista_corridas += `<div id="${corridas[i].id}" class="my-Box">
                    <p class="passageiro topo">Passageiro</p>
                    <p class="topo">R$ ${corridas[i].valor}</p>
                    <p class="local-partida">${corridas[i].saidaRua} - ${corridas[i].saidaBairro}</p>
                    <p class="local-destino">${corridas[i].destinoRua} - ${corridas[i].destinoBairro}</p>
                    <a class="botao" id="open-modal">Detalhes</a>
                </div>`;

                }
            }
            divHistorico.innerHTML = lista_corridas;
        });
        GeraModal();
}

function GeraModal () {
    const botaoDetalhes = document.querySelectorAll("#open-modal");
    const divModal = document.querySelector('#divModal');

    for(i = 0; i < botaoDetalhes.length; i++) {
        botaoDetalhes[i].addEventListener('click', function () {
            let idCorrida = this.parentNode.id;
            
            fetch(`${URL}/${idCorrida}`)
                .then(res => res.json())
                .then(corrida => {
                    let modalStr = `<div id="fade" class="hide"></div>
                    <div id="modal" class="hide">
                    <div class="modal-header">
                        <h2>DETALHES DA CORRIDA</h2>
                        <button id="close-modal">Fechar</button>
                    </div>
                    <div class="modal-body">
                        <div class="campo">
                            <h5>Nome:</h5>
                            <p>${corrida.nomeCriador}</p>
                        </div>
                        <div class="campo">
                            <h5>Telefone:</h5>
                            <p>${corrida.telefoneCriador}</p>
                        </div>
                        <div class="campo">
                            <h5>Sexo:</h5>
                            <p>${corrida.sexoCriador}</p>
                        </div>
                        <div class="campo">
                            <h5>Vínculo:</h5>
                            <p>${corrida.vinculoCriador}</p>
                        </div>
                        <div class="campo">
                            <h5>De:</h5>
                            <p>${corrida.saidaRua} - ${corrida.saidaBairro} / ${corrida.saidaCidade}, nº: ${corrida.saidaNumero}</p>
                        </div>
                        <div class="campo">
                            <h5>Para: </h5>
                            <p>${corrida.destinoRua} - ${corrida.destinoBairro} / ${corrida.destinoCidade}, nº: ${corrida.destinoNumero}</p>
                        </div>
                        <div class="campo">
                            <h5>Tipo: </h5>
                            <p>${corrida.tipo}</p>
                        </div>
                        <div class="campo">
                            <h5>Placa: </h5>
                            <p>${corrida.placa}</p>
                        </div>
                        <div class="campo">
                            <h5>Valor: </h5>
                            <p>R$ ${corrida.valor}</p>
                        </div>
                    </div>
                    </div>`;
                divModal.innerHTML = modalStr;

                const closeModalButton = document.querySelector("#close-modal");
                const modal = document.querySelector("#modal");
                const fade = document.querySelector("#fade");

                const toggleModal = () => {
                    modal.classList.toggle("hide");
                    fade.classList.toggle("hide");
                };

                closeModalButton.addEventListener("click", () => toggleModal());
                toggleModal();
            });
        });
    }
}