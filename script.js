
let canvas = document.getElementById('cutCanvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.body.addEventListener('mousemove', (e) => {
  if (Math.random() > 0.95) {
    let x = e.clientX + (Math.random() * 20 - 10);
    let y = e.clientY + (Math.random() * 20 - 10);
    let length = Math.random() * 50 + 30;
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.moveTo(x, y);
    ctx.lineTo(x + length, y + Math.random() * 10 - 5);
    ctx.stroke();

    setTimeout(() => {
      ctx.clearRect(x - 5, y - 5, length + 10, 10);
    }, 2000);
  }
});

const screamInput = document.getElementById('screamInput');
const screamContainer = document.getElementById('screamContainer');

screamInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const text = screamInput.value;
    screamInput.value = '';
    const scream = document.createElement('div');
    scream.classList.add('screamText');
    scream.style.left = Math.random() * 80 + '%';
    scream.style.top = Math.random() * 80 + '%';
    scream.innerText = text;
    screamContainer.appendChild(scream);
  }
});

function hitTarget() {
  const photo = document.getElementById('photo');
  photo.classList.add('shake');
  setTimeout(() => photo.classList.remove('shake'), 300);

  const sounds = ['knifeSound', 'punchSound', 'punch2Sound', 'slapSound'];
  const randSound = document.getElementById(sounds[Math.floor(Math.random() * sounds.length)]);
  randSound.play();
  document.getElementById('screamSound').play();
}
