
document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('target');
  const screamInput = document.getElementById('screamInput');
  const knifeSound = document.getElementById('knifeSound');
  const slapSound = document.getElementById('slapSound');
  const punchSound = document.getElementById('punchSound');
  const sounds = [knifeSound, slapSound, punchSound];

  function playRandomSound() {
    const sound = sounds[Math.floor(Math.random() * sounds.length)];
    sound.currentTime = 0;
    sound.play();
  }

  function createScream(text) {
    const scream = document.createElement('div');
    scream.className = 'scream';
    scream.textContent = text;
    scream.style.left = Math.random() * 90 + 'vw';
    scream.style.top = Math.random() * 90 + 'vh';
    document.body.appendChild(scream);
    setTimeout(() => scream.remove(), 3000);
  }

  target.addEventListener('click', () => {
    playRandomSound();
    target.classList.add('shake');
    setTimeout(() => target.classList.remove('shake'), 300);
  });

  screamInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && screamInput.value.trim()) {
      createScream(screamInput.value.trim());
      screamInput.value = '';
    }
  });
});
