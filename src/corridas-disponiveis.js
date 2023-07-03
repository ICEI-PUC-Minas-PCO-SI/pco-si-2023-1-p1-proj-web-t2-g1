URL = 'http://localhost:3000/corridas';

window.onload = MostraCorridas;

async function MostraCorridas () {
    const divCorridas = document.getElementById('divCorridas');
    let lista_corridas = '';

    await fetch(URL)
        .then(res => res.json())
        .then(corridas => {
            for(let i = 0; i < corridas.length; i++) {
                lista_corridas += `<div id="${corridas[i].id}" class="my-Box">
                <div >
                    <a class="aceitar" href="#">Tenho Interesse</a>
                    <!--<a class="negar" href="#">Sem Interesse</a>-->
                </div>
                <p class="topo">R$ ${corridas[i].valor}</p>
                <p class="local-partida">${corridas[i].saidaRua} - ${corridas[i].saidaBairro}</p>
                <p class="local-destino">${corridas[i].destinoRua} - ${corridas[i].destinoBairro}</p>
                <a class="botao" id="open-modal">Detalhes</a>
            </div>`;
            }
            divCorridas.innerHTML = lista_corridas;
    });
    GeraModal()
    AceitarCorrida();
}

function GeraModal() {
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

function AceitarCorrida () {
    const botaoAceitar = document.querySelectorAll(".aceitar");
    const idUsuarioLogado = localStorage.getItem('idUsuarioLogado')
    let dadosUsuarioLogado = {};

    for(i = 0; i < botaoAceitar.length; i++) {
        botaoAceitar[i].addEventListener('click', async function() {
            let idCorrida = this.parentNode.parentNode.id;
            await fetch(`http://localhost:3000/usuarios/${idUsuarioLogado}`)
                .then(res => res.json())
                .then(usuario => {
                    dadosUsuarioLogado = {
                        nome: usuario.nome,
                        telefone: usuario.telefone,
                        vinculo: usuario.vinculo,
                        sexo: usuario.genero
                    };
                });

            await fetch(`${URL}/${idCorrida}`)
                .then(res => res.json())
                .then(corrida => {
                    EnviarWhatsApp(corrida, dadosUsuarioLogado);
                });
        })
    }
}

function EnviarWhatsApp (corrida, dadosUsuarioLogado) {
    let divModalWpp = document.querySelector('#ModalWhatsApp');

    let linkWpp = `https://wa.me/55${corrida.telefoneCriador}?text=Olá, *${corrida.nomeCriador}*! Tudo bem?%0A%0AMeu nome é ${dadosUsuarioLogado.nome} e estou entrando em contato pois tenho interesse na carona oferecida por você no PUCarona, com saída na rua ${corrida.saidaRua} para o destino ${corrida.destinoRua}.%0A%0AQualquer dúvida estou a disposição!`

    let strModal = `<div id="fade" class="hide"></div>
    <div id="modalWpp" class="hide">
    <div class="modal-header">
        <h2>Entre em contato</h2>
        <button id="close-modal-wpp">Fechar</button>
    </div>
    <div class="modal-body">
        <div class="botao-whatsapp">
            <img src="images/logo-wpp.png" class="img-whatsapp">
            <p>Enviar Mensagem</p>
        </div>
    </div>
    </div>`;
    divModalWpp.innerHTML = strModal;
    
    const closeModalButton = document.querySelector("#close-modal-wpp");
    const modal = document.querySelector("#modalWpp");
    const fade = document.querySelector("#fade");

    const toggleModal = () => {
        modal.classList.toggle("hide");
        fade.classList.toggle("hide");
    };

    closeModalButton.addEventListener("click", () => toggleModal());
    toggleModal();
    let botaoWhatsApp = document.querySelector('.botao-whatsapp');

    botaoWhatsApp.addEventListener('click', async function () {
        var request = new Request(`${URL}/${corrida.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nomeInteressado: dadosUsuarioLogado.nome,
                telefoneInteressado: dadosUsuarioLogado.telefone,
                sexoInteressado: dadosUsuarioLogado.sexo,
                vinculoInteressado: dadosUsuarioLogado.vinculo
            })
        });

        await fetch(request)
            .then(function(response) {
                if (response.ok) {
                    alert("Interesse registrado!");
                } else {
                    console.log("Erro ao tentar registra interesse.");
                }
                })
                .catch(function(error) {
                console.log("Erro na requisição:", error);
                });
                
        window.open(linkWpp);
    })
}

/* === NÃO FUNCIONA SEM BACK END ===

function EnviarEmail(emailDestinatario, usuario) {
    const nodemailer = require("nodemailer");

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        logger: true,
        debug: true,
        secureConnection: false,
        auth: {
            user: "pucarona.oficial@gmail.com",
            pass: "tahllzciecrmgkcr" 
        },
        tls: {
            rejectUnauthorized: true
        }
    });

    transporter.sendMail({
        from: "PUCarona <pucarona.oficial@gmail.com>",
        to: `${emailDestinatario}`,
        subject: "Um filho da Puc aceitou sua corrida!",
        text: "Sua corrida foi aceita",
        html: `<h1>Boas notícias! &#129395</h1>
                <h4>${usuario.nome} aceitou sua corrida!</h4>
                <p>Segue abaixo os dados do interessado &#128071</p>
                <ul>
                    <li>Nome: ${usuario.nome}</li>
                    <li>Email: ${usuario.email}</li>
                    <li>Telefone: ${usuario.telefone}</li>
                    <li>Vínculo com a PUC Minas: ${usuario.vinculo}</li>
                    <li>Gênero: ${usuario.genero}</li>
                </ul>
                `  
    }).then(message => {
        console.log(message);
    }).catch(error => {
        console.log(error)
    })
}
*/

