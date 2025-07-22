
let gender = "male";
let avatarImg = {
  male: "assets/avatar-male.png",
  female: "assets/avatar-female.png"
};
let uploadedSrc = "";

function selectGender(g) {
  gender = g;
  document.getElementById("screen-gender").classList.add("hidden");
  document.getElementById("screen-name").classList.remove("hidden");
}

function goToPhoto() {
  document.getElementById("screen-name").classList.add("hidden");
  document.getElementById("screen-photo").classList.remove("hidden");
}

function useAvatar() {
  uploadedSrc = avatarImg[gender];
  document.getElementById("photoInput").value = "";
}

function startRageRoom() {
  const file = document.getElementById("photoInput").files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    uploadedSrc = uploadedSrc || e.target.result;
    showRageRoom();
  };
  if (file) {
    reader.readAsDataURL(file);
  } else {
    showRageRoom();
  }
}

function showRageRoom() {
  document.getElementById("screen-photo").classList.add("hidden");
  document.getElementById("rage-room").classList.remove("hidden");

  const name = document.getElementById("userName").value;
  document.getElementById("rageName").innerText = name;
  const img = document.getElementById("rageAvatar");
  img.src = uploadedSrc;
  img.onclick = () => {
    playHitEffects();
    img.classList.add("shake");
    setTimeout(() => img.classList.remove("shake"), 300);
  };

  document.getElementById("screamInput").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      const val = this.value.trim();
      if (val) {
        createScream(val);
        this.value = "";
      }
    }
  });
}

function createScream(text) {
  const div = document.createElement("div");
  div.className = "scream-text";
  div.innerText = text;
  div.style.top = Math.random() * 80 + "vh";
  div.style.left = Math.random() * 80 + "vw";
  document.getElementById("screamContainer").appendChild(div);
}

function playHitEffects() {
  const sounds = ["punchSound", "slapSound", "screamSound", "knifeSound"];
  const id = sounds[Math.floor(Math.random() * sounds.length)];
  const audio = document.getElementById(id);
  audio.currentTime = 0;
  audio.play();
}
