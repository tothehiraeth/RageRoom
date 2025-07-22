
const hitSounds = [
  new Audio('sounds/knife.mp3'),
  new Audio('sounds/slap.mp3'),
  new Audio('sounds/punch.mp3'),
  new Audio('sounds/whack.mp3')
];

function playRandomSound() {
  const sound = hitSounds[Math.floor(Math.random() * hitSounds.length)];
  sound.currentTime = 0;
  sound.play();
}

function showScream(text) {
  for (let i = 0; i < 5; i++) {
    const scream = document.createElement('div');
    scream.className = 'scream';
    scream.textContent = text;
    scream.style.left = Math.random() * 90 + '%';
    scream.style.top = Math.random() * 90 + '%';
    document.body.appendChild(scream);
    setTimeout(() => scream.remove(), 3000);
  }
}

document.getElementById('target').addEventListener('click', () => {
  const target = document.getElementById('target');
  target.classList.add('shake');
  setTimeout(() => target.classList.remove('shake'), 300);

  playRandomSound();
  showScream(document.getElementById('scream-input').value || 'AHH!');
});
