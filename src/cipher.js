const cipher = {
  encode(deslocamento, textoNaoDecifrado) {
    deslocamento = deslocamento % 26;
    textoNaoDecifrado = textoNaoDecifrado.toUpperCase()
    textoNaoDecifrado = textoNaoDecifrado.replace('Ç', 'C');

    let alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let letraChave = alfabeto.charAt(deslocamento);
    let splitAlfabeto = alfabeto.split(letraChave);
 
    let novoAlfabeto = letraChave+splitAlfabeto[1]+splitAlfabeto[0]
    let novaFrase = '';
    for(let i=0; i < textoNaoDecifrado.length;i++){
      if(textoNaoDecifrado.charAt(i) == ' '){
        novaFrase+= ' ';
      }else if(textoNaoDecifrado.charAt(i) == ','){
          novaFrase+= ',';
      }
        else{
        let numero = alfabeto.indexOf(textoNaoDecifrado.charAt(i));
        novaFrase += novoAlfabeto[numero]; 
      }
     
      
    }
    return novaFrase;
  },

  decode(deslocamento, textoNaoDecifrado){
    deslocamento = deslocamento % 26;
    textoNaoDecifrado = textoNaoDecifrado.toUpperCase()
    textoNaoDecifrado = textoNaoDecifrado.replace('Ç', 'C');

    let alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let letraChave = alfabeto.charAt(deslocamento);
    let splitAlfabeto = alfabeto.split(letraChave);

    let novoAlfabeto = letraChave+splitAlfabeto[1]+splitAlfabeto[0]
    let novaFrase = '';
    for(let i=0; i < textoNaoDecifrado.length;i++){
      if(textoNaoDecifrado.charAt(i) == ' '){
        novaFrase+= ' ';
      }else if(textoNaoDecifrado.charAt(i) == ','){
          novaFrase+= ',';
      }
        else{
        let numero = novoAlfabeto.indexOf(textoNaoDecifrado.charAt(i));
        novaFrase += alfabeto[numero]; 
      }
     
      
    }
    return novaFrase;
  }
}

export default cipher;
