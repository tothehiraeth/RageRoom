
let gender = 'male';
let uploadedImage = null;

function selectGender(selected) {
  gender = selected;
  document.getElementById('screen1').classList.add('hidden');
  document.getElementById('screen2').classList.remove('hidden');
}

function nextStep() {
  const fileInput = document.getElementById('imageUpload');
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    uploadedImage = e.target.result;
    showTarget();
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    showTarget();
  }
}

function showTarget() {
  const name = document.getElementById('personName').value;
  const targetName = document.getElementById('targetName');
  const targetImage = document.getElementById('targetImage');

  targetName.textContent = name;

  if (uploadedImage) {
    targetImage.src = uploadedImage;
  } else {
    targetImage.src = gender === 'male' ? 'boy.png' : 'girl.png';
  }

  document.getElementById('screen2').classList.add('hidden');
  document.getElementById('screen3').classList.remove('hidden');
}

document.getElementById('targetImage').addEventListener('click', () => {
  const image = document.getElementById('targetImage');
  const sound = document.getElementById('hitSound');
  image.classList.add('shake');
  sound.currentTime = 0;
  sound.play();
  setTimeout(() => image.classList.remove('shake'), 300);
});

document.getElementById('screamInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const text = e.target.value;
    e.target.value = '';
    scream(text);
  }
});

function scream(text) {
  const screamElement = document.createElement('div');
  screamElement.className = 'scream-text';
  screamElement.textContent = text;
  document.body.appendChild(screamElement);
  setTimeout(() => document.body.removeChild(screamElement), 3000);
}
