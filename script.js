// script.js

// Set tanggal acara pernikahan
const eventDate = new Date("2024-09-21T00:00:00").getTime();

// Update hitung mundur setiap detik
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;

    // Jika hitung mundur selesai
    if (distance < 0) {
        clearInterval(interval);
        countdownElement.innerHTML = "Acara Dimulai!";
    }
    // script.js

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-music');
    audio.play().catch(function(error) {
        console.log('Musik gagal diputar:', error);
    });
});

}

const interval = setInterval(updateCountdown, 1000);
