URL = 'http://localhost:3000/corridas';

window.onload = MostraCorridas;

function MostraCorridas () {
    const divCorridas = document.getElementById('divCorridas');
    let lista_corridas = '';

    fetch(URL)
        .then(res => res.json())
        .then(corridas => {
            for(let i = 0; i < corridas.length; i++) {
                lista_corridas += `<div class="my-Box">
                <div >
                    <a class="aceitar" href="#">Tenho Interesse</a>
                    <a class="negar" href="#">Sem Interesse</a>
                </div>
                <p class="topo">R$ ${corridas[i].valor}</p>
                <p class="local-partida">${corridas[i].saidaRua} - ${corridas[i].saidaBairro}</p>
                <p class="local-destino">${corridas[i].destinoRua} - ${corridas[i].destinoBairro}</p>
                <a class="botao" id="botao" href="#" data-bs-toggle="modal" data-bs-target="#modal-window">Detalhes</a>
            </div>`;
            }
            divCorridas.innerHTML = lista_corridas;
            //GeraModal();
    });
}

/*function GeraModal() {
    const botaoDetalhes = document.querySelectorAll('#botao');
    botaoDetalhes.forEach(botao => {
        botao.addEventListener('click', geraAlerta);
    })
    
}

function geraAlerta () {
    alert("TETE")
}*/
