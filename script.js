
function punch() {
  document.getElementById("character").style.transform = "translateX(-20px)";
  document.getElementById("punchSound").play();
  showBlood();
  setTimeout(() => {
    document.getElementById("character").style.transform = "translateX(0)";
  }, 100);
}

function slap() {
  document.getElementById("character").style.transform = "translateX(20px)";
  document.getElementById("slapSound").play();
  showBlood();
  setTimeout(() => {
    document.getElementById("character").style.transform = "translateX(0)";
  }, 100);
}

function scream() {
  document.getElementById("screamSound").play();
}

function showBlood() {
  const splatter = document.getElementById("blood-splatter");
  splatter.style.display = "block";
  setTimeout(() => {
    splatter.style.display = "none";
  }, 300);
}
