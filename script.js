
let selectedGender = "";
let targetImage = "";

function selectGender(gender) {
  selectedGender = gender;
  document.getElementById('app').classList.remove('active');
  document.getElementById('nameScreen').classList.add('active');
}

function goToImageUpload() {
  document.getElementById('nameScreen').classList.remove('active');
  document.getElementById('imageScreen').classList.add('active');
}

function useAvatar() {
  targetImage = selectedGender === 'male' 
    ? './assets/avatars/male-avatar.png' 
    : './assets/avatars/female-avatar.png';
  document.getElementById('imageUpload').value = null;
}

function goToRageRoom() {
  const upload = document.getElementById('imageUpload');
  const file = upload.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      targetImage = e.target.result;
      startRageRoom();
    };
    reader.readAsDataURL(file);
  } else {
    startRageRoom();
  }
}

function startRageRoom() {
  document.getElementById('imageScreen').classList.remove('active');
  document.getElementById('rageRoom').classList.add('active');
  const target = document.getElementById('target');
  target.src = targetImage;
  target.addEventListener('click', () => {
    target.classList.add('shake');
    playSound();
    setTimeout(() => target.classList.remove('shake'), 300);
  });
}

function playSound() {
  const sounds = ['knife.mp3', 'slap.mp3', 'punch.mp3', 'punch2.mp3', 'scream.mp3'];
  const chosen = sounds[Math.floor(Math.random() * sounds.length)];
  const audio = new Audio('./assets/sounds/' + chosen);
  audio.play();
}

document.getElementById('screamInput').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const text = e.target.value;
    const div = document.createElement('div');
    div.className = 'scream';
    div.textContent = text;
    div.style.top = Math.random() * 80 + '%';
    div.style.left = Math.random() * 80 + '%';
    document.getElementById('screams').appendChild(div);
    e.target.value = '';
  }
});
