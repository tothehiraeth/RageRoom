function startGame() {
  const name = document.getElementById("username").value;
  const gender = document.getElementById("gender").value;
  const upload = document.getElementById("avatarUpload").files[0];

  const avatar = document.getElementById("avatar");
  const userName = document.getElementById("userName");

  if (upload) {
    const reader = new FileReader();
    reader.onload = function (e) {
      avatar.src = e.target.result;
    };
    reader.readAsDataURL(upload);
  } else {
    avatar.src = gender === "female" ? "assets/female-avatar.png" : "assets/male-avatar.png";
  }

  userName.textContent = name;
  document.querySelector(".input-section").style.display = "none";
  document.getElementById("avatarSection").style.display = "block";
}
// Sound effects
const sounds = {
  slap: new Audio('sounds/slap.mp3'),
  punch: new Audio('sounds/punch.mp3'),
  punch2: new Audio('sounds/punch2.mp3'),
  knife: new Audio('sounds/knife.mp3'),
  scream: new Audio('sounds/scream.mp3'),
  bloodDrip: new Audio('sounds/blood-drip.mp3')
};

sounds.bloodDrip.loop = true;
sounds.bloodDrip.volume = 0.5;

const avatarEl = document.getElementById("avatar");
const blood = document.getElementById("blood");
const bruise = document.getElementById("bruise");
const scream = document.getElementById("scream");
const slapSound = document.getElementById("slapSound");
const punchSound = document.getElementById("punchSound");

avatarEl.addEventListener("mouseenter", () => {
  showHitEffect("dishummmm!!!");
});

function showHitEffect(text) {
  // Animation
  avatarEl.style.transform = "translateX(-5px)";
  setTimeout(() => {
    avatarEl.style.transform = "translateX(5px)";
  }, 50);

  setTimeout(() => {
    avatarEl.style.transform = "translateX(0)";
  }, 100);

  // Audio
  slapSound.play();
  punchSound.play();

  // Visuals
  blood.style.display = "block";
  bruise.style.display = "block";

  // Text
  scream.innerText = text;
  scream.style.display = "block";

  setTimeout(() => {
    scream.style.display = "none";
    blood.style.display = "none";
    bruise.style.display = "none";
  }, 180000); // 3 minutes
}
