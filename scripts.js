document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            validateLogin();
        });
    }

    const timerElement = document.getElementById('timer');
    let isDragging = false;
    let offsetX = 0;

    if (timerElement) {
        timerElement.addEventListener('mousedown', function (event) {
            isDragging = true;
            offsetX = event.clientX - timerElement.getBoundingClientRect().left;
            timerElement.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', function (event) {
            if (isDragging) {
                let newX = event.clientX - offsetX;
                timerElement.style.left = newX + 'px';
            }
        });

        document.addEventListener('mouseup', function () {
            isDragging = false;
            timerElement.style.cursor = 'grab';
        });
    }

    startTimer();
});

function startTimer() {
    const timerElement = document.getElementById('timer');
    if (timerElement) {
        let seconds = 0;

        setInterval(function() {
            seconds++;
            timerElement.textContent = "Timer: " + seconds + " Sekunden";
        }, 1000);
    }
}

function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "Altin" && password === "Altin") {
        window.location.href = "success.html";
    } else {
        alert("Ungültiger Benutzername oder Passwort");
    }
}

