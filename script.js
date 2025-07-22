
let selectedGender = '';
let uploadedImage = null;

function selectGender(gender) {
  selectedGender = gender;
  document.getElementById("gender-screen").classList.add("hidden");
  document.getElementById("name-screen").classList.remove("hidden");
}

function goToNext(screenId) {
  document.querySelectorAll(".step").forEach(div => div.classList.add("hidden"));
  document.getElementById(screenId).classList.remove("hidden");

  if (screenId === 'avatar-screen') {
    const avatarImg = document.getElementById("avatar-preview");
    avatarImg.src = selectedGender === 'male' ? 'boy.png' : 'girl.png';
  }

  if (screenId === 'action-screen') {
    const name = document.getElementById("name").value;
    document.getElementById("target-name").innerText = name || 'Target';
    const target = document.getElementById("target");
    target.src = uploadedImage || document.getElementById("avatar-preview").src;
  }
}

function handlePhoto(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    uploadedImage = e.target.result;
    document.getElementById("avatar-preview").src = uploadedImage;
  };
  if (file) {
    reader.readAsDataURL(file);
  }
}

function handleScream(event) {
  if (event.key === "Enter") {
    const text = event.target.value.trim();
    if (text !== "") {
      const div = document.createElement("div");
      div.className = "scream-text";
      div.innerText = text;
      document.getElementById("screams").appendChild(div);
      setTimeout(() => div.remove(), 3000);
      event.target.value = "";
      document.getElementById("hit-sound").play();
      const target = document.getElementById("target");
      target.classList.remove("bounce");
      void target.offsetWidth; // reset animation
      target.classList.add("bounce");
    }
  }
}

document.getElementById("target").addEventListener("click", () => {
  document.getElementById("hit-sound").play();
  const target = document.getElementById("target");
  target.classList.remove("bounce");
  void target.offsetWidth; // reset animation
  target.classList.add("bounce");
});
