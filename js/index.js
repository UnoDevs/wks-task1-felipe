var regexName = /^[A-Za-z]+$/;
var regexEmail = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]/;
var regexNumber = /^\([0-9]{2}\)[0-9]{4,5}-[0-9]{4}/;

function validarCampos(){
    let fields = [false,false,false];
    let hasInvalid = false;

    fields[0] = validarNome(document.getElementById('name').value);
    fields[1] = validarEmail(document.getElementById('email').value);
    fields[2] = validarNumber(document.getElementById('number').value);
    console.log(fields)

    fields.forEach(test => {
        if(!test){
            hasInvalid = true;
        }
    })
    if(!hasInvalid){
        confirm('Formulário Com Dados Validos!');
        limparCampos();
    }
}

function limparCampos(){
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('number').value = '';
}


function validarNome(nomeInput){
    let result = regexName.test(nomeInput);
    if(!result){
        confirm('Nome contêm caracter especial ou numero! Por favor verifique!');
    }
    return result;
}

function validarEmail(emailInput){
    let result = regexEmail.test(emailInput);
    if(!result){
        confirm('E-mail com estrutura invalida! Por favor verifique!');
    }
    return result;
}

function validarNumber(numberInput){
    let result = regexNumber.test(numberInput);
    if(!result){
        confirm('Telefone informado invalido! Por favor verifique!');
    }
    return result;
}