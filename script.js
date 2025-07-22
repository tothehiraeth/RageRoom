function nextScreen(current, next) {
  document.getElementById(current).classList.remove("active");
  document.getElementById(next).classList.add("active");
}

function selectAvatar(gender) {
  const file = document.getElementById("avatarUpload").files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById("userAvatar").src = e.target.result;
  };
  if (file) {
    reader.readAsDataURL(file);
  } else {
    document.getElementById("userAvatar").src = `assets/${gender}.png`;
  }

  document.getElementById("overlay").style.display = "none";
  document.getElementById("rageRoom").style.display = "block";
}

function hitAvatar(event) {
  const sounds = ['slap', 'punch', 'scream'];
  const audio = new Audio(`assets/sounds/${sounds[Math.floor(Math.random()*sounds.length)]}.mp3`);
  audio.play();
  const avatar = document.getElementById("userAvatar");
  avatar.style.transform = "translate(-50%, -50%) scale(1.05)";
  setTimeout(() => {
    avatar.style.transform = "translate(-50%, -50%)";
  }, 100);
}

function submitScream(e) {
  if (e.key === 'Enter') {
    const text = document.getElementById("screamInput").value;
    const div = document.getElementById("screamText");
    div.textContent = text;
    div.style.display = "block";
    setTimeout(() => {
      div.style.display = "none";
    }, 180000);
  }
}
