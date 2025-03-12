let timer;
let minutes = 0;
let seconds = 0;
let isTimerRunning = false;

// Función para iniciar el temporizador
function startTimer() {
    if (isTimerRunning) return; // Evita que el temporizador se inicie más de una vez

    isTimerRunning = true;

    timer = setInterval(function() {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }

        // Actualizar la pantalla del temporizador
        document.getElementById('timer-display').textContent = formatTime(minutes, seconds);
    }, 1000);
}

// Función para dar formato al tiempo
function formatTime(min, sec) {
    return (min < 10 ? '0' : '') + min + ':' + (sec < 10 ? '0' : '') + sec;
}

// Función para marcar un paso como completado
function markCompleted(step) {
    step.classList.toggle('completed');
}

// Función para reiniciar la receta y el temporizador
function resetRecipe() {
    // Resetear pasos completados
    const steps = document.querySelectorAll('#steps-list li');
    steps.forEach(step => {
        step.classList.remove('completed');
    });

    // Resetear temporizador
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    document.getElementById('timer-display').textContent = '00:00';
    isTimerRunning = false;
}
