let currentStep = 0;
const steps = document.querySelectorAll('.step');
const nextBtn = document.getElementById('nextBtn');
const genderRadios = document.getElementsByName('gender');

function showStep(index) {
  steps.forEach((step, i) => {
    step.style.display = i === index ? 'block' : 'none';
  });
}

nextBtn.addEventListener('click', () => {
  if (currentStep === 0) {
    const selected = [...genderRadios].find(radio => radio.checked);
    if (!selected) {
      alert("Please select a gender.");
      return;
    }
  }

  currentStep++;
  if (currentStep < steps.length) {
    showStep(currentStep);
  }
});

// Initialize
showStep(currentStep);