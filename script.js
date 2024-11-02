//your JS code here. If required.
// Reference to currently playing audio
let currentAudio = null;

// Select all buttons with the class "btn"
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        const soundName = button.getAttribute("data-sound");
        const audio = new Audio(`sounds/${soundName}.mp3`);

        // Stop any current audio before playing a new one
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        // Play the selected audio and store it as currentAudio
        audio.play();
        currentAudio = audio;
    });
});

// Stop button functionality
document.querySelector(".stop").addEventListener("click", () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
});
