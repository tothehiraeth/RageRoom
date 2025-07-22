
let selectedGender = '';
let selectedAvatar = '';

function selectGender(gender) {
  selectedGender = gender;
  document.querySelector('.setup').classList.add('hidden');
  document.getElementById('nameInput').classList.remove('hidden');
}

function submitName() {
  const name = document.getElementById('userName').value;
  if (name.trim() !== '') {
    document.getElementById('nameInput').classList.add('hidden');
    document.getElementById('avatarChoice').classList.remove('hidden');
    document.getElementById('userNameDisplay').textContent = name;
  }
}

function selectDefaultAvatar(src) {
  selectedAvatar = src;
  document.getElementById('avatar').src = src;
}

function finalizeAvatar() {
  const uploaded = document.getElementById('uploadImage').files[0];
  if (uploaded) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById('avatar').src = e.target.result;
    };
    reader.readAsDataURL(uploaded);
  } else {
    document.getElementById('avatar').src = selectedAvatar;
  }
  document.getElementById('overlay').classList.add('hidden');
  document.getElementById('rageRoom').classList.remove('hidden');
}

function handleScream(e) {
  if (e.key === 'Enter') {
    const text = e.target.value.trim();
    if (text) {
      const scream = document.createElement('div');
      scream.textContent = text.toUpperCase();
      document.getElementById('screamContainer').appendChild(scream);
      e.target.value = '';
      setTimeout(() => scream.remove(), 1000);
    }
  }
}

const avatarImg = document.getElementById('avatar');
if (avatarImg) {
  avatarImg.addEventListener('mouseenter', () => {
    avatarImg.style.transform = 'scale(1.1)';
  });

  avatarImg.addEventListener('mouseleave', () => {
    avatarImg.style.transform = 'scale(1)';
  });
}
