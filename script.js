
let gender = "";
let avatar = "";
let charName = "";

function selectGender(g) {
  gender = g;
  document.querySelector('.gender-screen').classList.add('hidden');
  document.querySelector('.name-screen').classList.remove('hidden');
}

function goToAvatar() {
  charName = document.getElementById('charName').value;
  document.querySelector('.name-screen').classList.add('hidden');
  document.querySelector('.avatar-screen').classList.remove('hidden');
}

function chooseAvatar(path) {
  avatar = path;
  document.getElementById('avatarImage').src = path;
}

function useUploadedImage(event) {
  const reader = new FileReader();
  reader.onload = function () {
    avatar = reader.result;
    document.getElementById('avatarImage').src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}

function goToRageRoom() {
  if (!avatar) {
    alert("Please select or upload an avatar.");
    return;
  }
  document.querySelector('.avatar-screen').classList.add('hidden');
  document.querySelector('.rage-room').classList.remove('hidden');
  document.getElementById('displayName').innerText = charName;
}

function handleScream(event) {
  if (event.key === "Enter") {
    const text = document.getElementById('screamInput').value;
    const screamBox = document.getElementById('screamText');
    screamBox.innerText = text.toUpperCase();
    screamBox.style.fontSize = `${30 + Math.random() * 50}px`;
    screamBox.style.transform = `rotate(${(Math.random() * 20) - 10}deg)`;
    navigator.vibrate?.(200);
    setTimeout(() => screamBox.innerText = "", 1000);
    document.getElementById('screamInput').value = "";
  }
}
