
// Typing Animation 
// Took help from W3Schools and Google to create this typing animation.

const typingElement = document.getElementById("typing");
if (typingElement) {
    const text = "Welcome to CodeQuickHub 👋";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 70);
        }
    }

    typeEffect();
}


// Live Clock
// Took help from Google to create this clock and use "setInterval()" function for seconds.

function updateClock() {
    const now = new Date();
    const clock = document.getElementById("clock");
    if (clock) {
        clock.innerText = now.toLocaleTimeString();
    }
}
setInterval(updateClock, 1000);
updateClock();


// --------------------------------------------------- Popup ---------------------------------------------------

// Took help from Google and W3schools to create this contact Popup
// Then used AI (CharGPT) to check format and syntex.

const contactBtn = document.getElementById("contactBtn");
const contactPopup = document.getElementById("contactPopup");
const closePopup = document.getElementById("closePopup");


// Open popup
contactBtn.onclick = () => {
    contactPopup.style.display = "flex";
};

// Close popup 
closePopup.onclick = () => {
    contactPopup.style.display = "none";
};
