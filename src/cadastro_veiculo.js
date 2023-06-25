function salvarDadosVeiculos(){
    
    let emailUsuario = localStorage.getItem('emailUsuario');

    if(emailUsuario){

        let cnh = document.getElementById('cnh').value;
        let crlv = document.getElementById('crlv').value;
        let placa = document.getElementById('placa').value;
        let modelo = document.getElementById('modelo').value;

        let dadosVeiculo = {
            email: emailUsuario,
            cnh: cnh,
            crlv: crlv,
            placa: placa,
            modelo: modelo
        };


        let objDado = JSON.parse(localStorage.getItem('db_usuario'));

        let perfilExistente = objDado.perfis.find(perfil => perfil.email === emailUsuario);

        if(perfilExistente){
            perfilExistente.cnh = cnh;
            perfilExistente.crlv = crlv;
            perfilExistente.placa = placa;
            perfilExistente.modelo = modelo;
        }else{
            objDado.veiculo.push(dadosVeiculo);
        }

        localStorage.setItem('dbUsuario', JSON.stringify(objDado));

    }else{
        alert('usuário não autenticado');

    }

    document.getElementById('btn_salvarAlteracoes').addEventListener('click', salvarDadosVeiculos);

    }
