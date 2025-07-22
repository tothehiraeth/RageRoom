
let gender = "";
let userName = "";
let userImage = "";
let defaultAvatars = {
  male: "assets/male.png",
  female: "assets/female.png"
};

function selectGender(g) {
  gender = g;
  document.getElementById('screen1').style.display = 'none';
  document.getElementById('screen2').style.display = 'block';
}

function goToPhoto() {
  userName = document.getElementById('nameInput').value;
  document.getElementById('screen2').style.display = 'none';
  document.getElementById('screen3').style.display = 'block';
}

function startRage() {
  const input = document.getElementById('imageUpload');
  const image = document.getElementById('targetImage');
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      userImage = e.target.result;
      image.src = userImage;
    }
    reader.readAsDataURL(input.files[0]);
  } else {
    image.src = defaultAvatars[gender];
  }
  document.getElementById('targetName').innerText = userName;
  document.getElementById('screen3').style.display = 'none';
  document.getElementById('rageRoom').style.display = 'block';
}

document.addEventListener('click', () => {
  const image = document.getElementById('targetImage');
  image.classList.add('bounce');
  setTimeout(() => {
    image.classList.remove('bounce');
  }, 300);

  const audio = new Audio('sounds/punch.mp3');
  audio.play();
});

document.getElementById('screamInput').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const val = e.target.value.trim();
    if (val) {
      const scream = document.createElement('div');
      scream.className = 'scream';
      scream.innerText = val;
      document.getElementById('screamsContainer').appendChild(scream);
      setTimeout(() => {
        scream.remove();
      }, 180000); // 3 minutes
      e.target.value = '';
    }
  }
});
