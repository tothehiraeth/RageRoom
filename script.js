
let step = 1;

function goToStep(stepNumber) {
  document.getElementById("step" + step).classList.add("hidden");
  step = stepNumber;
  document.getElementById("step" + step).classList.remove("hidden");
}

function previewImage(event) {
  const reader = new FileReader();
  reader.onload = function(){
    const output = document.getElementById("preview");
    output.src = reader.result;
    output.classList.remove("hidden");
    document.getElementById("targetImage").src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}

function showScream() {
  const text = document.getElementById("screamText").value;
  const scream = document.getElementById("screamDisplay");
  scream.textContent = text;
  scream.classList.remove("hidden");
  setTimeout(() => scream.classList.add("hidden"), 180000);
}

function hitTarget(event) {
  const sounds = [
    'assets/sounds/punch.mp3',
    'assets/sounds/punch2.mp3',
    'assets/sounds/slap.mp3',
    'assets/sounds/scream.mp3'
  ];
  const sound = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
  sound.play();

  const bruise = document.getElementById("bruiseOverlay");
  const blood = document.getElementById("bloodOverlay");

  bruise.classList.remove("hidden");
  blood.classList.remove("hidden");

  setTimeout(() => {
    bruise.classList.add("hidden");
    blood.classList.add("hidden");
  }, 1000);
}
