// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") {
      return;
    }
  
    const voices = speechSynthesis.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  }
  
  populateVoiceList();
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  
  const synth = window.speechSynthesis;

  const faceImg = document.querySelector('img');
  const talkButton = document.querySelector('button');
  talkButton.addEventListener('click', function(){
    const textToSpeak = document.getElementById('text-to-speak').value;
    const selectedOption = document.getElementById('voice-select').selectedOptions[0].getAttribute("data-name");
    const voices = synth.getVoices();
    const utterThis = new SpeechSynthesisUtterance(textToSpeak);
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);

    faceImg.src = `assets/images/smiling-open.png`;
    const speakingInterval = setInterval(function(){
      if (!speechSynthesis.speaking) {
        clearInterval(speakingInterval);
        faceImg.src = 'assets/images/smiling.png';
      }
    }, 100);

  });


}