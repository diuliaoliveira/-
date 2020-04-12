const cipher = {
  encode(deslocamento, textoNaoDecifrado) {
    textoNaoDecifrado = textoNaoDecifrado.toUpperCase()
    textoNaoDecifrado = textoNaoDecifrado.replace('Ç', 'C');

    let alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let letraChave = alfabeto.charAt(deslocamento);
    let splitAlfabeto = alfabeto.split(letraChave);
    console.log("splitado");
    console.log(splitAlfabeto);
    let novoAlfabeto = letraChave+splitAlfabeto[1]+splitAlfabeto[0]
    console.log(novoAlfabeto);
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
    console.log(novaFrase);
    return novaFrase;
  },

  decode(deslocamento, textoNaoDecifrado){
    textoNaoDecifrado = textoNaoDecifrado.toUpperCase()
    textoNaoDecifrado = textoNaoDecifrado.replace('Ç', 'C');

    let alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let letraChave = alfabeto.charAt(deslocamento);
    let splitAlfabeto = alfabeto.split(letraChave);
    console.log("splitado");
    console.log(splitAlfabeto);
    let novoAlfabeto = letraChave+splitAlfabeto[1]+splitAlfabeto[0]
    console.log(novoAlfabeto);
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
    console.log(novaFrase);
    return novaFrase;
  }
}

export default cipher;
