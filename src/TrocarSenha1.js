
const URL = 'http://localhost:3000/usuarios';

// FUNÇÃO PARA VERIFICAÇÃO DO EMAIL E TELEFONE
fetch(URL)
        .then(res => res.json())
        .then(usuarios => {
            const usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.telefone === telefone);

            if (usuarioEncontrado) {

            } else {
                alert('Email ou senha inválidos. Tente novamente, ou faça o cadastro');
            }
        })

//FUNÇÃO PARA VERIFICAÇÃO DO EMAIL PUC MINAS

function VerificaEmail () {
  let email = document.getElementById('email').value;

  if(!email.includes("@sga.pucminas.br")) {
  if (!email.includes("@sga.pucminas.br") && !email.includes("@pucminas.br")) {
      alert('O email não está autorizado.');
      return false;
  }
}
}