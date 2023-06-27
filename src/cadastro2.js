const URL = 'https://api-storage-tiaw-exnr.vercel.app/usuarios';
const botaoCadastro = document.getElementById('cadastrar');

botaoCadastro.addEventListener('click', CadastraUsuario);

function CadastraUsuario() {

    if(VerificaSenha() == false) {
        return;
    }

    if(VerificaEmail() == false) {
        return;
    }

    const novoUsuario = JSON.stringify({
        id: 0,
        nome: document.getElementById('username').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('password').value,
        telefone: "",
        genero: "",
        rua: "",
        bairro: "",
        numero: "",
        cidade: "",
        vinculo: "",
        modeloVeiculo: "",
        placa: "",
        CNH: "",
        CRLV: ""
    });
    
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: novoUsuario
    })
    .then(res => res.json())
    .then(() => location.reload());

    window.open('..\src\login.html');
}

function VerificaSenha () {
    let senha = document.getElementById('password').value;
    let senha2 = document.getElementById('password2').value;

    if (senha !== senha2) {
        alert('As senhas informadas não conferem.');
        return false;
    }
}

function VerificaEmail () {
    let email = document.getElementById('email').value;

    if(!email.includes("@sga.pucminas.br")) {
        alert('O email não está autorizado.');
        return false;
    }
}