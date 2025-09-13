let isFlipped = false;

  function calculateArea(width, height) {
    return width * height;
  }

  function showLocalScope() {
    let message = "I’m local to this function!";
    console.log(message);
  }

  // Reusable function to toggle animation
  function toggleSpin() {
    let box = document.getElementById("box");
    box.classList.toggle("pulsing");
  }
    if (spinEnabled) {
      box.classList.add("spinning");
    } else {
      box.classList.remove("spinning");
    }
document.getElementById("animateBtn").addEventListener("click", togglePulse);

console.log("Box area:", calculateArea(100, 100)); 
showLocalScope(); 

function flipCard() {
  const card = document.querySelector('.card');
  card.classList.toggle('flipped');
  isFlipped = !isFlipped;

  if (isFlipped) {
    setTimeout(openModal, 800); 
  }
}

function openModal() {
  document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}