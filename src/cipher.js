export default cipher;

const cipher = {
  encode(deslocamento, texto) {
    Number(deslocamento)
    texto = texto.toUpperCase()
    alert(texto)
    alert(deslocamento)
    let messagearray = []
    let textoRetorno = ""

    for (let i = 0; i < texto.length; i++) {
      messagearray[i] = (texto.charAt(i))
      messagearray[i] = (((messagearray[i].charCodeAt(0)) - 65 + deslocamento) % 26 + 65)
      textoRetorno += String.fromCharCode(messagearray[i])
      alert(textoRetorno)
    }
  }
}
