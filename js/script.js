
let gender = "";
let selectedAvatar = "";
let screamTimeout;

function goToNext(sectionId) {
    document.querySelectorAll('#container > div').forEach(div => div.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
}

function previewPhoto(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const output = document.getElementById('photoPreview');
        output.src = reader.result;
        output.style.display = 'block';
    };
    reader.readAsDataURL(event.target.files[0]);
}

function startRage() {
    gender = document.querySelector('input[name="gender"]:checked')?.value;
    if (gender === 'male') {
        selectedAvatar = 'images/male_avatar.png';
    } else {
        selectedAvatar = 'images/female_avatar.png';
    }
    document.getElementById('rage-mode').classList.remove('hidden');
    document.querySelectorAll('#container > div').forEach(div => {
        if (div.id !== 'rage-mode') div.classList.add('hidden');
    });
    const targetImg = document.getElementById('targetImage');
    targetImg.src = selectedAvatar;
    targetImg.style.left = "50%";
    targetImg.style.top = "50%";
}

function hitTarget(event) {
    const target = document.getElementById('targetImage');
    const scream = prompt("Type your scream:");
    if (scream) {
        const screamDisplay = document.getElementById('screamDisplay');
        screamDisplay.textContent = scream;
        clearTimeout(screamTimeout);
        screamTimeout = setTimeout(() => {
            screamDisplay.textContent = "";
        }, 180000);
    }

    const punchSound = document.getElementById('punchSound');
    punchSound.currentTime = 0;
    punchSound.play();
}
