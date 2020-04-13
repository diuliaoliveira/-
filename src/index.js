import cipher from './cipher.js';

let pegarMensagemCifrar = function () {
    let mensagem = document.getElementById("mensagem").value;
    cifrarMensagem(mensagem);
 
}
let pegarMensagemDecodificar = function () {
    let mensagem = document.getElementById("mensagem").value;
    decifrarMensagem(mensagem);
}
let cifrarMensagem = function (mensagem) {
    var deslocamento = document.getElementById('deslocamento').value;
    let retorno =  cipher.encode(deslocamento,mensagem);
    document.getElementById('resultado').value = retorno;
    
}
let decifrarMensagem = function (mensagem) {
    var deslocamento = document.getElementById('deslocamento').value;
    let retorno =  cipher.decode(deslocamento,mensagem);
    document.getElementById('resultado').value = retorno;
 
}
let verificarSenha = function(){
    let senha = 'Expelliarmus';
    let senhaDigitada = document.getElementById('senha').value;
    if(senha == senhaDigitada){
        document.getElementById('sectioncontent').style.display = 'block';
        document.getElementById('secaoSenha').style.display = 'none';
    }else{
        alert('Senha errada!');
    }

}
document.getElementById("Cifrar").addEventListener("click", pegarMensagemCifrar); 
document.getElementById("Decodificar").addEventListener("click", pegarMensagemDecodificar); 
document.getElementById("Entrar").addEventListener("click", verificarSenha);

