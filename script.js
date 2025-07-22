const avatar = document.getElementById('avatar');
const effectsContainer = document.getElementById('effects-container');
const rageWords = ["DISHUM!", "AAAH!", "SLAP!", "CRACK!", "FREAK!", "DIE!"];
let hitCount = 0;

function playSound(name) {
  const audio = new Audio(`sounds/${name}`);
  audio.play();
}

function showRageWord() {
  const word = document.createElement('div');
  word.classList.add('rage-word');
  word.innerText = rageWords[Math.floor(Math.random() * rageWords.length)];
  word.style.top = `${Math.random() * 80 + 10}%`;
  word.style.left = `${Math.random() * 80 + 10}%`;
  effectsContainer.appendChild(word);
}

function addEffect(type) {
  if (type === 'blood') {
    const splatter = document.createElement('img');
    splatter.src = 'effects/blood-splatter.png';
    splatter.style.position = 'absolute';
    splatter.style.top = '50%';
    splatter.style.left = '50%';
    splatter.style.transform = 'translate(-50%, -50%) scale(1.5)';
    effectsContainer.appendChild(splatter);
  } else if (type === 'bruise' && hitCount >= 5) {
    const bruise = document.createElement('img');
    bruise.src = 'effects/slap-mark.png';
    bruise.style.position = 'absolute';
    bruise.style.top = '55%';
    bruise.style.left = '50%';
    bruise.style.transform = 'translate(-50%, -50%)';
    effectsContainer.appendChild(bruise);
  }
}

avatar.addEventListener('click', () => {
  hitCount++;
  avatar.classList.add('shake');
  setTimeout(() => avatar.classList.remove('shake'), 300);

  const sounds = ['punch.mp3', 'slap.mp3', 'scream.mp3', 'blood-drip.mp3'];
  playSound(sounds[Math.floor(Math.random() * sounds.length)]);
  showRageWord();
  addEffect('blood');
  if (hitCount >= 5) addEffect('bruise');
});
