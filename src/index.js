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
    alert("Valor do deslocamento: " + deslocamento);
    alert('Mensagem recebida: ' + mensagem);
    console.log(mensagem);
    let retorno =  cipher.encode(deslocamento,mensagem);
    document.getElementById('resultado').value = retorno;
    
}
let decifrarMensagem = function (mensagem) {
    var deslocamento = document.getElementById('deslocamento').value;
    alert("Valor do deslocamento: " + deslocamento);
    alert('Mensagem recebida: ' + mensagem);
    console.log(mensagem);
    let retorno =  cipher.decode(deslocamento,mensagem);
    document.getElementById('resultado').value = retorno;
 
}
document.getElementById("Cifrar").addEventListener("click", pegarMensagemCifrar); 
document.getElementById("Decodificar").addEventListener("click", pegarMensagemDecodificar); 

