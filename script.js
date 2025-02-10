document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "GuessWhoIsBackMFSiAmBiPoLaRzIlOnGerror(";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(0);

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);  // Transparent background for fading effect

        ctx.fillStyle = '#00ff00';
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(char, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    setInterval(draw, 35); // Animation frame rate
});


// Get references to time and date elements
const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');

// Function to update time and date
function updateTime() {
    const now = new Date();
    const options = { hour: 'numeric', minute: '2-digit', second: '2-digit' };
    const timeString = now.toLocaleTimeString('en-US', options);
    const dateString = now.toDateString();
    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
}

// Update time every second
setInterval(updateTime, 1000);

// Initial call to display time and date
updateTime();

