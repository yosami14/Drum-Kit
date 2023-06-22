// Sounds

const audio = new Audio()
const playlist = new Array('./sounds/tom-1.mp3','./sounds/tom-2.mp3','./sounds/tom-3.mp3','./sounds/tom-4.mp3','./sounds/snare.mp3','./sounds/crash.mp3','./sounds/kick-bass.mp3');


const myDrums = document.querySelectorAll('.drum')
for(const eachDrums of myDrums){
  eachDrums.addEventListener('click', function(){


      switch(eachDrums.textContent) {
        case 'w':
          audio.src = (playlist[0]);
          audio.play()
          break;
        case 'a':
          audio.src = (playlist[1]);
          audio.play()
          break;
        case 's':
          audio.src = (playlist[2]);
          audio.play()
          break;
        case 'd':
          audio.src = (playlist[3]);
          audio.play()
          break;
        case 'j':
          audio.src = (playlist[4]);
          audio.play()
          break;
        case 'k':
          audio.src = (playlist[5]);
          audio.play()
          break;
        case 'l':
          audio.src = (playlist[6]);
          audio.play()
          break;
        default:
          alert('error')
      }



  })
}


