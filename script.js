// ===============================
// Birthday Website Script
// Part 1
// ===============================

// ---------- Pages ----------

const pages = document.querySelectorAll(".page");

function showPage(id){

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    document
        .getElementById(id)
        .classList.add("active");

}

// ---------- Buttons ----------

const startBtn=document.getElementById("startBtn");
const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");
const wishBtn=document.getElementById("wishBtn");
const nextBtn=document.getElementById("nextBtn");
const celebrateBtn=document.getElementById("celebrateBtn");

// ---------- Music ----------

const music=document.getElementById("music");

function playMusic(){

    if(!music) return;

    music.volume=0.4;

    music.play().catch(()=>{});

}

// ---------- Start ----------

startBtn.addEventListener("click",()=>{

    playMusic();

    showPage("question");

});

// ---------- No Button Escapes ----------

function moveNoButton(){

    const x=Math.random()*250-125;

    const y=Math.random()*180-90;

    noBtn.style.transform=
        `translate(${x}px,${y}px)`;

}

noBtn.addEventListener("mouseover",moveNoButton);

noBtn.addEventListener("click",moveNoButton);

// ---------- Yes Button ----------

yesBtn.addEventListener("click",()=>{

    showPage("cakePage");

});

// ---------- Cake ----------

wishBtn.addEventListener("click",()=>{

    if(window.confetti){

        confetti({

            particleCount:180,

            spread:90,

            origin:{
                y:0.6
            }

        });

    }

    setTimeout(()=>{

        showPage("galleryPage");

    },1200);

});

// ---------- Gallery ----------

nextBtn.addEventListener("click",()=>{

    showPage("letterPage");

});
// ===============================
// Part 2
// Typing Effect + Hearts + Gallery
// ===============================

// ---------- Birthday Letter ----------

const message = `Happy Birthday ❤️

Vinaya ❤️,

On your special day, I just want to remind you how precious you are to me. ✨
Your smile, your love, and your presence make my life more beautiful. ❤️

May this birthday bring you endless happiness, beautiful memories, and success. May all your dreams come true.

Keep smiling, keep shining, and stay blessed forever. 😊✨

Happy Birthday, my love 🎂❤️
I love you more than words can say. ❤️
`;

const typingElement = document.getElementById("typing");

let index = 0;

function typeLetter(){

    if(!typingElement) return;

    if(index < message.length){

        typingElement.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeLetter,40);

    }

}

// Start typing when Letter page is opened

nextBtn.addEventListener("click",()=>{

    typingElement.innerHTML="";

    index=0;

    setTimeout(typeLetter,400);

});

// ---------- Floating Hearts ----------

const heartContainer=document.getElementById("hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="100vh";

    heart.style.fontSize=(20+Math.random()*20)+"px";

    heart.style.pointerEvents="none";

    heart.style.transition="all 6s linear";

    heart.style.zIndex="999";

    heartContainer.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform=`translateY(-120vh) rotate(${360+Math.random()*360}deg)`;

        heart.style.opacity="0";

    },100);

    setTimeout(()=>{

        heart.remove();

    },6000);

}

setInterval(createHeart,600);

// ---------- Gallery Hover ----------

document.querySelectorAll(".gallery img").forEach(img=>{

    img.addEventListener("click",()=>{

        img.classList.toggle("pulse");

    });

});

// ---------- Small Confetti on Image Click ----------

document.querySelectorAll(".gallery img").forEach(img=>{

    img.addEventListener("click",()=>{

        if(window.confetti){

            confetti({

                particleCount:40,

                spread:60,

                origin:{
                    x:Math.random(),
                    y:Math.random()
                }

            });

        }

    });

});

// ---------- Celebrate Button ----------

celebrateBtn.addEventListener("click",()=>{

    showPage("finalPage");

});

// ===============================
// Part 3
// Final Celebration & Effects
// ===============================

// ---------- Grand Celebration ----------

function grandCelebration() {

    if (!window.confetti) return;

    const duration = 5000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {

        if (Date.now() > end) {
            clearInterval(interval);
            return;
        }

        confetti({
            particleCount: 8,
            angle: 60,
            spread: 80,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 8,
            angle: 120,
            spread: 80,
            origin: { x: 1 }
        });

    }, 200);

}

celebrateBtn.addEventListener("click", () => {

    grandCelebration();

});

// ---------- Firework Burst ----------

function firework() {

    if (!window.confetti) return;

    confetti({
        particleCount: 300,
        spread: 180,
        startVelocity: 50,
        origin: {
            x: 0.5,
            y: 0.55
        }
    });

}

setTimeout(firework, 800);

// ---------- Sparkle Effect ----------

function sparkle() {

    const s = document.createElement("div");

    s.className = "sparkle";

    s.style.left = Math.random() * window.innerWidth + "px";

    s.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(s);

    setTimeout(() => {

        s.remove();

    }, 2000);

}

setInterval(sparkle, 300);

// ---------- Final Balloon Animation ----------

function animateBalloons() {

    document.querySelectorAll(".balloons span")
        .forEach(balloon => {

            balloon.style.animationDuration =
                (8 + Math.random() * 6) + "s";

        });

}

animateBalloons();

// ---------- Replay ----------

window.addEventListener("load", () => {

    showPage("home");

});

// ---------- Prevent Music Pause ----------

document.body.addEventListener("click", () => {

    if (music.paused) {

        music.play().catch(() => {});

    }

});

// ---------- Keyboard Shortcuts ----------

document.addEventListener("keydown", e => {

    if (e.key === "Enter") {

        const active = document.querySelector(".page.active");

        if (active.id === "home") startBtn.click();

        if (active.id === "question") yesBtn.click();

        if (active.id === "cakePage") wishBtn.click();

        if (active.id === "galleryPage") nextBtn.click();

        if (active.id === "letterPage") celebrateBtn.click();

    }

});

// ---------- Window Resize ----------

window.addEventListener("resize", () => {

    noBtn.style.transform = "translate(0,0)";

});

// ---------- Console Message ----------

console.log(
`
🎂 Happy Birthday Website
Made with ❤️
Enjoy the celebration!
`
);