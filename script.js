
let gender = "";
let selectedImage = "";
const genderScreen = document.getElementById('gender-screen');
const nameScreen = document.getElementById('name-screen');
const imageScreen = document.getElementById('image-screen');
const rageRoom = document.getElementById('rage-room');
const target = document.getElementById('target');
const upload = document.getElementById('upload');
const screamInput = document.getElementById('scream-input');
const soundPlayer = document.getElementById('sound-player');

const sounds = ['sounds/slap.mp3', 'sounds/knife.mp3', 'sounds/punch.mp3'];

function selectGender(selected) {
  gender = selected;
  genderScreen.classList.remove('active');
  nameScreen.classList.add('active');
}

function goToImageUpload() {
  nameScreen.classList.remove('active');
  imageScreen.classList.add('active');
}

function selectAvatar(type) {
  selectedImage = type === 'male' ? 'images/avatar_male.jpg' : 'images/avatar_female.png';
}

function goToRageRoom() {
  const file = upload.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      selectedImage = e.target.result;
      showRageRoom();
    };
    reader.readAsDataURL(file);
  } else if (selectedImage) {
    showRageRoom();
  }
}

function showRageRoom() {
  imageScreen.classList.remove('active');
  rageRoom.classList.add('active');
  target.src = selectedImage;
  document.getElementById('target-title').textContent = document.getElementById('name-input').value;
  target.addEventListener('click', hitTarget);
  screamInput.addEventListener('keydown', function(e) {
    if (e.key === "Enter") {
      const scream = document.createElement('div');
      scream.classList.add('scream');
      scream.textContent = screamInput.value;
      scream.style.left = Math.random() * 80 + "%";
      scream.style.top = Math.random() * 80 + "%";
      document.body.appendChild(scream);
      screamInput.value = "";
    }
  });
}

function hitTarget() {
  target.classList.add('shake');
  const sound = sounds[Math.floor(Math.random() * sounds.length)];
  soundPlayer.src = sound;
  soundPlayer.play();
  setTimeout(() => {
    target.classList.remove('shake');
  }, 300);
}
