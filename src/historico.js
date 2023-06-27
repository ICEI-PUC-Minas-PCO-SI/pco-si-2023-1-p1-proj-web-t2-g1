URL = 'https://api-storage-tiaw-exnr.vercel.app/corridas';

window.onload = MostraHistorico;

function MostraHistorico () {
    const divHistorico = document.querySelector(".my-Container")
    const idUsuarioLogado = localStorage.getItem('idUsuarioLogado');
    console.log(idUsuarioLogado)
    
    fetch(URL)
        .then(res => res.json())
        .then(corridas => {
            let lista_corridas = '';
            for(i = 0; i < corridas.length; i++) {
                if(corridas[i].idCriador == idUsuarioLogado) {
                    lista_corridas += `<div class="my-Box">
                    <p class="motorista topo">Motorista</p>
                    <p class="topo">R$ ${corridas[i].valor},00</p>
                    <p class="local-partida">${corridas[i].saidaRua} - ${corridas[i].saidaBairro}</p>
                    <p class="local-destino">${corridas[i].destinoRua} - ${corridas[i].destinoBairro}</p>
    
                    <a class="botao" href="#" data-bs-toggle="modal" data-bs-target="#modal-window">Detalhes</a>
                </div>`
                }
            }
            divHistorico.innerHTML = lista_corridas;
        })
}