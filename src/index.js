import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const textarea = document.querySelector("textarea[name='user-input']");
const button = document.getElementById("reset-button");


textarea.addEventListener("input", metricas);
function metricas() {
  const text = textarea.value;

  document.querySelector('[data-testid="character-count"]').innerHTML = 'Número de caracteres: ' + analyzer.getCharacterCount(text);
  document.querySelector('[data-testid="word-count"]').innerHTML = 'Número de palabras: ' + analyzer.getWordCount(text);
  document.querySelector('[data-testid="number-count"]').innerHTML = 'Cantidad de números: ' + analyzer.getNumberCount(text);
  document.querySelector('[data-testid="character-no-spaces-count"]').innerHTML = 'Número de caracteres sin espacios: ' + analyzer.getCharacterCountExcludingSpaces(text);
  document.querySelector('[data-testid="word-length-average"]').innerHTML = 'Media de palabras: ' + analyzer.getAverageWordLength(text);
  document.querySelector('[data-testid="number-sum"]').innerHTML = 'Suma de números: ' + analyzer.getNumberSum(text);

}

button.addEventListener("click", function () {
  if(textarea.value===''){
    alert("El cuadro de texto está limpio");
  }else{
    textarea.value='';
  }
  
});











