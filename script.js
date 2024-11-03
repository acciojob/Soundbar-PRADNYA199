// script.js

// Array of sound names (without file extension)
const sounds = ['sound1', 'sound2', 'sound3']; // Add sound file names here

// Reference to currently playing audio
let currentAudio = null;

// Get the buttons container
const buttonsContainer = document.getElementById('buttons');

// Dynamically create a button for each sound
sounds.forEach(soundName => {
    const button = document.createElement('button');
    button.classList.add('btn');
    button.setAttribute('data-sound', soundName);  // Set data-sound attribute
    button.textContent = soundName;  // Display the sound name on the button
    buttonsContainer.appendChild(button);
});

// Select all dynamically created buttons with the class "btn"
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
