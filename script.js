
const screens = document.querySelectorAll('.screen');
let currentScreen = 0;
const target = document.getElementById('target');
const targetContainer = document.getElementById('target-container');

// Sound effects
const sounds = [
  new Audio('sounds/knife.mp3'),
  new Audio('sounds/slap.mp3'),
  new Audio('sounds/punch.mp3'),
  new Audio('sounds/punch2.mp3')
];

const screamSound = new Audio('sounds/scream.mp3');

function showScreen(index) {
  screens.forEach((screen, i) => {
    screen.classList.toggle('active', i === index);
  });
}

function playRandomSound() {
  const sound = sounds[Math.floor(Math.random() * sounds.length)];
  sound.currentTime = 0;
  sound.play();
}

function showScreamText() {
  const scream = document.createElement('div');
  scream.classList.add('scream');
  scream.innerText = 'AAAAAH!';
  scream.style.left = Math.random() * 100 + '%';
  scream.style.top = Math.random() * 100 + '%';
  targetContainer.appendChild(scream);
  setTimeout(() => scream.remove(), 3000);
}

target.addEventListener('click', () => {
  target.classList.add('shake');
  playRandomSound();
  screamSound.currentTime = 0;
  screamSound.play();
  showScreamText();
  setTimeout(() => {
    target.classList.remove('shake');
  }, 300);
});

document.querySelectorAll('button[data-next]').forEach(button => {
  button.addEventListener('click', () => {
    currentScreen++;
    showScreen(currentScreen);
  });
});

showScreen(currentScreen);
