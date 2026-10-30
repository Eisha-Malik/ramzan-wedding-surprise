
const openButton = document.getElementById("openInvitation");
const welcomeScreen = document.getElementById("welcomeScreen");
const invitationScreen = document.getElementById("invitationScreen");

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

// Open invitation and start music
openButton.addEventListener("click", function () {
    welcomeScreen.style.display = "none";
    invitationScreen.hidden = false;

    music.play().catch(function (error) {
        console.log("Music could not start:", error);
    });
});

// Golden sparkles and flower petals
document.addEventListener("click", function (event) {
    if (event.target.closest("#musicButton")) return;

    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.innerHTML = "✨";
    sparkle.style.left = event.clientX + "px";
    sparkle.style.top = event.clientY + "px";
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1000);

    const petal = document.createElement("div");
    petal.className = "petal";
    petal.innerHTML = "🌸";
    petal.style.left = event.clientX + "px";
    petal.style.top = event.clientY + "px";
    document.body.appendChild(petal);

    setTimeout(() => petal.remove(), 2000);
});

// Music on/off button
musicButton.addEventListener("click", function () {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});
// Gift Box Surprise

const giftBox = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");

giftBox.addEventListener("click", function () {
    giftMessage.hidden = false;

    giftBox.classList.add("gift-open");

    giftBox.innerHTML = "✨💝✨";
});