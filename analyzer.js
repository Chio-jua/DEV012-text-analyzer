const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const palabras = text.split(/\s+/);
    return palabras.length;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`. 
    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const caracteresSinEspacios = text.match(/[^,.+":;'?¿¡)(=·%&/*+ \t \n]/g);
    return caracteresSinEspacios.length;
  },
  
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(/\s+/);
    let suma = 0;
    for (let i = 0; i < words.length; i++) {
      const palabra = words[i];
      suma = palabra.length + suma;

    }
    return parseFloat((suma / words.length).toFixed(2));
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numeros = text.match(/\b\d+(\.\d+)?\b/g);
    if (!numeros) {
      return 0;
    }
    return numeros.length;

  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numeros = text.match(/\b\d+(\.\d+)?\b/g);
    //console.log(numeros);
    if(!numeros){
      return 0;
    } 

    let suma = 0;
    for(let i = 0; i < numeros.length; i++){
      suma += parseFloat(numeros[i]);

    }
    return suma;
  

    
    



  },

};

export default analyzer;
