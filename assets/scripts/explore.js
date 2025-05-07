// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const synth = window.speechSynthesis;

  const voiceSelect = document.querySelector('#voice-select');
  const textInput = document.querySelector('#text-to-speak');
  const talkButton = document.querySelector('#explore button');
  const faceImage = document.querySelector('#explore img');
  let voices = [];

  function populateVoiceList() {

    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  talkButton.addEventListener('click', function() {
    const text = textInput.value;
    const choice = voiceSelect.value;

    if (!text || choice === 'select') return;

    const utterThis = new SpeechSynthesisUtterance(text);
    utterThis.voice = voices[Number(choice)];

    utterThis.addEventListener('start', function() {
      faceImage.src = 'assets/images/smiling-open.png';
    });

    utterThis.addEventListener('end', function() {
      faceImage.src = 'assets/images/smiling.png';
    });

    synth.speak(utterThis);

  });

}