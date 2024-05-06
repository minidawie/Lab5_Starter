// explore.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  // adding voice list
  var voices;

  function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") {
      return;
    }
  
    voices = speechSynthesis.getVoices();
  
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

  // event to play text
  const play_sound = document.querySelector('button');
  const image_face = document.querySelector('img');

  play_sound.addEventListener('click', function() {
    // fetching text and voice data
    const textEntry = document.getElementById("text-to-speak").value;
    const selectedVoice = document.getElementById("voice-select").selectedOptions[0].getAttribute("data-name");
    const utterThis = new SpeechSynthesisUtterance(textEntry);;
    
    // setting voice
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedVoice) {
        utterThis.voice = voices[i];
        break;
      }
    }

    // open mouth
    image_face.src = 'assets/images/smiling_open.png';

    // speaking
    speechSynthesis.speak(utterThis);

    // close mouth
    image_face.src = 'assets/images/smiling.png';
  });
  
  
}
