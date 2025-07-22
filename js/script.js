
function nextStep(stepNum) {
    document.querySelectorAll('.step').forEach(el => el.style.display = 'none');
    document.getElementById('step' + stepNum).style.display = 'block';
}

function playSlap() {
    document.getElementById('slapSound').play();
    document.getElementById('screamSound').play();
}

function showScream() {
    const text = document.getElementById('screamText').value;
    const rageText = document.getElementById('rageText');
    rageText.innerText = text;
    setTimeout(() => {
        rageText.innerText = '';
    }, 180000);
}
