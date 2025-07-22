
let selectedGender = '';
let uploadedImage = null;
let avatarImages = {
    male: 'assets/male_avatar.jpg',
    female: 'assets/female_avatar.png'
};
let soundFiles = [
    'assets/knife.mp3.mp3',
    'assets/punch.mp3.mp3',
    'assets/punch2.mp3.mp3',
    'assets/scream.mp3.mp3',
    'assets/slap.mp3.mp3'
];
let currentTarget = null;

function selectGender(gender) {
    selectedGender = gender;
    document.getElementById('genderScreen').style.display = 'none';
    document.getElementById('nameScreen').style.display = 'block';
}

function goToAvatarScreen() {
    const name = document.getElementById('nameInput').value;
    if (!name.trim()) return;
    document.getElementById('nameScreen').style.display = 'none';
    document.getElementById('avatarScreen').style.display = 'block';
}

function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        uploadedImage = URL.createObjectURL(file);
        document.getElementById('avatarScreen').style.display = 'none';
        showTargetScreen();
    }
}

function chooseAvatar() {
    document.getElementById('avatarScreen').style.display = 'none';
    showTargetScreen();
}

function showTargetScreen() {
    document.getElementById('targetScreen').style.display = 'block';
    const target = document.getElementById('target');
    if (uploadedImage) {
        target.src = uploadedImage;
    } else {
        target.src = avatarImages[selectedGender];
    }
}

function playRandomSound() {
    const audio = new Audio(soundFiles[Math.floor(Math.random() * soundFiles.length)]);
    audio.play();
}

function shakeTarget() {
    const target = document.getElementById('target');
    target.classList.add('shake');
    setTimeout(() => {
        target.classList.remove('shake');
    }, 500);
}

function hitTarget(event) {
    playRandomSound();
    shakeTarget();
}

function scream(event) {
    if (event.key === 'Enter') {
        const text = document.getElementById('screamInput').value.trim();
        if (!text) return;

        const screamDiv = document.createElement('div');
        screamDiv.classList.add('screamText');
        screamDiv.textContent = text;

        screamDiv.style.position = 'absolute';
        screamDiv.style.top = `${Math.random() * 80 + 10}%`;
        screamDiv.style.left = `${Math.random() * 80 + 10}%`;
        document.body.appendChild(screamDiv);

        setTimeout(() => {
            screamDiv.remove();
        }, 180000);

        document.getElementById('screamInput').value = '';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('target').addEventListener('click', hitTarget);
    document.getElementById('screamInput').addEventListener('keydown', scream);
});
