
let gender = "";
let avatarMale = "assets/male.png";
let avatarFemale = "assets/female.png";

function selectGender(g) {
    gender = g;
    document.getElementById("genderStep").style.display = "none";
    document.getElementById("nameStep").style.display = "block";
}

function goToImageStep() {
    document.getElementById("nameStep").style.display = "none";
    document.getElementById("imageStep").style.display = "block";
}

function startGame() {
    const upload = document.getElementById("imageUpload").files[0];
    const target = document.getElementById("targetImage");
    if (upload) {
        const reader = new FileReader();
        reader.onload = function(e) {
            target.src = e.target.result;
        };
        reader.readAsDataURL(upload);
    } else {
        target.src = gender === "male" ? avatarMale : avatarFemale;
    }
    document.getElementById("overlay").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
}

function hit() {
    const target = document.getElementById("targetImage");
    const hitSound = document.getElementById("hitSound");
    hitSound.currentTime = 0;
    hitSound.play();
    const randomX = Math.random() * 30 - 15;
    const randomY = Math.random() * 30 - 15;
    target.style.transform = `translate(-50%, -50%) translate(${randomX}px, ${randomY}px)`;
    setTimeout(() => {
        target.style.transform = "translate(-50%, -50%)";
    }, 100);
}

function scream() {
    const text = document.createElement("div");
    text.innerText = document.getElementById("targetName").value || "AAAAAHHHH!";
    text.style.position = "absolute";
    text.style.left = Math.random() * window.innerWidth + "px";
    text.style.top = Math.random() * window.innerHeight + "px";
    text.style.color = "red";
    text.style.fontSize = "2em";
    text.style.fontWeight = "bold";
    document.body.appendChild(text);
    const screamSound = document.getElementById("screamSound");
    screamSound.currentTime = 0;
    screamSound.play();
    setTimeout(() => document.body.removeChild(text), 3000);
}
