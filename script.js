
let avatarSrc = 'male.png'; // default

function goToName() {
  const gender = document.querySelector('input[name="gender"]:checked').value;
  avatarSrc = gender === "male" ? "male.png" : "female.png";
  document.getElementById("screen-gender").classList.add("hidden");
  document.getElementById("screen-name").classList.remove("hidden");
}

function showFileName(input) {
  const fileDisplay = document.getElementById("file-name-display");
  fileDisplay.textContent = input.files[0]?.name || "";
}

function goToAvatar() {
  document.getElementById("screen-name").classList.add("hidden");
  document.getElementById("screen-avatar").classList.remove("hidden");
}

function enterRageRoom() {
  document.getElementById("screen-avatar").classList.add("hidden");
  document.getElementById("rage-room").classList.remove("hidden");
  document.getElementById("avatar").src = avatarSrc;
  document.getElementById("bruises").style.display = "none";

  const username = document.getElementById("username").value;
  document.getElementById("userLabel").textContent = `Welcome, ${username}`;
}

function triggerHit() {
  const bruise = document.getElementById("bruises");
  bruise.style.display = "block";
  const sounds = ["slap.mp3", "punch.mp3", "punch2.mp3", "knife.mp3", "scream.mp3"];
  const randomSound = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
  randomSound.play();
}

function scream() {
  const text = document.getElementById("rageInput").value;
  const graffiti = document.getElementById("graffiti-texts");
  graffiti.textContent = text;
  setTimeout(() => graffiti.textContent = "", 180000); // 3 minutes
}
