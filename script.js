
let selectedGender = '';
let imageUploaded = false;

function selectGender(gender) {
  selectedGender = gender;
  document.getElementById('screen1').classList.add('hidden');
  document.getElementById('screen2').classList.remove('hidden');
}

function goToImageUpload() {
  document.getElementById('screen2').classList.add('hidden');
  document.getElementById('screen3').classList.remove('hidden');
}

function previewImage(event) {
  const reader = new FileReader();
  reader.onload = function() {
    const output = document.createElement('img');
    output.src = reader.result;
    output.id = 'userImage';
    document.getElementById('imagePreview').innerHTML = '';
    document.getElementById('imagePreview').appendChild(output);
    document.getElementById('avatar').src = reader.result;
    imageUploaded = true;
  };
  reader.readAsDataURL(event.target.files[0]);
}

function goToRageRoom() {
  const username = document.getElementById('username').value;
  document.getElementById('displayName').textContent = username;
  document.getElementById('screen3').classList.add('hidden');
  document.getElementById('rageRoom').classList.remove('hidden');

  if (!imageUploaded) {
    document.getElementById('avatar').src = selectedGender === 'male'
      ? 'assets/avatars/avatar-male.png'
      : 'assets/avatars/avatar-female.png';
  }
}

function handleHit(event) {
  playRandomSound();
  const mark = document.createElement('img');
  mark.src = 'assets/avatars/avatar-male.png';
  mark.style.position = 'absolute';
  mark.style.left = event.pageX + 'px';
  mark.style.top = event.pageY + 'px';
  mark.style.width = '80px';
  mark.style.zIndex = '3';
  setTimeout(() => mark.remove(), 2000);
}

function playRandomSound() {
  const sounds = ['punch.mp3', 'slap.mp3', 'scream.mp3', 'punch2.mp3', 'knife.mp3'];
  const audio = new Audio('assets/sounds/' + sounds[Math.floor(Math.random() * sounds.length)]);
  audio.play();
}

function submitScream(event) {
  if (event.key === 'Enter') {
    const text = event.target.value.trim();
    if (text !== '') {
      const div = document.createElement('div');
      div.textContent = text;
      div.style.left = Math.random() * 80 + '%';
      div.style.top = Math.random() * 80 + '%';
      document.getElementById('screams').appendChild(div);
      setTimeout(() => div.remove(), 180000); // 3 mins
      event.target.value = '';
    }
  }
}
