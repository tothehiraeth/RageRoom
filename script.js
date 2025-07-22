
let selectedGender = 'male';
let uploadedImage = null;

function selectGender(gender) {
    selectedGender = gender;
    document.getElementById('setup-screen').style.display = 'none';
    document.getElementById('name-screen').style.display = 'block';
}

function submitName() {
    const name = document.getElementById('nameInput').value.trim();
    if (name !== '') {
        document.getElementById('name-screen').style.display = 'none';
        document.getElementById('avatar-screen').style.display = 'block';
        document.getElementById('target-name').textContent = name;
    }
}

function useAvatar() {
    const img = document.getElementById('target-image');
    img.src = selectedGender === 'male' ? 'assets/avatar-male.png' : 'assets/avatar-female.png';
    showGameScreen();
}

document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.getElementById('target-image');
            img.src = e.target.result;
            showGameScreen();
        };
        reader.readAsDataURL(file);
    }
});

function showGameScreen() {
    document.getElementById('avatar-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
}

function hitTarget() {
    const img = document.getElementById('target-image');
    const sound = document.getElementById('hit-sound');
    sound.currentTime = 0;
    sound.play();

    img.classList.add('shake');
    setTimeout(() => img.classList.remove('shake'), 300);
}

function checkScream(event) {
    if (event.key === 'Enter') {
        const text = document.getElementById('screamText').value.trim();
        if (text !== '') {
            const screamOutput = document.getElementById('scream-output');
            screamOutput.textContent = text;
            screamOutput.style.display = 'block';
            setTimeout(() => {
                screamOutput.style.display = 'none';
            }, 3000);
            document.getElementById('screamText').value = '';
        }
    }
}
