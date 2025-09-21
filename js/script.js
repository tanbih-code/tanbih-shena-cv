document.addEventListener('DOMContentLoaded', (event) => {
    // --- Kode untuk Suara Robot ---
    const robotSound = document.getElementById('robotSound');
    const robotSoundToggle = document.getElementById('robotSoundToggle');

    let isPlaying = false; 

    if (robotSoundToggle && robotSound) {
        robotSoundToggle.addEventListener('click', () => {
            if (isPlaying) {
                robotSound.pause();
                robotSoundToggle.textContent = 'START ROBOT VOICE';
            } else {
                robotSound.play();
                robotSoundToggle.textContent = 'STOP ROBOT VOICE';
            }
            isPlaying = !isPlaying;
        });
    }

    // --- Kode untuk Dark Mode (jika ada) ---
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }
});