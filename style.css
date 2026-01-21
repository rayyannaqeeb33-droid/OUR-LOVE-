// Typewriter Intro
const text = 
"Hey Muntaha 💖\n\nI made this little website just for you.\nEvery scroll has a small surprise.\n\nThank you for being special ✨";

let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
typeWriter();

// Reasons Generator
const reasons = [
  "Your smile brightens my day 🌸",
  "You are kind and genuine 💕",
  "Talking to you feels easy ✨",
  "You make moments special 💖",
  "You are unforgettable 🌈",
  "You are simply Muntaha 💗"
];

document.getElementById("reasonBtn").onclick = () => {
  const r = reasons[Math.floor(Math.random() * reasons.length)];
  document.getElementById("reasonText").innerText = r;
};

// Music Button
const music = document.getElementById("bgMusic");
document.getElementById("musicBtn").onclick = () => {
  if (music.paused) music.play();
  else music.pause();
};

// Floating Hearts Animation
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function createHeart() {
  hearts.push({
    x: Math.random() * canvas.width,
    y: canvas.height + 20,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 1 + 0.5
  });
}

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((h, index) => {
    ctx.font = h.size + "px Arial";
    ctx.fillText("💖", h.x, h.y);
    h.y -= h.speed;
    if (h.y < -20) hearts.splice(index, 1);
  });
}

function animate() {
  if (Math.random() < 0.3) createHeart();
  drawHearts();
  requestAnimationFrame(animate);
}
animate();
