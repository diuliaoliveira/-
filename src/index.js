let pegarMensagem = function () {
    let mensagem = document.getElementById("Cifrar").value;
    cifrarMensagem(mensagem);
}

let cifrarMensagem = function (mensagem) {
    alert('Mensagem recebida: ' + mensagem);
    console.log(mensagem);
}

document.getElementById("Codificar").addEventListener("click", pegarMensagem); 
