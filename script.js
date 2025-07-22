
const sounds = [
    new Audio('assets/knife.mp3'),
    new Audio('assets/punch.mp3'),
    new Audio('assets/punch2.mp3'),
    new Audio('assets/slap.mp3'),
    new Audio('assets/scream.mp3')
];

document.getElementById('image-container').addEventListener('click', () => {
    const image = document.querySelector('#image-container img');
    if (!image) return;

    image.classList.remove('hit-effect');
    void image.offsetWidth;
    image.classList.add('hit-effect');

    const sound = sounds[Math.floor(Math.random() * sounds.length)];
    sound.currentTime = 0;
    sound.play();
});

document.getElementById('scream-input').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        const text = e.target.value.trim();
        if (text !== '') {
            const scream = document.createElement('div');
            scream.className = 'scream-text';
            scream.textContent = text;
            scream.style.position = 'absolute';
            scream.style.color = 'red';
            scream.style.fontSize = '48px';
            scream.style.fontWeight = 'bold';
            scream.style.left = Math.random() * 80 + '%';
            scream.style.top = Math.random() * 80 + '%';
            document.body.appendChild(scream);
            setTimeout(() => {
                scream.remove();
            }, 180000);
            e.target.value = '';
        }
    }
});
