// 💌 Envelope + Typewriter
const envelope = document.getElementById("envelope");
const typewriter = document.getElementById("typewriter");
const introText =
"Hey Muntaha 💖\n\nI made this little surprise website just for you.\nScroll and enjoy every part ✨";

let i = 0;
envelope.onclick = () => {
  envelope.classList.add("open");
  typeWriter();
};

function typeWriter(){
  if(i < introText.length){
    typewriter.innerHTML += introText.charAt(i);
    i++;
    setTimeout(typeWriter,50);
  }
}

// 🎵 Music autoplay after first interaction
const music = document.getElementById("bgMusic");
document.getElementById("musicBtn").onclick = toggleMusic;

function toggleMusic(){
  if(music.paused) music.play();
  else music.pause();
}

// Auto start when envelope opens
envelope.onclick = () => {
  envelope.classList.add("open");
  typeWriter();
  music.play().catch(()=>{}); 
};


// 💗 Timeline click reveal
document.querySelectorAll(".event").forEach(ev=>{
  ev.onclick = () => {
    document.getElementById("eventMsg").innerText = ev.getAttribute("data-msg");
  };
});

// ✨ Reasons Generator
const reasons = [
  "Your smile brightens everything 🌸",
  "Talking to you feels easy 💬",
  "You make moments special ✨",
  "You are one of a kind 💖",
  "You are simply Muntaha 💗"
];
document.getElementById("reasonBtn").onclick = ()=>{
  const r = reasons[Math.floor(Math.random()*reasons.length)];
  document.getElementById("reasonText").innerText = r;
};

// 💖 Final secret reveal
document.getElementById("bigHeart").onclick = ()=>{
  document.getElementById("finalMsg").innerText =
   "Muntaha 💖\nYou are my favorite surprise ✨";
  startFireflies();
};

// 💕 Floating Hearts Background
const bgCanvas = document.getElementById("bgHearts");
const bgCtx = bgCanvas.getContext("2d");
bgCanvas.width = innerWidth;
bgCanvas.height = innerHeight;
let bgHearts = [];

function addBgHeart(){
  bgHearts.push({
    x:Math.random()*bgCanvas.width,
    y:bgCanvas.height+20,
    size:Math.random()*15+5,
    speed:Math.random()*0.5+0.3
  });
}
function drawBgHearts(){
  bgCtx.clearRect(0,0,bgCanvas.width,bgCanvas.height);
  bgHearts.forEach((h,i)=>{
    bgCtx.font=h.size+"px Arial";
    bgCtx.fillText("💖",h.x,h.y);
    h.y-=h.speed;
    if(h.y<-20) bgHearts.splice(i,1);
  });
}
function animateBg(){
  if(Math.random()<0.3) addBgHeart();
  drawBgHearts();
  requestAnimationFrame(animateBg);
}
animateBg();

// 🌙 Fireflies Effect
function startFireflies(){
  const fCanvas = document.getElementById("fireflies");
  const fCtx = fCanvas.getContext("2d");
  fCanvas.width = innerWidth;
  fCanvas.height = innerHeight;
  let dots = [];

  function addDot(){
    dots.push({
      x:Math.random()*fCanvas.width,
      y:Math.random()*fCanvas.height,
      r:Math.random()*2+1,
      dx:(Math.random()-0.5)*0.5,
      dy:(Math.random()-0.5)*0.5
    });
  }
  for(let i=0;i<80;i++) addDot();

  function drawDots(){
    fCtx.clearRect(0,0,fCanvas.width,fCanvas.height);
    dots.forEach(d=>{
      fCtx.beginPath();
      fCtx.arc(d.x,d.y,d.r,0,Math.PI*2);
      fCtx.fillStyle="rgba(255,255,200,0.8)";
      fCtx.fill();
      d.x+=d.dx; d.y+=d.dy;
    });
    requestAnimationFrame(drawDots);
  }
  drawDots();
}

