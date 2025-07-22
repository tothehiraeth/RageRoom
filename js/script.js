
let currentStep = 0;
function nextStep(step) {
  document.querySelector(`#step${currentStep+1}`).classList.remove("active");
  document.querySelector(`#step${step+1}`).classList.add("active");
  currentStep = step;
  if (step === 2) {
    const gender = document.querySelector('input[name="gender"]:checked').value;
    document.getElementById("avatarDisplay").src = `assets/${gender}_avatar.png`;
  }
}

function startRage() {
  document.querySelector(`#step${currentStep+1}`).classList.remove("active");
  document.getElementById("rageRoom").classList.add("active");
  currentStep++;
}

function submitScream() {
  const scream = document.getElementById("screamInput").value;
  const screamText = document.getElementById("screamText");
  screamText.textContent = scream;
  screamText.style.display = "block";
  setTimeout(() => { screamText.textContent = ""; }, 180000);
}
