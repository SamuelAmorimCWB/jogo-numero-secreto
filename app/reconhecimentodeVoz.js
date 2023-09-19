
const elementoChute = document.getElementById('chute')

//suport chrome
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.lang = 'pt-Br'
  recognition.start()

  recognition.addEventListener('result',onSpeak)
  function onSpeak(e){
    chute =e.results[0][0].transcript
    console.log(e.results[0][0].transcript)
    console.log(e.target.lang)
    exibeChute(chute)
    verificaValorValido(chute)
   }

   function exibeChute(chute){
      elementoChute.innerHTML=`
        <div>Você disse:</div>
        <span class="box">${chute}</span>
        `
   }

   recognition.addEventListener('end', () => recognition.start())

