// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  // event for selecting the horn
  const select_horn = document.getElementById('horn-select');
  select_horn.addEventListener('change', function() {
    const image_horn = document.querySelector('img');  // get image element from html
    const sound_horn = document.querySelector('audio');  // get audio element from html

    const selected_horn = select_horn.value;  // get the selected horns value
  
    // sets image and sound based on the selected horn
    if (selected_horn == 'air-horn') {
      image_horn.src = 'assets/images/air-horn.svg';
      sound_horn.src = 'assets/audio/air-horn.mp3';
    }
    else if (selected_horn == 'car-horn') {
      image_horn.src = 'assets/images/car-horn.svg';
      sound_horn.src = 'assets/audio/car-horn.mp3';
    }
    else if (selected_horn == 'party-horn') {
      image_horn.src = 'assets/images/party-horn.svg';
      sound_horn.src = 'assets/audio/party-horn.mp3';

      // shoots confetti
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });

  // event for changing volume slider
  const change_volume = document.getElementById('volume');
  change_volume.addEventListener('change', function() {
    const volume_image = document.querySelector('#volume-controls img');  // get image element of volume from html
    const sound_horn = document.querySelector('audio');  // get audio element from html

    const volume_level = change_volume.value;  // get the value of volume

    // changes the volume image based on volume level
    if (volume_level == 0) {
      volume_image.src = 'assets/icons/volume-level-0.svg';
    }
    else if (volume_level < 33) {
      volume_image.src = 'assets/icons/volume-level-1.svg';
    }
    else if (volume_level < 67) {
      volume_image.src = 'assets/icons/volume-level-2.svg';
    }
    else {
      volume_image.src = 'assets/icons/volume-level-3.svg';
    }

    sound_horn.volume = volume_level / 100;  // set volume of the audio
  });

  // event for play sound button
  const play_sound = document.querySelector('button');
  play_sound.addEventListener('click', function() {
    const sound_horn = document.querySelector('audio');
    sound_horn.play();
  });
}

