// Load saved preference on page load
window.onload = function () {
  const savedColor = localStorage.getItem('bgColor');
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    document.getElementById('colorSelect').value = savedColor;
  }
};

// Save user preference to localStorage
document.getElementById('saveBtn').addEventListener('click', function () {
  const selectedColor = document.getElementById('colorSelect').value;
  localStorage.setItem('bgColor', selectedColor);
  document.body.style.backgroundColor = selectedColor;
});

// Trigger animation on click
document.getElementById('animateBtn').addEventListener('click', function () {
  const box = document.getElementById('box');
  box.classList.remove('animate'); // Reset animation
  void box.offsetWidth; // Trigger reflow
  box.classList.add('animate');
});
