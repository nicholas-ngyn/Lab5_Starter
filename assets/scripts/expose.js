// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById("horn-select");
  hornSelect.addEventListener('change', function(){
    const selectedHorn = hornSelect.value;

    const image = document.querySelector('img');
    image.src = `assets/images/${selectedHorn}.svg`;

    const audio = document.querySelector('audio');
    audio.src = `assets/audio/${selectedHorn}.mp3`;
  });

  const volumeSlider = document.getElementById('volume');
  volumeSlider.addEventListener('input', function() {
    const volumeValue = volumeSlider.value;
    const volumeIcon = document.querySelector('#volume-controls img');
    const audio = document.querySelector('audio');
    
    if (volumeValue == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    }
    else if (volumeValue < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    }
    else if (volumeValue < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    }
    else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
    
    audio.volume = volumeValue / 100;
  });
  
  const jsConfetti = new JSConfetti();

  const playSound = document.querySelector('button');
  playSound.addEventListener('click', function(){
    const selectedHorn = hornSelect.value;
    const audio = document.querySelector('audio');
    audio.play();
    if (selectedHorn == 'party-horn'){
      jsConfetti.addConfetti();
    }
  });
}