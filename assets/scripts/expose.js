// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const hornSelect = document.getElementById('horn-select');
  const image = document.querySelector('#expose img');
  const audio = document.querySelector('#expose audio');

  const playButton = document.querySelector('button');
  const volumeSlider = document.querySelector('#volume');
  const volumeImage = document.querySelector('#volume-controls img');

  let hornType = 'select';

  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', function(event) {
    hornType = event.target.value;

    if (hornType === 'select') {
      image.src = 'assets/images/no-image.png';
      image.alt = 'No image selected';
      audio.src = '';
    }
    else {
      image.src = `assets/images/${hornType}.svg`;
      image.alt = event.target.selectedOptions[0].text;
      audio.src = `assets/audio/${hornType}.mp3`;
    }
  });

  volumeSlider.addEventListener('input', function(event) {
    const volume = Number(event.target.value);

    audio.volume = volume / 100;

    let level;
    if (volume === 0)
      level = 0;
    else if (volume < 33)
      level = 1;
    else if (volume < 67)
      level = 2;
    else
      level = 3;

    volumeImage.src = `assets/icons/volume-level-${level}.svg`;
    volumeImage.alt = `Volume level ${level}`;
  });

  playButton.addEventListener('click', function() {
    if(audio.src)
    {
      audio.play();
    }

    if(hornType === 'party-horn')
    {
      jsConfetti.addConfetti();
    }
  });

}